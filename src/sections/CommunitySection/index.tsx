import React from "react";
import { CommunityLink } from "@/sections/CommunitySection/components/CommunityLink";

export const CommunitySection = () => {
  return (
    <section className="py-14 md:py-16">
      <div className="text-center mb-9">
        <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
          Join The Community
        </h2>
        <p className="text-white/55 text-sm font-sans">
          Free channel, live chatroom &amp; direct admin support
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <CommunityLink
          href="https://t.me/+FZv49DSqQ_lmODcx"
          classVariant="border-sky-600/35 bg-gradient-to-r from-sky-900/20 to-transparent hover:border-sky-500/55"
          icon="📡"
          title="Join Free Channel"
          description="Official link · previews & drops"
        />
        <CommunityLink
          href="https://t.me/+KsCdMv3mCSVlY2Vh"
          classVariant="border-crimson-500/35 bg-gradient-to-r from-crimson-900/20 to-transparent hover:border-crimson-400/55"
          icon="💬"
          title="Official Chatroom"
          description="Active now · talk to members"
        />
        <CommunityLink
          href="https://t.me/savslayr"
          classVariant="border-gold-500/30 bg-gradient-to-r from-gold-900/15 to-transparent hover:border-gold-400/50"
          icon="🛡️"
          title="Contact Admin"
          description="Support & manual orders"
        />
      </div>
    </section>
  );
};
