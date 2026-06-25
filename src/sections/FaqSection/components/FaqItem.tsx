import React, { useState } from "react";

export type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
};

export const FaqItem = (props: FaqItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.07] mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-white/85 cursor-pointer"
      >
        {props.question}
        <span
          className={`shrink-0 text-gold-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p className="text-blush-200/60 text-sm leading-relaxed px-6 pb-5 font-sans">
          {props.answer}
        </p>
      </div>
    </div>
  );
};
