import React from "react";
import { Logo, Mobbin } from "@/components/icons";

const Footer = () => {
  return (
    <footer className="md:p-8 p-4 flex max-md:flex-col items-center justify-between bg-[#2F2F2F] text-white">
      <div className="flex gap-2 md:gap-3 items-center">
        <div className="p-2 rounded-2xl bg-black ">
          <Logo className="size-8 md:size-12" />
        </div>
        <h2 className="text-xl md:text-4xl font-medium">Krea AI</h2>
      </div>

      <div className="flex gap-5 max-md:mt-1 text-xl md:text-3xl font-medium items-center">
        <span>Curated by</span>
        <span className="flex items-center gap-2 ">
          <Mobbin className="size-8 md:size-[56px] h-fit mb-2" />
          Mobbin
        </span>
      </div>
    </footer>
  );
};

export default Footer;
