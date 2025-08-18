// AdCard.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { Ad } from "../../Data/AdData";

const previewWidth = 280;  // px
const previewHeight = 160; // px

const AdCard: React.FC<{ ad: Ad }> = ({ ad }) => (
  <Card
    className="flex flex-col border border-yellow-400 dark:border-yellow-700 rounded-lg shadow-md bg-yellow-50 dark:bg-gray-900"
    style={{ minHeight: 380 }}
  >
    <div className="flex justify-center mt-6">
      {ad.videoUrl ? (
        <video
          src={ad.videoUrl}
          poster={ad.posterUrl}
          controls
          style={{
            width: previewWidth,
            height: previewHeight,
            borderRadius: 8,
            backgroundColor: "#000",
            objectFit: "cover",
          }}
        />
      ) : (
        <img
          src={ad.posterUrl}
          alt={ad.advertiser}
          style={{
            width: previewWidth,
            height: previewHeight,
            borderRadius: 8,
            objectFit: "cover",
            backgroundColor: "#fff",
          }}
        />
      )}
    </div>

    <CardHeader className="px-6 pt-4 pb-2">
      <CardTitle className="text-xl dark:text-yellow-100 text-center font-semibold">
        {ad.adTitle}
      </CardTitle>
      <CardDescription className="dark:text-yellow-200 mt-2 text-center text-sm leading-relaxed">
        {ad.adDescription}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex-1 px-6 pb-2">
      <div className="flex justify-center gap-2 mb-1 text-xs text-yellow-800 dark:text-yellow-300 font-medium">
        Sponsored by {ad.advertiser}
      </div>
    </CardContent>
    <CardFooter className="px-6 pt-2 pb-6 mt-auto">
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2 border-yellow-400 text-yellow-800 dark:border-yellow-600 dark:text-yellow-100 hover:bg-yellow-100 dark:hover:bg-yellow-700 font-semibold shadow"
        onClick={() => window.open(ad.ctaUrl, "_blank")}
      >
        {ad.ctaText}
      </Button>
    </CardFooter>
  </Card>
);

export default AdCard;
