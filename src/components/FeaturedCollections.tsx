"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FlowerProduct {
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  tag: string;
  description: string;
  notes: string[];
}

const products: FlowerProduct[] = [
  {
    id: "solstice-nocturne",
    name: "The Solstice Nocturne",
    collection: "Haute Botanics",
    price: 185,
    image: "/images/hero-bouquet.jpg",
    tag: "Artisan Signature",
    description:
      "A dramatic composition of heirloom blush garden peonies, velvety burgundy ranunculus, and wild fragrant eucalyptus.",
    notes: ["French Peonies", "Alpine Ranunculus", "Wild Eucalyptus"],
  },
  {
    id: "cascading-phalaenopsis",
    name: "Cascading Phalaenopsis",
    collection: "Sculptural Living Art",
    price: 240,
    image: "/images/orchids.jpg",
    tag: "Rare Harvest",
    description:
      "Architectural pure white Phalaenopsis orchids paired with rare honey-champagne garden roses in fluted stoneware.",
    notes: ["Imperial Orchids", "Champagne Roses", "Fluted Stoneware"],
  },
  {
    id: "midnight-velvet",
    name: "Midnight Velvet Baccara",
    collection: "Romantic Couture",
    price: 210,
    image: "/images/crimson-roses.jpg",
    tag: "Bestseller",
    description:
      "Rare deep black-crimson Baccara roses kissed with morning dew in handcrafted smoked crystal glass.",
    notes: ["Baccara Roses", "Smoked Crystal", "Dewdrop Finish"],
  },
  {
    id: "atelier-bespoke",
    name: "The Atelier Bespoke Edit",
    collection: "Private Commission",
    price: 320,
    image: "/images/hero-bouquet.jpg",
    tag: "Masterpiece",
    description:
      "A completely personalized botanical sculpture orchestrated by our Creative Director based on your recipient's aesthetic.",
    notes: ["Custom Selection", "Wax-Sealed Letter", "Silk Keepsake"],
  },
];

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState("all");
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleLike = (id: string) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (item: FlowerProduct) => {
    setToastMessage(`Added "${item.name}" to your private shopping bag.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <section id="collections" className="py-28 bg-[#070b09] relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 glass-panel-gold border border-[#d4af37] px-6 py-4 rounded-2xl shadow-2xl text-white text-xs flex items-center gap-3 animate-bounce">
          <span className="text-[#d4af37] text-base">✦</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-[10px] uppercase tracking-[0.25em] text-[#d4af37] mb-3">
              <span>✦</span> Curated Seasonal Harvest
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#fbf7ee] font-normal leading-tight">
              Signature Bouquets & <br />
              <span className="italic text-gold-gradient">Living Sculptures</span>
            </h2>
          </div>

          <p className="text-sm text-[#9ab0a2] max-w-md font-light leading-relaxed">
            Every arrangement is hand-tied at dawn, hydrated in pure mineral
            baths, and delivered in bespoke climate cases.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4af37]/40 transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold glass-panel-gold border border-[#d4af37]/40 text-[#f8e5b9]">
                    {item.tag}
                  </span>
                </div>

                {/* Wishlist Heart */}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#d4af37] transition-colors"
                  aria-label="Wishlist"
                >
                  <svg
                    className={`w-4 h-4 transition-colors ${
                      likedItems[item.id]
                        ? "fill-[#d4af37] text-[#d4af37]"
                        : "fill-none stroke-current"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b09]/90 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8e9f94] block font-mono mb-1">
                    {item.collection}
                  </span>
                  <h3 className="font-serif text-xl text-[#fbf7ee] font-medium group-hover:text-[#f8e5b9] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#9ab0a2] font-light mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Botanical Notes Pill */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="text-[9px] px-2 py-0.5 rounded-md bg-white/5 text-[#a8b8af] border border-white/5"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#8e9f94] uppercase tracking-wider block">
                      Starting at
                    </span>
                    <span className="text-lg font-serif font-semibold text-[#f8e5b9]">
                      ${item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider bg-white/5 border border-white/15 text-white hover:bg-[#d4af37] hover:text-[#070b09] hover:border-[#d4af37] transition-all"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
