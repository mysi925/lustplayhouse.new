import React from "react";

const videos = [
  "/previews/4xbv-WKnt8AnuOf3.mp4",
  "/previews/9FadNCpo2dS1ifsp.mp4",
  "/previews/AICfQqgbU1UOG_DF.mp4",
  "/previews/e_YxxppnlpUgCbkf.mp4",
  "/previews/GUfmO8UGHyTEyazm.mp4",
  "/previews/preview1.mp4",
  "/previews/preview2.mp4",
  "/previews/preview3.mp4",
  "/previews/preview4.mp4",
  "/previews/preview5.mp4",
  "/previews/preview6.mp4",
  "/previews/preview7.mp4",
];

export const CarouselTrack = () => {
  return (
    <div className="flex items-center justify-center">
      {videos.map((src, i) => (
        <div
          key={src}
          className={`aspect-square bg-zinc-950 shrink-0 basis-[64%] mx-[1%] rounded-[18px] overflow-hidden border transition-all duration-300 ${
            i === 0
              ? "border-crimson-400/70 shadow-[0_22px_56px_-26px_rgba(168,0,42,0.85)]"
              : "border-crimson-700/25 opacity-50 blur-[7px] brightness-[0.42] scale-90"
          }`}
        >
          <video
            src={src}
            loop
            playsInline
            preload={i < 2 ? "auto" : "metadata"}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
