import React from "react";

const videos = [
  "/previews/video1.mp4",
  "/previews/video2.mp4",
  "/previews/video3.mp4",
  "/previews/video4.mp4",
  "/previews/video5.mp4",
  "/previews/video6.mp4",
];

export const CarouselTrack = () => {
  return (
    <div className="flex items-center justify-center">
      {videos.map((src, i) => (
        <div
          key={src}
          className={`aspect-square bg-zinc-950 shrink-0 basis-[64%] mx-[1%] rounded-[18px] overflow-hidden border transition-all duration-300 ${
            i === 0
              ? "border-red-500/70 shadow-[0_22px_56px_-26px_rgba(168,0,42,0.85)]"
              : "border-red-900/25 opacity-50 blur-[7px] brightness-[0.42] scale-90"
          }`}
        >
          <video
            src={src}
            loop
            muted
            autoPlay
            playsInline
            preload={i < 2 ? "auto" : "metadata"}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
