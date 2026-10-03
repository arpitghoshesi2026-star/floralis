"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);
  const [inStory, setInStory] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const storyEl = document.getElementById("storytelling");
      if (!storyEl) return;
      const rect = storyEl.getBoundingClientRect();
      // Storytelling section is actively occupying the screen
      const active = rect.top <= 80 && rect.bottom >= 120;
      setInStory(active);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-500 ease-in-out ${
        inStory
          ? "-translate-y-28 opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100 pointer-events-auto"
      }`}
    >
      {/* Floating Glassmorphic Navbar Container matching Hero Card */}
      <div className="max-w-7xl mx-auto px-6 py-3.5 rounded-full glass-panel border border-white/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#101b15]/60 group-hover:border-[#d4af37] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="text-[#d4af37] text-xs">✦</span>
          </div>
          <div>
            <span className="text-lg tracking-[0.25em] font-serif font-semibold text-[#f8e5b9] block leading-none">
              FLORALIS
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#8e9f94] block mt-1 font-sans">
              Haute Botanical Atelier
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#c0cfc5]">
          <a
            href="#storytelling"
            className="hover:text-[#f8e5b9] transition-colors flex items-center gap-1.5 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            The Story
          </a>
          <a
            href="#gallery"
            className="hover:text-[#f8e5b9] transition-colors"
          >
            Gallery
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#f8e5b9] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="hover:text-[#f8e5b9] transition-colors"
          >
            FAQ
          </a>
          <a
            href="#experience"
            className="hover:text-[#f8e5b9] transition-colors"
          >
            The Atelier
          </a>
          <a
            href="#concierge"
            className="hover:text-[#f8e5b9] transition-colors"
          >
            Concierge
          </a>
        </nav>

        {/* Actions (Cart & CTA) */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button
            onClick={() => alert("Cart: 2 Bespoke Bouquets selected.")}
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#d4af37]/50 text-[#f4efe6] transition-all hover:scale-105"
            aria-label="View Cart"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.7}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d4af37] text-[#070b09] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Bespoke Order CTA */}
          <a
            href="#gallery"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-[#d4af37] to-[#e4c264] text-[#070b09] shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_28px_rgba(212,175,55,0.45)] hover:scale-[1.02] transition-all"
          >
            <span>Order Bespoke</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto px-6 py-6 rounded-2xl glass-panel border border-white/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col gap-4 text-sm uppercase tracking-wider text-neutral-300">
          <a
            href="#storytelling"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#d4af37] flex items-center gap-2"
          >
            <span>✦</span> The Storytelling Journey
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white"
          >
            Curated Gallery
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white"
          >
            How It Works
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white"
          >
            Frequently Asked Questions
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white"
          >
            Botanical Philosophy
          </a>
          <a
            href="#concierge"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white"
          >
            Private Concierge
          </a>
        </div>
      )}
    </header>
  );
}
