import React from "react";

export type PricingCardProps = {
  containerVariant?: string;
  badgeText?: string;
  title: string;
  price: string;
  billingText: string;
  features: string[];
  featureClassNames?: string[];
  primaryButtonText: string;
  secondaryButtonText: string;
};

/** Legacy component kept for compatibility — PricingSection now renders inline. */
export const PricingCard = (props: PricingCardProps) => {
  return (
    <div
      className={`glass-card rounded-2xl p-7 flex flex-col ${props.containerVariant ?? ""}`}
    >
      {props.badgeText && (
        <span className="luxury-badge self-start mb-3">{props.badgeText}</span>
      )}
      <div className="text-xs font-bold tracking-widest uppercase text-white/50 mb-1">
        {props.title}
      </div>
      <div className="text-gold-gradient text-5xl font-serif font-black leading-none mb-5">
        {props.price}
      </div>
      <ul className="flex flex-col gap-3 mb-6 flex-1">
        {props.features.map((f, i) => (
          <li
            key={i}
            className="text-sm text-blush-100/80 flex items-center gap-2"
          >
            <span className="w-4 h-4 rounded-full bg-gradient-to-br from-crimson-300 to-crimson-600 flex items-center justify-center text-[9px] font-black text-white shrink-0">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button className="btn-luxury-primary w-full py-4 rounded-xl">
        {props.primaryButtonText}
      </button>
      <button className="mt-3 text-xs text-white/30 hover:text-gold-300 transition-colors">
        {props.secondaryButtonText}
      </button>
    </div>
  );
};
