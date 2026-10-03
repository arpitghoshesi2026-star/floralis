"use client";

import React from "react";

const STEPS = [
  {
    step: "01",
    tag: "CURATION",
    title: "Select Your Botanical Palette",
    desc: "Choose from our seasonal harvest of rare Dutch and French cultivars, or commission a completely bespoke living sculpture through our private floral concierge.",
  },
  {
    step: "02",
    tag: "ARTISTRY",
    title: "Dawn Harvest & Master Sculpting",
    desc: "Master florists condition each bloom at first light, hand-tying stems according to sacred geometric proportions, adorned with hand-loomed silk ribbons.",
  },
  {
    step: "03",
    tag: "LOGISTICS",
    title: "Climate-Calibrated Cold Chain",
    desc: "Each creation is sealed inside a climate-controlled glass dome locked at 8°C with nutrient gel hydration, preventing oxidation and preserving 100% petal freshness.",
  },
  {
    step: "04",
    tag: "CONCIERGE",
    title: "White-Glove Presentation",
    desc: "Hand-delivered by private courier in a weighted obsidian luxury box, accompanied by a custom wax-sealed care dossier and artisanal nutrient elixirs.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full bg-[#070b09] text-[#f4efe6] py-14 sm:py-20 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Lighting Glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#2a3d31]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold border border-[#d4af37]/35 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-medium mb-5 shadow-[0_2px_12px_rgba(212,175,55,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span>The Atelier Journey</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#fbf7ee] leading-[1.15] mb-5">
            From Sacred Soil to{" "}
            <span className="italic font-light text-gold-gradient">
              Living Masterpiece.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#ded8cb] font-light leading-relaxed max-w-2xl mx-auto">
            Every FLORALIS arrangement follows an uncompromising 4-step ritual of
            botanical preservation and bespoke craftsmanship.
          </p>
        </div>

        {/* 4 Interactive Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => (
            <div
              key={item.step}
              className="group relative p-7 sm:p-8 rounded-3xl bg-[#0b130f]/85 border border-white/10 hover:border-[#d4af37]/45 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)] hover:-translate-y-1.5"
            >
              {/* Subtle Card Accent Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/6 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Step Number & Tag */}
                <div className="flex items-center justify-between mb-7">
                  <span className="font-serif text-4xl sm:text-5xl text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors duration-500 font-light">
                    {item.step}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-[#d4af37] font-medium tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#fbf7ee] font-medium tracking-tight mb-3.5 group-hover:text-gold-gradient transition-all leading-snug">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-[15px] text-[#cbd5cc] group-hover:text-[#f4efe6] leading-relaxed transition-colors font-light">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator Line */}
              <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8e9f94]">
                <span className="font-medium">Phase {index + 1} of 4</span>
                <span className="text-[#d4af37] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  ✦
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
