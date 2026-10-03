"use client";

import React, { useRef, useEffect, useState } from "react";

const TOTAL_FRAMES = 209;
const FPS = 25; // Smooth cinematic playback speed
const FRAME_DURATION = 1000 / FPS;

export default function HeroFramePlayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Store preloaded images in a ref to avoid re-renders
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const frameIndexRef = useRef<number>(0);

  // Preload frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/hero-frames/ezgif-frame-${paddedIndex}.jpg`;

      img.onload = () => {
        loadedCount++;
        // As soon as first 10 frames are loaded, we can start playback immediately
        if (loadedCount >= 10 && !isLoaded) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!isLoaded || !isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;

      if (delta >= FRAME_DURATION) {
        lastTimeRef.current = time - (delta % FRAME_DURATION);

        // Next frame index
        frameIndexRef.current = (frameIndexRef.current + 1) % TOTAL_FRAMES;
        const currentIdx = frameIndexRef.current;
        setCurrentFrame(currentIdx + 1);

        const img = imagesRef.current[currentIdx];
        if (img && img.complete && img.naturalWidth > 0) {
          // Responsive cover drawing
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;

          // Clear
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);

          // Cover calculations
          const imgAspect = img.naturalWidth / img.naturalHeight;
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

          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      }

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isLoaded, isPlaying]);

  // Handle Resize for sharp Canvas DPI
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Draw immediately if an image is available
      const ctx = canvas.getContext("2d");
      const currentIdx = frameIndexRef.current;
      const img = imagesRef.current[currentIdx];
      if (ctx && img && img.complete && img.naturalWidth > 0) {
        const imgAspect = img.naturalWidth / img.naturalHeight;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasAspect > imgAspect) {
          drawHeight = canvas.width / imgAspect;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none w-full">
      {/* Ambient glow behind player */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/25 via-[#e29578]/20 to-[#1b432e]/30 rounded-3xl blur-2xl transform scale-95" />

      {/* Main Glass Frame Container */}
      <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/35 glass-panel p-2.5 shadow-2xl shadow-black/80">
        <div
          onClick={togglePlayback}
          className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-[#050806] cursor-pointer group"
          title={isPlaying ? "Click to Pause" : "Click to Play"}
        >
          {/* Canvas Rendering Frame Loop */}
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isLoaded ? 1 : 0 }}
          />

          {/* Loading Placeholder Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070b09] text-[#d4af37] gap-3">
              <span className="w-8 h-8 rounded-full border-2 border-[#d4af37] border-t-transparent animate-spin" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#f8e5b9] font-mono">
                Loading Botanical Frames...
              </span>
            </div>
          )}

          {/* Vignette & Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b09]/80 via-transparent to-black/30 pointer-events-none" />

          {/* Top Status Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-gold border border-[#d4af37]/40 text-[#f8e5b9] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
              <span>Living Bloom Loop</span>
            </div>

            {/* Frame Counter */}
            <div className="px-3 py-1 rounded-full glass-panel text-[10px] font-mono text-[#c0cfc5] border border-white/10">
              FRAME {String(currentFrame).padStart(3, "0")} / {TOTAL_FRAMES}
            </div>
          </div>

          {/* Play/Pause Hover Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25 pointer-events-none z-10">
            <div className="w-12 h-12 rounded-full glass-panel-gold border border-[#d4af37] flex items-center justify-center text-[#f8e5b9] text-base shadow-xl">
              {isPlaying ? "⏸" : "▶"}
            </div>
          </div>

          {/* Bottom Card Label */}
          <div className="absolute bottom-4 left-4 right-4 glass-panel-gold rounded-xl p-3.5 border border-white/15 pointer-events-none z-10">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
                  Interactive Frame Player • 25 FPS
                </span>
                <h4 className="text-sm font-serif text-white font-medium mt-0.5">
                  Continuous Botanical Story
                </h4>
              </div>
              <span className="text-xs font-mono text-[#d4af37] font-bold">
                {Math.round((currentFrame / TOTAL_FRAMES) * 100)}%
              </span>
            </div>

            {/* Mini Progress scrubber line */}
            <div className="mt-2.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#d4af37] to-[#f8e5b9] rounded-full transition-all duration-75"
                style={{ width: `${(currentFrame / TOTAL_FRAMES) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
