"use client";

import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer id="concierge" className="py-16 px-4 md:px-8 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand Info & Newsletter/CTA */}
          <div className="mb-8 md:mb-0 max-w-sm">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center bg-white/5 text-[#d4af37] text-sm group-hover:border-[#d4af37] transition-colors">
                ✦
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold tracking-[0.25em] text-white">
                  FLORALIS
                </h2>
                <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 block font-mono">
                  Haute Botanical Atelier
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-sm mt-4 leading-relaxed font-light">
              Living botanical sculptures and cold-chain rare flora, hand-harvested at dawn across European micro-climates.
            </p>

            <div className="mt-4">
              <Link href="#gallery">
                <Button
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-5 py-2 text-xs tracking-wider uppercase font-medium transition-all"
                >
                  Explore Collection
                  <span className="ml-2 text-[#d4af37]">→</span>
                </Button>
              </Link>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                <span className="text-[#d4af37] uppercase">Concierge:</span>
                <a
                  href="mailto:concierge@floralis-atelier.com"
                  className="hover:text-[#d4af37] transition-colors underline underline-offset-2"
                >
                  concierge@floralis-atelier.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                <span className="text-[#d4af37] uppercase">Hotline:</span>
                <a
                  href="tel:+33142685500"
                  className="hover:text-[#d4af37] transition-colors"
                >
                  +33 (0)1 42 68 55 00
                </a>
              </div>
            </div>

            <p className="text-xs text-neutral-400 mt-6 font-mono">
              © {new Date().getFullYear()} FLORALIS BOTANIQUE. All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 text-white uppercase tracking-wider">
                Pages
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="#storytelling"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    The Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Gallery Archive
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Curator FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    The Atelier
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 text-white uppercase tracking-wider">
                Ateliers
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <span className="text-neutral-400 block hover:text-white transition-colors">
                    18 Place Vendôme, Paris
                  </span>
                </li>
                <li>
                  <span className="text-neutral-400 block hover:text-white transition-colors">
                    42 Mount St, Mayfair London
                  </span>
                </li>
                <li>
                  <span className="text-neutral-400 block hover:text-white transition-colors">
                    Bahnhofstrasse, Zurich
                  </span>
                </li>
                <li>
                  <span className="text-neutral-400 block hover:text-white transition-colors">
                    Via Montenapoleone, Milan
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 text-white uppercase tracking-wider">
                Socials
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Pinterest
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>X (Twitter)</span>
                    <Icons.twitter className="w-3 h-3 fill-current text-neutral-400" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 text-white uppercase tracking-wider">
                Legal & Care
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Cold-Chain Guarantee
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Care Dossier
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    Terms of Curation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Name at the bottom: Brand name in WHITE colour font */}
        <div className="w-full flex mt-12 sm:mt-16 items-center justify-center border-t border-white/10 pt-8 sm:pt-12">
          <h1 className="text-center text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] xl:text-[13rem] font-serif font-bold text-white tracking-[0.12em] sm:tracking-[0.18em] select-none leading-none uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]">
            FLORALIS
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
