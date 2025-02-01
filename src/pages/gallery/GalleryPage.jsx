import React, { useEffect } from "react";
import BannerCustom from "../customeComponents/BannerCustom";
import GallerySections from "./GallerySections";
import backgroundImage from "/Img/customBanner/Banner2.jpg";
export default function GalleryPage() {
  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BannerCustom
        title="Gallery"
        breadcrumb="Home"
        bgImage={backgroundImage}
      />
      <GallerySections />
    </div>
  );
}
