import React from "react";

export type HowItWorksStepProps = {
  stepNumber: string;
  icon: string;
  iconVariant?: string;
  children: React.ReactNode;
};

export const HowItWorksStep = (props: HowItWorksStepProps) => {
  return (
    <div className="relative glass-card rounded-2xl p-6 flex flex-col items-center text-center">
      <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black bg-gradient-to-br from-crimson-300 to-crimson-600 text-white">
        {props.stepNumber}
      </span>
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 border ${props.iconVariant ?? "border-crimson-400/30 bg-crimson-700/10"}`}
      >
        {props.icon}
      </div>
      <p className="text-sm text-blush-100/75 leading-snug font-sans">
        {props.children}
      </p>
    </div>
  );
};
