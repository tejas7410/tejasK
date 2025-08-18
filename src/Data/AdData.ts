// adData.ts (place in your components/ or data/ folder)
export type Ad = {
  advertiser: string;
  adTitle: string;
  adDescription: string;
  posterUrl: string;      // Always required
  videoUrl?: string;      // Optional, if available will show video preview
  ctaUrl: string;
  ctaText: string;
};

export const ads: Ad[] = [
  {
    advertiser: "BizConsult LLP",
    adTitle: "Maximize Productivity!",
    adDescription: "Get expert managerial services from BizConsult and transform your business.",
    posterUrl: "https://i.imgur.com/xE3jViF.png",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    ctaUrl: "https://bizconsult.com/",
    ctaText: "Learn More",
  },
  {
    advertiser: "VisionTune",
    adTitle: "Elevate Your Events",
    adDescription: "Instant event video streaming platform for modern audiences.",
    posterUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
    // No videoUrl: Only poster will be shown
    ctaUrl: "https://visiontune.live",
    ctaText: "Try Now",
  }
];
