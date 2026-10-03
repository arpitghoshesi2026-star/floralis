"use client";

import React from "react";
import MetalFlower from "./MetalFlower";

export default function BrandIntroSection() {
  return (
    <section
      id="atelier-intro"
      className="relative w-full bg-[#070b09] text-[#f4efe6] pt-24 pb-20 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#2a3d31]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ========================================================= */}
        {/* PART 1: OPTION 4 — SPLIT LAYOUT (Brand Story + 3D Flower) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Story & Atelier Philosophy (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-gold border border-[#d4af37]/30 text-[#d4af37] text-[11px] uppercase tracking-[0.25em] font-medium w-fit mb-6 shadow-[0_2px_12px_rgba(212,175,55,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span>Haute Botanical Atelier</span>
            </div>

            {/* Grand Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#fbf7ee] leading-[1.14] mb-6">
              Where Living Botany Meets{" "}
              <span className="italic font-light text-gold-gradient">
                Sculptural Eternity.
              </span>
            </h2>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[#dcd6ca] font-light leading-relaxed mb-8 max-w-2xl">
              At FLORALIS, each arrangement is approached not as an ephemeral
              bouquet, but as a living art piece. Sourced at first light from
              heirloom conservatories across the Loire Valley and Holland, each
              specimen is preserved at its zenith of grace.
            </p>

            {/* 3 Architectural Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 mb-10 border-t border-white/10">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <span className="font-mono text-xs text-[#d4af37] block mb-1">
                  01 / CULTIVATION
                </span>
                <h4 className="text-sm font-medium text-[#fbf7ee] mb-1">
                  Rare European Flora
                </h4>
                <p className="text-xs text-[#8e9f94] leading-relaxed">
                  Single-origin heirloom bulbs harvested under moonlit frost.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <span className="font-mono text-xs text-[#d4af37] block mb-1">
                  02 / PRESERVATION
                </span>
                <h4 className="text-sm font-medium text-[#fbf7ee] mb-1">
                  Cold Hydration Chain
                </h4>
                <p className="text-xs text-[#8e9f94] leading-relaxed">
                  Delivered in custom climate-calibrated glass domes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/30 transition-colors">
                <span className="font-mono text-xs text-[#d4af37] block mb-1">
                  03 / ARTISTRY
                </span>
                <h4 className="text-sm font-medium text-[#fbf7ee] mb-1">
                  Master Florist Signed
                </h4>
                <p className="text-xs text-[#8e9f94] leading-relaxed">
                  Sculpted according to sacred proportions and golden ratios.
                </p>
              </div>
            </div>

            {/* Signature Credibility Note */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#a3b8aa]">
              <span className="text-[#d4af37]">✦</span>
              <span>ATELIER DE PARIS • BOND STREET LONDON</span>
            </div>
          </div>

          {/* Right Column: Full-Size Floating 3D Metal Flower (No Card, No Box) (6 Cols) */}
          <div className="lg:col-span-6 w-full flex justify-center items-center relative">
            {/* Atmospheric Ambient Glow behind the sculpture */}
            <div className="absolute w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] bg-[radial-gradient(circle,rgba(212,175,55,0.09),transparent_70%)] blur-3xl pointer-events-none" />

            {/* Pure Full-Size 3D Metal Flower Floating Freely */}
            <div className="relative w-full h-[500px] sm:h-[580px] lg:h-[640px] flex items-center justify-center">
              <MetalFlower
                tint="#f8f4ec"
                petals={14}
                rows={3}
                length={20}
                spin={4}
                sizePercent={215}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PART 2: OPTION 3 — CINEMATIC PRELUDE TO STORYTELLING      */}
        {/* ========================================================= */}
        <div className="mt-24 pt-16 border-t border-white/10 flex flex-col items-center text-center relative">
          {/* Subtle Golden Diamond Glyph */}
          <div className="inline-flex items-center gap-4 mb-5">
            <span className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#d4af37]" />
            <span className="text-[#d4af37] text-base">✦</span>
            <span className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#d4af37]" />
          </div>

          {/* Prelude Badge */}
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-[#d4af37] font-semibold mb-4 block">
            The Botanical Metamorphosis
          </span>

          {/* Prelude Headline */}
          <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#fbf7ee] font-normal tracking-tight max-w-4xl leading-[1.2] sm:leading-[1.15] mb-6">
            Witness The Unfolding: <br className="hidden sm:inline" />
            <span className="italic font-light text-gold-gradient">
              The Alchemy of a Single Bloom
            </span>
          </h3>

          {/* Prelude Narrative */}
          <p className="text-base sm:text-lg md:text-xl text-[#ded8cb] font-light max-w-2xl leading-relaxed mb-10">
            Before our artisanal arrangements take physical shape, a rare Dutch
            tulip undergoes a sacred transformation. Prepared in 284
            high-definition frames for your interactive scroll discovery.
          </p>

          {/* Scroll Down Trigger linking to #storytelling */}
          <a
            href="#storytelling"
            className="inline-flex items-center gap-3.5 px-8 sm:px-10 py-4 rounded-full text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#f8e5b9] bg-white/5 border border-[#d4af37]/40 hover:bg-[#d4af37]/20 hover:border-[#d4af37] hover:scale-105 transition-all duration-300 shadow-[0_6px_24px_rgba(0,0,0,0.5)] group"
          >
            <span>Scroll to Scrub The Story</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] group-hover:translate-y-1.5 transition-transform"
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
