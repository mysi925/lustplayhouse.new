import React from "react";
import { Background } from "@/components/Background";
import { MainContent } from "@/sections/MainContent";
import { CryptoModal } from "@/components/CryptoModal";

export const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#08080d] text-[#f0e8e0] font-sans antialiased">
      <Background />
      <MainContent />
      <CryptoModal />
    </div>
  );
};
