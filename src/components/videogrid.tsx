
import React from "react";

const videos = [
  "/previews/video1.mp4",
  "/previews/video2.mp4",
  "/previews/video3.mp4",
  "/previews/video4.mp4",
  "/previews/video5.mp4",
  "/previews/video6.mp4",
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {videos.map((src, index) => (
        <div
          key={src}
          className="rounded-xl overflow-hidden bg-black border border-white/10"
        >
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};
