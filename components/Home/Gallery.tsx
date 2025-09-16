import React from "react";
import { CreditCard, Journal } from "@/components/icons";

const Gallery = () => {
  return (
    <section className="my-8 px-8">
      <div className="flex justify-between">
        <h2 className="heading">Gallery</h2>
        <div className="flex gap-2">
          <div className="flex gap-1 bg-muted px-2 py-1 rounded-full items-center">
            <Journal /> Legal
          </div>
          <div className="flex gap-1 bg-muted px-2 py-1 rounded-full items-center">
            <CreditCard /> Pricing
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
