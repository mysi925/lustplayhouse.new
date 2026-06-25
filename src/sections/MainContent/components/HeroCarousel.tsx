import React from "react";
import { CarouselTrack } from "@/sections/MainContent/components/CarouselTrack";
import { CarouselControls } from "@/sections/MainContent/components/CarouselControls";

export const HeroCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative max-w-[900px] mx-auto px-3">
        <div className="relative overflow-hidden rounded-2xl">
          <CarouselTrack />
          {/* Sound toggle */}
          <CarouselControls
            variant="absolute top-3 right-[calc(18%+6px)] z-[7] flex items-center justify-center w-10 h-10"
            ariaLabel="Toggle sound"
            buttonText="🔇"
          />
        </div>
        {/* Prev arrow */}
        <CarouselControls
          variant="absolute left-1.5 top-1/2 -translate-y-1/2 z-[6] flex items-center justify-center w-11 h-11 text-[1.7rem]"
          ariaLabel="Previous"
          buttonText="‹"
        />
        {/* Next arrow */}
        <CarouselControls
          variant="absolute right-1.5 top-1/2 -translate-y-1/2 z-[6] flex items-center justify-center w-11 h-11 text-[1.7rem]"
          ariaLabel="Next"
          buttonText="›"
        />
        {/* Dot indicators */}
        <CarouselControls variant="indicators" ariaLabel="" buttonText="" />
      </div>
    </div>
  );
};
