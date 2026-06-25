import React from "react";

export const AcceptedPayments = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-white/40 text-xs font-sans">
      <span>Accepted payments:</span>
      <span className="flex items-center gap-1.5 border border-gold-500/25 text-gold-300/70 px-4 py-1.5 rounded-full text-xs font-semibold">
        💳 Card
      </span>
      <span className="flex items-center gap-1.5 border border-gold-500/25 text-gold-300/70 px-4 py-1.5 rounded-full text-xs font-semibold">
        ₿ Crypto
      </span>
    </div>
  );
};
