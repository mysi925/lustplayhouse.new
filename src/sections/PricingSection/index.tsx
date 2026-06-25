import React from "react";
import { AcceptedPayments } from "@/sections/PricingSection/components/AcceptedPayments";

const tiers = [
  {
    id: "basic",
    label: "Basic",
    price: "$15",
    accent: "pink" as const,
    features: [
      { text: "Access 1,000+ Videos", active: true },
      { text: "Fresh Content", active: true },
      { text: "High Quality Videos", active: true },
      { text: "HD Audio (With Sound)", active: false },
    ],
    cta: "Get Basic — $15",
    cardStyle:
      "glass-card bg-[#08080d]/55 border-[#fe019a]/25 shadow-[0_0_30px_rgba(254,1,154,0.16)]",
    badgeStyle: "",
    priceStyle: "text-[#fe019a]",
    btnStyle:
      "w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest bg-gradient-to-br from-[#fe019a] to-[#b4006d] text-white border border-[#fe019a]/30 hover:from-[#ff33ad] hover:to-[#d10080] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(254,1,154,0.5)]",
  },
  {
    id: "premium",
    label: "Premium",
    price: "$25",
    accent: "pink" as const,
    features: [
      { text: "Access 5,000+ Videos", active: true },
      { text: "Exclusive Content & Early Access", active: true },
      { text: "Fresh Content & Updates", active: true },
      { text: "High Quality Videos", active: true },
    ],
    cta: "Get Premium — $25",
    cardStyle:
      "glass-card bg-[#08080d]/55 border-[#fe019a]/25 shadow-[0_0_30px_rgba(254,1,154,0.16)]",
    badgeStyle: "",
    priceStyle: "text-[#fe019a]",
    btnStyle:
      "w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest bg-gradient-to-br from-[#fe019a] to-[#b4006d] text-white border border-[#fe019a]/30 hover:from-[#ff33ad] hover:to-[#d10080] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(254,1,154,0.5)]",
  },
  {
    id: "exclusive",
    label: "Exclusive",
    price: "$50",
    accent: "pink" as const,
    features: [
      { text: "ALL Wins On The Internet", active: true },
      { text: "Extra Omegle Wins Channel", active: true },
      { text: "High Quality Videos", active: true },
      { text: "Lifetime Access & Priority Support", active: true },
    ],
    cta: "Unlock Exclusive — $50",
    cardStyle:
      "glass-card bg-[#08080d]/55 border-[#fe019a]/35 shadow-[0_0_36px_rgba(254,1,154,0.2)]",
    badgeStyle: "★ HIGHEST TIER",
    priceStyle: "text-[#fe019a]",
    btnStyle:
      "w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest bg-gradient-to-br from-[#fe019a] to-[#b4006d] text-white border border-[#fe019a]/40 hover:from-[#ff33ad] hover:to-[#d10080] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(254,1,154,0.65)]",
    featured: true,
  },
];

export const PricingSection = () => {
  return (
    <section className="py-14 md:py-16">
      {/* Section header */}
      <div className="text-center mb-9">
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
          Choose Your Tier
        </h2>
        <p className="text-white/55 text-sm font-sans">
          One-time payment · lifetime access · instant delivery
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative flex flex-col rounded-2xl overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.7)] ${tier.cardStyle} ${
              tier.featured
                ? "ring-1 ring-[#fe019a]/30 shadow-[0_0_40px_rgba(254,1,154,0.25)]"
                : ""
            }`}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#fe019a] to-transparent" />

            {/* Badge */}
            {tier.badgeStyle && (
              <span
                className="self-start mb-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(254,1,154,0.18), rgba(180,0,109,0.18))",
                  borderColor: "rgba(254,1,154,0.45)",
                  color: "#fe019a",
                }}
              >
                {tier.badgeStyle}
              </span>
            )}

            {/* Tier name */}
            <div className="text-xs font-extrabold tracking-[0.2em] uppercase text-white mb-1 font-sans">
              {tier.label}
            </div>

            {/* Price */}
            <div
              className={`text-5xl font-serif font-black leading-none mb-1 ${tier.priceStyle}`}
            >
              {tier.price}
            </div>
            <div className="text-xs text-white/35 font-sans uppercase tracking-widest mb-6">
              one-time payment
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {tier.features.map((f, fi) => (
                <li
                  key={fi}
                  className={`flex items-start gap-3 text-sm leading-snug ${
                    f.active ? "text-white" : "text-white/25 line-through"
                  }`}
                >
                  <span
                    className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                      f.active
                        ? "bg-gradient-to-br from-[#fe019a] to-[#b4006d] text-white"
                        : "bg-white/10 text-white/30"
                    }`}
                  >
                    {f.active ? "✓" : "×"}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className={`${tier.btnStyle} cursor-pointer`}>
              {tier.cta}
            </button>
            <button className="mt-3 text-xs text-white/30 hover:text-gold-300 transition-colors font-sans tracking-wide">
              or pay with crypto
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        <AcceptedPayments />
      </div>
    </section>
  );
};
