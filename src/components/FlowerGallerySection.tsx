"use client";

import React from "react";
import { CalendlyCarousel, CarouselItem } from "@/components/ui/connected-carousel";

// 10 Botanical Specimen Curation Stories (Ready for user's 10 custom photos)
export const BOTANICAL_STORIES: CarouselItem[] = [
  {
    id: "crimson-tulip",
    stat: "99.8% Freshness Longevity",
    quote:
      "The cold-chain glass cases preserved the Dutch crimson petals in breathtaking perfection for over two weeks.",
    author: "Lady Vivienne Thorne",
    role: "Private Patron • Mayfair London",
    defaultImage: "/images/crimson-roses.jpg",
    selectedImage: "/images/crimson-roses.jpg",
    alt: "Dutch Crimson Rose and Tulip Curation",
  },
  {
    id: "nocturne-peony",
    stat: "Single-Origin French Peonies",
    quote:
      "Each arrangement feels less like flowers and more like high-fashion living sculpture placed in our gallery.",
    author: "Antoine Laurent",
    role: "Creative Director • Galerie Saint-Honoré Paris",
    defaultImage: "/images/hero-bouquet.jpg",
    selectedImage: "/images/hero-bouquet.jpg",
    alt: "Heirloom Nocturne French Peony Sculpture",
  },
  {
    id: "imperial-orchid",
    stat: "Bespoke Golden Ratio Architecture",
    quote:
      "The scent of wild white orchids transformed our dining salon into a private botanical conservatory.",
    author: "Serena Vance",
    role: "Interior Architect • Zurich",
    defaultImage: "/images/orchids.jpg",
    selectedImage: "/images/orchids.jpg",
    alt: "Imperial White Phalaenopsis Orchids",
  },
  {
    id: "aurora-ranunculus",
    stat: "Dawn-Harvested Cultivars",
    quote:
      "Unboxing the velvet-padded case was an emotional ritual. The rare apricot ranunculus was beyond magnificent.",
    author: "Evelyn Sterling",
    role: "Haute Horlogerie Collector • Geneva",
    defaultImage:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    selectedImage:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    alt: "Apricot Aurora Ranunculus",
  },
  {
    id: "velvet-rose",
    stat: "24-Hour Climate Logistics",
    quote:
      "Arrived in Zurich chilled to exact cellar temperature with fresh morning dew intact on every petal.",
    author: "Marc Dupont",
    role: "Sommelier & Restaurateur • Lyon",
    defaultImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    selectedImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    alt: "Velvet Rose Bouquet",
  },
  {
    id: "white-calla",
    stat: "Signed Florist Atelier Specimen",
    quote:
      "Pure sculptural minimalism. The pristine calla lilies commanded the entire grand foyer.",
    author: "Chiara Moretti",
    role: "Villa D'Este • Milan",
    defaultImage:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
    selectedImage:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
    alt: "Pristine White Calla Lilies",
  },
  {
    id: "golden-mimosa",
    stat: "Riviera Winter Solstice Collection",
    quote:
      "Brought the golden sun of the French Riviera into our snowbound Alpine chalet.",
    author: "Klaus Hoffmann",
    role: "St. Moritz Private Member",
    defaultImage:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=80",
    selectedImage:
      "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=80",
    alt: "Golden Mimosa and Sun-Drenched Flora",
  },
  {
    id: "black-baccara",
    stat: "Deepest Obsidian Velvet Tones",
    quote:
      "The drama of Black Baccara roses created an unforgettable centerpiece for our private gala.",
    author: "Isabella De Silva",
    role: "Haute Joaillerie Ambassador",
    defaultImage:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=80",
    selectedImage:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=80",
    alt: "Black Baccara Velvet Roses",
  },
  {
    id: "japanese-anemone",
    stat: "Kyoto Heritage Greenhouses",
    quote:
      "Zen balance and botanical poetry. An unhurried celebration of nature's sacred geometry.",
    author: "Kenji Takahashi",
    role: "Master Ceramist • Kyoto",
    defaultImage:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
    selectedImage:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
    alt: "Japanese White Botanical Arrangement",
  },
  {
    id: "eternal-tulip",
    stat: "Artisanal Living Poetry",
    quote:
      "FLORALIS has elevated floristry into pure fine art. A triumph of natural beauty and human devotion.",
    author: "Countess Camilla Ward",
    role: "Kensington • London",
    defaultImage:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=80",
    selectedImage:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=80",
    alt: "Eternal Blooming Tulip Specimen",
  },
];

export default function FlowerGallerySection() {
  return (
    <section
      id="gallery"
      className="relative w-full bg-[#070b09] text-[#f4efe6] pt-14 pb-12 sm:pt-20 sm:pb-14 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Content */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-10 sm:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold border border-[#d4af37]/35 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-medium mb-5 shadow-[0_2px_12px_rgba(212,175,55,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          <span>Connected Botanical Archive</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#fbf7ee] leading-[1.15] mb-5">
          Curated Chronicles:{" "}
          <span className="italic font-light text-gold-gradient">
            10 Living Masterpieces
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#ded8cb] font-light max-w-2xl mx-auto leading-relaxed">
          Explore our signature flora collection. Click on flanking cards or use
          arrow keys to glide between living botanical sculptures.
        </p>
      </div>

      {/* Connected Stacked Carousel with Spring Physics */}
      <div className="w-full relative z-10 px-4 sm:px-6">
        <CalendlyCarousel
          items={BOTANICAL_STORIES}
          autoPlayInterval={5500}
          pauseOnHover={true}
        />
      </div>

      {/* Bottom Interactive Navigation Hint */}
      <div className="max-w-7xl mx-auto px-6 mt-6 text-center relative z-10">
        <div className="inline-flex items-center gap-4 text-xs font-mono text-[#8e9f94] tracking-widest uppercase">
          <span>← Arrow Keys or Click Side Cards to Navigate →</span>
        </div>
      </div>
    </section>
  );
}
