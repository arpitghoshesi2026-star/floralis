import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandIntroSection from "@/components/BrandIntroSection";
import StorySection from "@/components/StorySection";
import FlowerGallerySection from "@/components/FlowerGallerySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FaqSection from "@/components/FaqSection";
import BotanicalExperience from "@/components/BotanicalExperience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b09] text-[#f4efe6] selection:bg-[#d4af37]/30 selection:text-[#fbf7ee]">
      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Haute Botanical Atelier: Split Brand Story & 3D Interactive Metal Flower + Prelude Bridge */}
      <BrandIntroSection />

      {/* Core Highlight: Interactive Scroll-Based Storytelling Video Scrub */}
      <StorySection />

      {/* Haute Floral Archive: Connected Stacked Carousel Gallery (10 Specimens) */}
      <FlowerGallerySection />

      {/* The Atelier Ritual: 4-Step How It Works Journey */}
      <HowItWorksSection />

      {/* Frequently Answered Curiosities: 7 Curated Accordion FAQs */}
      <FaqSection />

      {/* Botanical Experience & Atelier Pillars */}
      <BotanicalExperience />

      {/* Footer & Concierge */}
      <Footer />
    </main>
  );
}
