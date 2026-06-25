import React from "react";

export const Background = () => {
  return (
    <>
      {/* Deep black base */}
      <div className="fixed inset-0 z-[-3] bg-[#050508]" />

      {/* Subtle futuristic neon glow (cool tones only) */}
      <div
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(0, 140, 255, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(0, 255, 200, 0.04) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(120, 0, 255, 0.03) 0%, transparent 60%)",
        }}
      />

      {/* Very soft noise (reduced intensity) */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "300px 300px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Ultra-subtle grid (futuristic UI feel) */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </>
  );
};
