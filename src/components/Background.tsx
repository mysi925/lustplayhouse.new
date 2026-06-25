import React from "react";

export const Background = () => {
  return (
    <>
      {/* Deep black base */}
      <div className="fixed inset-0 z-[-4] bg-[#020203]" />

      {/* Moving green cyber glow layer */}
      <div
        className="fixed inset-0 z-[-3] pointer-events-none animate-pulse"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(0, 255, 120, 0.10) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(0, 255, 80, 0.06) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(0, 180, 90, 0.05) 0%, transparent 65%)",
        }}
      />

      {/* Animated grid (slow moving upward = retro sci-fi screen) */}
      <div
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,255,120,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,120,0.06) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          animation: "gridMove 12s linear infinite",
        }}
      />

      {/* Digital scanline sweep */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,255,120,0.04) 50%, transparent 100%)",
          backgroundSize: "100% 200%",
          animation: "scanMove 6s linear infinite",
          mixBlendMode: "screen",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "250px 250px",
          mixBlendMode: "overlay",
        }}
      />

      {/* CSS animations */}
      <style>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(70px);
          }
        }

        @keyframes scanMove {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
};
