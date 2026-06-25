import React from "react";

export type CommunityLinkProps = {
  href: string;
  classVariant: string;
  icon: string;
  title: string;
  description: string;
};

export const CommunityLink = (props: CommunityLinkProps) => {
  return (
    <a
      href={props.href}
      className={`group flex items-center gap-5 px-6 py-5 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] no-underline ${props.classVariant}`}
    >
      <span className="text-2xl shrink-0">{props.icon}</span>
      <span className="flex flex-col flex-1 text-left">
        <b className="text-white font-semibold text-base leading-tight font-sans">
          {props.title}
        </b>
        <small className="text-white/40 text-xs mt-0.5 font-sans">
          {props.description}
        </small>
      </span>
      <span className="text-white/30 group-hover:text-gold-300 transition-colors text-lg">
        →
      </span>
    </a>
  );
};
