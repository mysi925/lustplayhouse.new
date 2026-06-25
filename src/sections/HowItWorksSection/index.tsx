import React from "react";

const steps = [
  {
    num: "01",
    icon: "💳",
    title: "Choose & Pay",
    desc: "Pick your tier and pay securely with card or crypto. No subscription — ever.",
    color: "crimson",
  },
  {
    num: "02",
    icon: "⚡",
    title: "Instant Link",
    desc: "Your private channel link appears instantly after payment confirmation.",
    color: "magenta",
  },
  {
    num: "03",
    icon: "♾️",
    title: "Access Forever",
    desc: "Join the channel and enjoy lifetime access. No expiry, no re-billing.",
    color: "gold",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-14 md:py-16">
      <div className="text-center mb-9">
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
          How It Works
        </h2>
        <p className="text-white/55 text-sm font-sans">
          From payment to access in under 60 seconds
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
        {/* connector lines (desktop) */}
        <div className="hidden md:block absolute top-[52px] left-[calc(33.3%+12px)] right-[calc(33.3%+12px)] h-px bg-gradient-to-r from-crimson-500/40 via-magenta-400/40 to-gold-500/40" />

        {steps.map((s, i) => (
          <div
            key={i}
            className="relative glass-card rounded-2xl p-8 text-center group bg-transparent hover:bg-transparent border-2 border-[#fe019a] hover:border-[#fe019a] shadow-none hover:shadow-none transform-none hover:transform-none transition-colors duration-300"
          >
            <div className="text-4xl leading-none mx-auto mb-5">{s.icon}</div>

            <h3 className="font-serif text-xl font-bold text-white mb-2">
              {s.title}
            </h3>
            <p className="text-blush-200/60 text-sm leading-relaxed font-sans">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
