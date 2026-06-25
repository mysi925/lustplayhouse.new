import React from "react";

export const CryptoModal = () => {
  return (
    <div className="hidden fixed inset-0 z-[100] items-center justify-center p-5 backdrop-blur-[6px] bg-black/80">
      <div
        role="dialog"
        className="glass-card-crimson relative w-full max-w-[420px] rounded-2xl border border-crimson-600/40 px-7 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
      >
        <button className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/15 bg-white/8 hover:bg-white/15 transition-colors text-xs">
          ✕
        </button>

        <h3 className="logo-text text-2xl mb-5">Pay with Crypto</h3>

        <p className="text-blush-200/65 text-sm leading-relaxed mb-5">
          Send <b className="text-gold-300">—</b> for{" "}
          <b className="text-gold-300">—</b> to any address below.
        </p>

        <div className="flex flex-col gap-3 mb-5" />

        <a
          href="https://t.me/savslayr"
          className="btn-luxury-primary w-full py-4 rounded-xl text-sm text-center no-underline"
        >
          📨 Message Admin
        </a>

        <p className="text-white/30 text-[11px] text-center mt-4 leading-relaxed font-sans">
          Double-check the network before sending. Wrong-network transfers
          can&#39;t be recovered.
        </p>
      </div>
    </div>
  );
};
