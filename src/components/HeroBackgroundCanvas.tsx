"use client";

import React, { useRef, useEffect, useState } from "react";

const TOTAL_FRAMES = 300;
const FPS = 28; // Smooth 28 fps playback
const FRAME_DURATION = 1000 / FPS;

export default function HeroBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Store pre-decoded ImageBitmaps or HTMLImageElements for instantaneous GPU rendering
  const framesRef = useRef<(ImageBitmap | HTMLImageElement)[]>([]);
  const frameIndexRef = useRef<number>(0);
  const directionRef = useRef<number>(1); // 1 = forward, -1 = reverse (for seamless zero-jump loop)
  const lastTimeRef = useRef<number>(0);
  const pauseUntilRef = useRef<number>(0); // subtle pause at full bloom
  const requestRef = useRef<number | null>(null);

  // 1. High-Performance Preload & GPU Decode
  useEffect(() => {
    let loadedCount = 0;
    const framesArray: (ImageBitmap | HTMLImageElement)[] = new Array(TOTAL_FRAMES);

    const loadFrame = async (i: number) => {
      const paddedIndex = String(i).padStart(3, "0");
      const img = new Image();
      img.src = `/hero-frames/ezgif-frame-${paddedIndex}.jpg`;

      img.onload = async () => {
        try {
          if ("createImageBitmap" in window) {
            // Converts JPEG directly to GPU-accelerated VRAM bitmap
            const bitmap = await createImageBitmap(img);
            framesArray[i - 1] = bitmap;
          } else {
            if ("decode" in img) await img.decode();
            framesArray[i - 1] = img;
          }
        } catch {
          framesArray[i - 1] = img;
        }

        loadedCount++;
        // Start playback as soon as initial buffer is ready
        if (loadedCount >= 25 && !isReady) {
          setIsReady(true);
        }
      };

      img.onerror = () => {
        loadedCount++;
      };
    };

    // Trigger parallel preload for all 300 frames
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      loadFrame(i);
    }

    framesRef.current = framesArray;

    return () => {
      // Cleanup bitmaps
      framesRef.current.forEach((frame) => {
        if (frame && "close" in frame && typeof frame.close === "function") {
          frame.close();
        }
      });
      framesRef.current = [];
    };
  }, []);

  // 2. Crisp Canvas Sizing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      // Use 1x or capped 1.25x for maximum FPS and zero lag
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      const ctx = canvas.getContext("2d", { alpha: false });
      const currentIdx = frameIndexRef.current;
      const frame = framesRef.current[currentIdx];

      if (ctx && frame) {
        drawFrame(ctx, canvas, frame);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isReady]);

  // Fast GPU draw routine
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

    ctx.drawImage(frame, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 3. Buttery-Smooth Zero-Lag & Seamless Loop Engine
  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;

    const tick = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;

      // Handle subtle natural pause at peak bloom
      if (time < pauseUntilRef.current) {
        requestRef.current = requestAnimationFrame(tick);
        return;
      }

      const delta = time - lastTimeRef.current;

      if (delta >= FRAME_DURATION) {
        lastTimeRef.current = time - (delta % FRAME_DURATION);

        // Ping-pong index calculation (forward 0 -> 299, then reverse 299 -> 0)
        // This eliminates 100% of jumps/cuts!
        let nextIdx = frameIndexRef.current + directionRef.current;

        if (nextIdx >= TOTAL_FRAMES) {
          // Reached frame 300: pause briefly at full bloom, then reverse smoothly
          nextIdx = TOTAL_FRAMES - 2;
          directionRef.current = -1;
          pauseUntilRef.current = time + 400; // 400ms pause at full bloom
        } else if (nextIdx < 0) {
          // Reached frame 1: reverse back to forward smoothly
          nextIdx = 1;
          directionRef.current = 1;
          pauseUntilRef.current = time + 200; // 200ms breath at beginning
        }

        frameIndexRef.current = nextIdx;
        const currentFrame = framesRef.current[nextIdx];

        if (currentFrame) {
          drawFrame(ctx, canvas, currentFrame);
        }
      }

      requestRef.current = requestAnimationFrame(tick);
    };

    requestRef.current = requestAnimationFrame(tick);

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isReady]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* High-Performance Canvas for 300 Frames */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Only light subtle bottom fade to blend smoothly into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070b09] to-transparent pointer-events-none" />

      {/* Very light ambient top overlay only for navbar readability */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
    </div>
  );
}
