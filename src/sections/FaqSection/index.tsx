import React, { useState } from "react";

const faqs = [
  {
    q: "What payment methods do you accept?",
    a: (
      <>
        We accept <b className="text-gold-300">card</b> through a secure
        encrypted checkout, and <b className="text-gold-300">crypto</b> (BTC,
        ETH, USDT &amp; more). We do <b className="text-crimson-300">not</b> use
        PayPal.
      </>
    ),
  },
  {
    q: "How long does it take to get access?",
    a: (
      <>
        Orders come nearly instantly. After payment you will be given a private
        channel link with lifetime access. DM{" "}
        <a
          href="https://t.me/cynski"
          className="text-gold-300 underline underline-offset-2 hover:text-gold-200"
        >
          @cynski
        </a>{" "}
        if you have any issues.
      </>
    ),
  },
  {
    q: "What&#39;s the difference between tiers?",
    a: (
      <>
        Each tier unlocks more content and features.{" "}
        <b className="text-gold-300">Exclusive</b> is the top tier — every
        Omegle win on the internet, extra channel, and lifetime priority
        support.
      </>
    ),
  },
  {
    q: "Is it a one-time payment?",
    a: "Yes — every tier is a single one-time payment for lifetime access. No subscriptions, no recurring charges.",
  },
];

export const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="text-center mb-10">
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
          Questions &amp; Answers
        </h2>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl overflow-hidden border border-white/[0.07] hover:border-crimson-700/40 transition-colors duration-300"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-white/85 font-sans cursor-pointer"
            >
              {faq.q}
              <span
                className={`shrink-0 text-gold-400 transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: open === i ? "300px" : "0px" }}
            >
              <p className="text-blush-200/60 text-sm leading-relaxed px-6 pb-5 font-sans">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
