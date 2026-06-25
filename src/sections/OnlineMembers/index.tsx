import React from "react";

export const OnlineMembers = () => {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold-500/25 bg-gold-700/8 text-sm font-sans">
      {/* Stacked avatar circles */}
      <div className="flex items-center">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-6 h-6 rounded-full border-2 border-obsidian-900 bg-gradient-to-br from-crimson-600 to-obsidian-800 flex items-center justify-center text-[8px] font-extrabold text-crimson-200 ${
              i > 0 ? "-ml-2" : ""
            }`}
          >
            {i === 3 ? "+1k" : ""}
          </span>
        ))}
      </div>
      <span className="text-gold-300/70 font-medium text-xs">
        1,204 members online
      </span>
      {/* Pulsing green dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </span>
    </div>
  );
};
