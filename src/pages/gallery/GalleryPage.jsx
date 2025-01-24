import React from "react";
import BannerCustom from '../customeComponents/BannerCustom'
import GallerySections from "./GallerySections";
import backgroundImage from "/Img/customBanner/Banner2.jpg";
export default function GalleryPage() {
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
