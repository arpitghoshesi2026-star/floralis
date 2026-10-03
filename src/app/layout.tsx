import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FLORALIS | Haute Botanical Atelier & Living Poetry",
  description:
    "Artisanal floral design, bespoke bouquets, and immersive botanical storytelling. Hand-delivered in luxury climate-controlled cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#070b09] text-[#f4efe6] antialiased selection:bg-[#d4af37]/30 selection:text-[#fbf7ee] min-h-screen flex flex-col"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
