import React from "react";
import { HeroCarousel } from "@/public/previews/video1.mp4";
import { PricingSection } from "@/sections/PricingSection";
import { CommunitySection } from "@/sections/CommunitySection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { FaqSection } from "@/sections/FaqSection";
import { OnlineMembers } from "@/sections/OnlineMembers";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <main className="relative w-full">
      {/* ── HERO ── */}
      <section className="relative flex flex-col items-center justify-center text-center pt-14 pb-4 px-4 overflow-hidden">
        {/* Decorative left/right vertical gold lines */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/25 to-transparent hidden lg:block" />
        <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/25 to-transparent hidden lg:block" />

        {/* Logo lockup */}
        <div
          className="mb-3 animate-fade-up flex flex-col items-center"
          style={{ animationDelay: "0ms" }}
        >
          <div className="logo-text text-[2.2rem] leading-none md:text-[3.6rem] lg:text-[4.5rem] select-none">
            Lust Playhouse
          </div>
          <p className="text-white text-xs tracking-[0.2em] uppercase mt-2 font-sans font-bold">
            Private Members Club
          </p>
        </div>
      </section>

      {/* ── VIDEO PREVIEWS ── */}
      <section
        id="preview"
        className="relative pt-4 pb-8 px-4 w-full overflow-hidden"
      >
        <HeroCarousel />
      </section>

      {/* ── Tagline (below carousel, above pricing) ── */}
      <div className="text-center py-6 px-4">
        <p className="max-w-lg mx-auto text-base md:text-lg text-white font-bold leading-relaxed">
          The most exclusive collection of wins on the internet.
          <br />
          One payment. Lifetime access. Instant delivery.
        </p>
      </div>

      {/* ── REMAINING SECTIONS ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div id="pricing" className="scroll-mt-8">
          <PricingSection />
        </div>
        <HowItWorksSection />
        <CommunitySection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
};
