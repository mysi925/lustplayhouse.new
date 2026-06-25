import React from "react";

export const Footer = () => {
  return (
    <footer className="py-14 text-center font-sans">
      <div className="divider-luxury-full mb-10 opacity-50" />

      {/* Logo */}
      <div className="logo-text text-3xl mb-3 select-none">Lust Playhouse</div>
      <p className="text-white/25 text-xs tracking-[0.2em] uppercase mb-8 font-sans">
        Private Members Club
      </p>

      {/* Links row */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-white/30 hover:text-white/50 font-sans mb-8">
        <a
          href="https://t.me/cynski"
          className="hover:text-gold-300 transition-colors"
        >
          Support
        </a>
        <a
          href="https://t.me/+Q2cSul0OxOs1ODhh"
          className="hover:text-gold-300 transition-colors"
        >
          Free Channel
        </a>
        <a
          href="https://t.me/+7WxaKI6hxpgxZmJh"
          className="hover:text-gold-300 transition-colors"
        >
          Chatroom
        </a>
      </div>

      <p className="text-white/15 text-[10px] tracking-[0.25em] uppercase font-sans">
        © 2026 Lust Playhouse · Secure Nodes Active · LUSTPLAYHOUSE.FUN
      </p>
    </footer>
  );
};
