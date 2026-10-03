"use client";

import React from "react";

export default function BotanicalExperience() {
  const pillars = [
    {
      num: "01",
      title: "Alpine Sourcing & Dawn Harvest",
      desc: "We harvest stems exclusively at 04:30 AM when cell hydration is peak. Never warehouse-stored; flown fresh from artisanal growers in Grasse, Kyoto, and the Dutch highlands.",
      icon: "🌱",
    },
    {
      num: "02",
      title: "Stem Longevity Conditioning",
      desc: "Each stem is conditioned in our proprietary cold-pressed mineral elixir that prevents vascular air-locking. Guarantees 10+ days of blooming radiance.",
      icon: "💧",
    },
    {
      num: "03",
      title: "Zero-Plastic Haute Packaging",
      desc: "No toxic floral foam or single-use plastics. Wrapped in handmade Japanese mulberry washi paper, secured with raw French silk, and boxed in recycled matte obsidian fiber.",
      icon: "✨",
    },
    {
      num: "04",
      title: "White-Glove Private Delivery",
      desc: "Delivered in bespoke climate-controlled cases maintained at a steady 12°C. Hand-presented by couriers in formal attire with customized wax-sealed calligraphy.",
      icon: "🕊️",
    },
  ];

  return (
    <section id="experience" className="py-28 bg-[#050907] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-gold text-[10px] uppercase tracking-[0.25em] text-[#d4af37] mb-4">
            <span>✦</span> The Atelier Philosophy
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#fbf7ee] font-normal leading-tight">
            Floristry Reimagined as <br />
            <span className="italic text-gold-gradient">Living Architecture</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9ab0a2] font-light mt-4 leading-relaxed">
            We believe flowers should not be mass-produced decorations. They are
            fleeting moments of natural wonder, celebrated with reverent craft.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-mono text-[#d4af37] font-semibold">
                    {item.num}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#fbf7ee] font-medium group-hover:text-[#f8e5b9] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9ab0a2] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold">
                <span>The Floralis Standard</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Private Atelier Consultation Banner */}
        <div className="mt-16 glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
              Private Commission & Weddings
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Planning a Galas, Intimate Soirée, or Bespoke Gift?
            </h3>
            <p className="text-xs sm:text-sm text-[#c0cfc5] font-light mt-2 max-w-xl">
              Meet directly with our Master Botanical Director to sculpt floral
              installations tailored to your venue and scent preferences.
            </p>
          </div>

          <a
            href="#concierge"
            className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#d4af37] to-[#e4c264] text-[#070b09] shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-all whitespace-nowrap"
          >
            Book Atelier Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
