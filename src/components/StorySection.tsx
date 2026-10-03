"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 284;

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stickyStageRef = useRef<HTMLDivElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);
  const endBadgeRef = useRef<HTMLDivElement>(null);
  const topIndicatorRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressPercentRef = useRef<HTMLSpanElement>(null);
  const frameDisplayRef = useRef<HTMLSpanElement>(null);

  const [isReady, setIsReady] = useState(false);

  // In-memory pre-decoded frames for instant 60 FPS scroll scrubbing
  const framesRef = useRef<(ImageBitmap | HTMLImageElement)[]>([]);
  const currentFrameRef = useRef<number>(0);

  // 1. Parallel Preload & GPU Decode of all 284 frames
  useEffect(() => {
    let count = 0;
    const framesArray: (ImageBitmap | HTMLImageElement)[] = new Array(TOTAL_FRAMES);

    const loadFrame = async (i: number) => {
      const paddedIndex = String(i).padStart(3, "0");
      const img = new Image();
      img.src = `/story-frames/frame_${paddedIndex}.jpg`;

      img.onload = async () => {
        try {
          if ("createImageBitmap" in window) {
            const bitmap = await createImageBitmap(img);
            framesArray[i - 1] = bitmap;
          } else {
            if ("decode" in img) await img.decode();
            framesArray[i - 1] = img;
          }
        } catch {
          framesArray[i - 1] = img;
        }

        count++;
        // Start rendering as soon as initial frames are ready
        if (count >= 15 && !isReady) {
          setIsReady(true);
        }
      };

      img.onerror = () => {
        count++;
      };
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      loadFrame(i);
    }

    framesRef.current = framesArray;

    return () => {
      framesRef.current.forEach((frame) => {
        if (frame && "close" in frame && typeof frame.close === "function") {
          frame.close();
        }
      });
      framesRef.current = [];
    };
  }, []);

  // Frame Draw Function with 1.05x overscan zoom to crop corner watermarks
  const drawFrame = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    frame: ImageBitmap | HTMLImageElement
  ) => {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const frameWidth =
      "naturalWidth" in frame ? frame.naturalWidth : frame.width;
    const frameHeight =
      "naturalHeight" in frame ? frame.naturalHeight : frame.height;

    if (!frameWidth || !frameHeight) return;

    const imgAspect = frameWidth / frameHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawHeight = canvasWidth / imgAspect;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    // 1.05x overscan zoom crops out edge watermarks while keeping the botanical core razor-sharp
    const zoom = 1.05;
    drawWidth *= zoom;
    drawHeight *= zoom;
    offsetX = (canvasWidth - drawWidth) / 2;
    offsetY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(frame, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 2. High-DPI Responsive Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);

      const ctx = canvas.getContext("2d", { alpha: false });
      const currentIdx = currentFrameRef.current;
      const frame = framesRef.current[currentIdx];

      if (ctx && frame) {
        drawFrame(ctx, canvas, frame);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isReady]);

  // 3. Highly Refined GSAP ScrollTrigger + Scale-Down Transition
  useEffect(() => {
    if (!isReady || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Initial render of first frame
    const canvas = canvasRef.current;
    if (canvas && framesRef.current[0]) {
      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) drawFrame(ctx, canvas, framesRef.current[0]);
    }

    // Direct scrub: true ensures 100% tight synchronization with Lenis's inertia
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = Math.max(0, Math.min(1, self.progress));
        const percent = Math.round(progress * 100);

        // 1. Direct GPU-accelerated progress bar update
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${progress})`;
        }

        // 2. Direct percentage text update
        if (progressPercentRef.current) {
          progressPercentRef.current.textContent = `${percent}%`;
        }

        // 3. Frame calculation mapped precisely across total frames
        const targetFrameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(progress * (TOTAL_FRAMES - 1))
        );

        if (targetFrameIndex !== currentFrameRef.current) {
          currentFrameRef.current = targetFrameIndex;

          if (canvas) {
            const ctx = canvas.getContext("2d", { alpha: false });
            const frame = framesRef.current[targetFrameIndex];
            if (ctx && frame) {
              drawFrame(ctx, canvas, frame);
            }
          }

          if (frameDisplayRef.current) {
            frameDisplayRef.current.textContent = `Frame ${targetFrameIndex + 1} / ${TOTAL_FRAMES}`;
          }
        }

        // 4. Dynamic Curve & Scale Transitions:
        // - Before story starts (progress = 0 to 0.05): Curved top entrance that smoothly unfolds into full screen
        // - Story Playing (progress = 0.05 to 0.85): 100% PURE FULL SCREEN (Zero curves, zero borders)
        // - Story Ending (progress = 0.85 to 1.0): Smooth scale-down into framed masterpiece card
        const entryProgress = Math.min(1, progress / 0.05);
        const entryCurve = 1 - entryProgress; // 1 at start, 0 once scrubbing begins

        const exitStart = 0.85;
        let exitProgress = 0;
        if (progress > exitStart) {
          exitProgress = Math.min(1, Math.max(0, (progress - exitStart) / (1 - exitStart)));
        }
        const exitEased = exitProgress * exitProgress * (3 - 2 * exitProgress);

        if (videoFrameRef.current && stickyStageRef.current) {
          if (exitEased > 0.01) {
            // Exit: Smoothly scales down into framed card
            const currentScale = 1 - exitEased * 0.15; // From 1.0 to 0.85
            const currentRadius = Math.round(exitEased * 32); // Up to 32px all around

            videoFrameRef.current.style.transform = `scale(${currentScale})`;
            videoFrameRef.current.style.borderRadius = `${currentRadius}px`;
            videoFrameRef.current.style.boxShadow = `0 ${15 + exitEased * 35}px ${30 + exitEased * 60}px rgba(0,0,0,0.92), 0 0 ${exitEased * 40}px rgba(212,175,55,${exitEased * 0.22})`;
            videoFrameRef.current.style.border = `1px solid rgba(212, 175, 55, ${exitEased * 0.4})`;

            stickyStageRef.current.style.borderRadius = "0px";
            stickyStageRef.current.style.borderTop = "none";
          } else if (entryCurve > 0.01) {
            // Entry (Before story starts): Curved top entrance portal
            const topRadius = Math.round(entryCurve * 48);

            videoFrameRef.current.style.transform = "scale(1)";
            videoFrameRef.current.style.borderRadius = `${topRadius}px ${topRadius}px 0px 0px`;
            videoFrameRef.current.style.boxShadow = "none";
            videoFrameRef.current.style.border = "none";

            stickyStageRef.current.style.borderRadius = `${topRadius}px ${topRadius}px 0px 0px`;
            stickyStageRef.current.style.borderTop = `1px solid rgba(212, 175, 55, ${entryCurve * 0.45})`;
          } else {
            // Story Playing (from 5% to 85%): 100% PURE FULL SCREEN! Zero curves, zero borders!
            videoFrameRef.current.style.transform = "scale(1)";
            videoFrameRef.current.style.borderRadius = "0px";
            videoFrameRef.current.style.boxShadow = "none";
            videoFrameRef.current.style.border = "none";

            stickyStageRef.current.style.borderRadius = "0px";
            stickyStageRef.current.style.borderTop = "none";
          }
        }

        // Fade in completion badge on the framed card near the very end
        if (endBadgeRef.current) {
          const badgeOpacity = Math.max(0, Math.min(1, (exitEased - 0.3) / 0.7));
          endBadgeRef.current.style.opacity = String(badgeOpacity);
        }

        // Gracefully fade out floating timeline bar and top indicator as framed card completes
        const chromeOpacity = String(Math.max(0, 1 - exitEased * 0.9));
        if (bottomBarRef.current) {
          bottomBarRef.current.style.opacity = chromeOpacity;
        }
        if (topIndicatorRef.current) {
          topIndicatorRef.current.style.opacity = chromeOpacity;
        }
      },
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, [isReady]);

  return (
    <section
      id="storytelling"
      ref={containerRef}
      className="relative h-[600vh] bg-[#070b09]"
    >
      {/* Pinned Sticky Stage - Dynamically transitions from curved top to full screen */}
      <div
        ref={stickyStageRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#070b09] relative rounded-t-[48px] border-t border-[#d4af37]/45 transition-[border-radius,border] duration-150 ease-out"
      >
        {/* 100% Edge-to-Edge Fullscreen Canvas Wrapper (Zero Margins, Zero Side Padding) */}
        <div
          ref={videoFrameRef}
          className="absolute inset-0 w-full h-full overflow-hidden origin-center z-0 rounded-t-[48px]"
          style={{
            transform: "scale(1)",
            borderRadius: "48px 48px 0px 0px",
            willChange: "transform, border-radius, box-shadow",
          }}
        >
          <canvas
            ref={canvasRef}
            className={`w-full h-full block object-cover transition-opacity duration-700 ${
              isReady ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Elegant Framed Card Badge (Only Fades In When Scaled Down at the End) */}
          <div
            ref={endBadgeRef}
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none opacity-0 transition-opacity duration-300 z-10"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0a110d]/85 backdrop-blur-md border border-[#d4af37]/45 text-[#f8e5b9] text-xs font-mono tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span>Tulipa Specimen • Dawn Bloom Complete</span>
            </div>
            <span className="text-xs font-serif italic text-white/80 hidden sm:inline tracking-wider drop-shadow-md">
              Gliding to Living Specimen Archive ↓
            </span>
          </div>
        </div>

        {/* Floating Top Minimalist Indicator */}
        <div
          ref={topIndicatorRef}
          className="absolute top-6 sm:top-8 left-0 right-0 z-20 max-w-7xl mx-auto px-6 flex items-center justify-between pointer-events-none transition-opacity duration-200"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-gold border border-[#d4af37]/35 text-[#f8e5b9] text-[10px] uppercase tracking-[0.25em] font-semibold backdrop-blur-md shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
            <span>Interactive Story Scroll</span>
          </div>

          <div className="flex items-center gap-3">
            <span
              ref={frameDisplayRef}
              className="text-[11px] font-mono text-[#f8e5b9]/90 tracking-widest uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
            >
              Frame 1 / {TOTAL_FRAMES}
            </span>
          </div>
        </div>

        {/* Floating Bottom Horizontal Timeline Pill (Overlaid with Glassmorphism) */}
        <div
          ref={bottomBarRef}
          className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 px-4 sm:px-6 pointer-events-none transition-opacity duration-200"
        >
          <div className="max-w-4xl mx-auto rounded-full bg-black/60 backdrop-blur-xl border border-white/15 py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-4 sm:gap-6">
            <span className="text-[10px] uppercase tracking-widest text-[#d8e5dc] whitespace-nowrap font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              Timeline
            </span>

            {/* Continuous Scrubber Bar */}
            <div className="relative flex-1 h-1.5 bg-white/15 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f8e5b9] to-[#d4af37] rounded-full shadow-[0_0_12px_#d4af37] origin-left"
                style={{
                  transform: "scaleX(0)",
                  willChange: "transform",
                }}
              />
            </div>

            <span
              ref={progressPercentRef}
              className="font-mono text-xs text-[#d4af37] font-semibold whitespace-nowrap min-w-[36px] text-right"
            >
              0%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
