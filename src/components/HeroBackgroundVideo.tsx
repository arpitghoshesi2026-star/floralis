"use client";

import React from "react";

export default function HeroBackgroundVideo() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{ transform: "translate3d(0, 0, 0)", willChange: "transform" }}
    >
      {/* 13-Second Silent Hardware-Accelerated Video directly on GPU */}
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover"
        style={{
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />

      {/* Clean bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#070b09] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
    </div>
  );
}
