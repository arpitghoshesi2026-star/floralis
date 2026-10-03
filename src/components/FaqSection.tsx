"use client";

import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    category: "PRESERVATION",
    question: "How do FLORALIS arrangements maintain freshness for up to 14 days?",
    answer:
      "Every stem is harvested at first light across our European partner conservatories and instantly treated with an active nutrient hydration seal. During transit, our proprietary nitrogen-sealed domes maintain optimal cell turgidity at a steady 8°C, preventing early oxidation and extending natural vase longevity far beyond standard retail bouquets.",
  },
  {
    id: 2,
    category: "BESPOKE ARTISTRY",
    question: "Can I commission a completely bespoke floral sculpture for an estate or private event?",
    answer:
      "Yes. Our Haute Concierge works directly with private patrons, interior architects, and luxury event producers worldwide. We craft 3D botanical renderings, procure rare seasonal cultivars, and dispatch our master florists on-site across Paris, London, Milan, and Zurich for bespoke residential and yacht installations.",
  },
  {
    id: 3,
    category: "LOGISTICS",
    question: "What is the delivery process, and how are flowers protected during transit?",
    answer:
      "All arrangements travel exclusively in temperature-regulated private vehicles locked at 8°C. Each creation arrives in our custom weighted, magnetic obsidian presentation case, lined with protective velvet and accompanied by a hand-blown crystal vase, organic hydration elixirs, and a personalized wax-sealed care dossier.",
  },
  {
    id: 4,
    category: "ORIGIN",
    question: "Where are your rare cultivars and heirloom bulbs sourced?",
    answer:
      "We source exclusively from certified heritage growers and private conservatories throughout the Loire Valley (France), Aalsmeer (Netherlands), and select Mediterranean micro-climates. We avoid industrial monoculture farming, ensuring exceptional petal density, natural perfume, and architectural stem strength.",
  },
  {
    id: 5,
    category: "CARE DOSSIER",
    question: "What care is required once my botanical sculpture is unveiled?",
    answer:
      "Place your arrangement away from direct midday sunlight, heat sources, and drafts. Simply top up the crystal vessel with room-temperature filtered water and a few drops of our provided botanical elixir every 3 to 4 days. A comprehensive care manual tailored to your specific flower species is included in the delivery case.",
  },
  {
    id: 6,
    category: "MEMBERSHIP",
    question: "Do you offer private patron subscriptions or recurring atelier rotations?",
    answer:
      "Yes. Our Private Patron Membership grants weekly or bi-weekly seasonal botanical rotations delivered directly to your residence, private gallery, or corporate suite. Each delivery is curated and overseen by your dedicated personal floral sommelier.",
  },
  {
    id: 7,
    category: "CONCIERGE",
    question: "What is your order amendment or date-rescheduling policy?",
    answer:
      "Because our cultivars are harvested to order at dawn specifically for your piece, cancellations or rescheduling can be seamlessly made up to 48 hours prior to your scheduled delivery window through your private digital concierge dashboard or direct WhatsApp liaison.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#070b09] text-[#f4efe6] py-14 sm:py-20 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2a3d31]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold border border-[#d4af37]/35 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-medium mb-5 shadow-[0_2px_12px_rgba(212,175,55,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span>Curator Inquiries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#fbf7ee] leading-[1.15] mb-5">
            Frequently Answered{" "}
            <span className="italic font-light text-gold-gradient">
              Curiosities.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#ded8cb] font-light max-w-xl mx-auto leading-relaxed">
            Everything you need to know regarding our cold-chain botanical
            preservation, private estate commissions, and white-glove delivery.
          </p>
        </div>

        {/* 7 Accordion Items */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#0b130f] border-[#d4af37]/45 shadow-[0_8px_30px_rgba(212,175,55,0.08)]"
                    : "bg-[#090f0c]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 sm:px-8 py-4.5 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-5">
                    <span className="font-mono text-xs sm:text-sm text-[#d4af37] font-semibold tracking-wider">
                      {String(faq.id).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-base sm:text-lg text-[#fbf7ee] font-medium tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Golden Rotating Indicator Icon */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      isOpen
                        ? "bg-[#d4af37] text-[#070b09] border-[#d4af37] rotate-45 shadow-[0_0_12px_#d4af37]"
                        : "text-[#d4af37] bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Collapsible Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 sm:px-8 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 sm:pb-6 opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2.5 border-t border-white/10">
                      <p className="text-sm sm:text-[15px] text-[#cbd5cc] leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Concierge Assistance Link */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-mono text-[#8e9f94] tracking-wider uppercase mb-2.5">
            Have a private inquiry not listed here?
          </p>
          <a
            href="#concierge"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#d4af37] hover:text-[#f8e5b9] tracking-[0.2em] uppercase font-medium transition-colors group"
          >
            <span>Speak With Our Private Concierge</span>
            <span className="group-hover:translate-x-1.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
