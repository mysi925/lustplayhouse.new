import React from "react";

export type CarouselControlsProps = {
  variant: string;
  ariaLabel: string;
  buttonText: string;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  if (props.variant === "indicators") {
    return (
      <div className="flex flex-wrap justify-center gap-x-[6px] gap-y-[6px] mt-4">
        <button className="h-[7px] w-[22px] rounded p-0 bg-gradient-to-r from-gold-300 to-crimson-400" />
        {Array.from({ length: 11 }).map((_, i) => (
          <button
            key={i}
            className="h-[7px] w-[7px] rounded-full p-0 bg-white/20 hover:bg-white/40 transition-colors"
          />
        ))}
      </div>
    );
  }

  return (
    <button
      aria-label={props.ariaLabel}
      className={`backdrop-blur bg-obsidian-800/70 border border-white/15 rounded-full p-0 transition-all duration-200 hover:bg-crimson-700/60 hover:border-crimson-400/60 ${props.variant}`}
    >
      {props.buttonText}
    </button>
  );
};
