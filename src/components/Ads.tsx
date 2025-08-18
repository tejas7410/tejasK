// Ads.tsx
import React from "react";
import AdCard from "./ui/AdCard";
import { ads } from "../Data/AdData";

const Ads: React.FC = () => (
  <section id="Ads" className="py-20 bg-white dark:bg-gray-900 min-h-[80vh]">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-highlight dark:text-white text-center">
        Advertisements
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center">
        Explore offers and promotions from our partners.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {ads.map((ad, idx) => (
          <AdCard ad={ad} key={ad.advertiser + idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Ads;
