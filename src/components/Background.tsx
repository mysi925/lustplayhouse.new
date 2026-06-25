import React from "react";

export const Background = () => {
  return (
    <>
      {/* Deep obsidian base */}
      <div className="fixed inset-0 z-[-3] bg-[#08080d]" />

      {/* Cinematic radial hero glow — top center crimson bloom */}
      <div
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(168,0,42,0.38) 0%, transparent 68%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(200,150,0,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 35% at 15% 70%, rgba(224,0,127,0.06) 0%, transparent 55%)",
        }}
      />

      {/* Subtle animated grain overlay */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none animate-grain opacity-[0.032]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Very faint diagonal lines — luxury textile feel */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 40px)",
        }}
      />
    </>
  );
};
