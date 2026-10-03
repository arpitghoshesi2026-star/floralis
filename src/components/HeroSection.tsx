"use client";

import React from "react";
import HeroBackgroundVideo from "./HeroBackgroundVideo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* 13-Second Silent Hardware-Accelerated Loop Video */}
      <HeroBackgroundVideo />

      {/* Foreground Content: Centered Vertical Card */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center justify-center">
        <div
          className="max-w-3xl sm:max-w-4xl w-full mx-auto rounded-3xl py-8 sm:py-10 px-8 sm:px-14 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center text-center"
          style={{
            backgroundColor: "rgba(10, 16, 13, 0.38)",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {/* Subtle Botanical Glyph */}
          <div className="w-7 h-7 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-xs mb-4 bg-black/20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            ✦
          </div>

          {/* Main Title - Proportional Grand Typography */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#fbf7ee] leading-[1.12] mb-4 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            Made by Nature, <br />
            <span className="italic font-light text-gold-gradient">
              Chosen by You.
            </span>
          </h1>

          {/* Elegant Expanded Divider */}
          <div className="w-24 sm:w-36 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent my-3" />

          {/* Subtext - Proportional Width & Size */}
          <p className="text-base sm:text-lg md:text-xl text-[#e0ece4] font-light max-w-xl leading-relaxed mb-7 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Bring a little more life into every moment.
          </p>

          {/* Centered CTA Button */}
          <a
            href="#storytelling"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold bg-gradient-to-r from-[#d4af37] via-[#e2be5f] to-[#d4af37] text-[#070b09] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-[1.03] transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[#070b09] group-hover:scale-125 transition-transform" />
            <span>Experience The Story</span>
            <svg
              className="w-4 h-4 translate-y-0.5 group-hover:translate-y-1.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
