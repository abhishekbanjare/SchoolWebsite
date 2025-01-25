import React from "react";
import BannerCustom from "../customeComponents/BannerCustom";
// import backgroundImage from "/Img/customBanner/CareerBanner1.jpg";
import backgroundImage from "/Img/customBanner/CareerBanner2.jpg";
export default function Career() {
  return (
    <div>
      <BannerCustom
        title="Career"
        breadcrumb="Home"
        bgImage={backgroundImage}
      />
    </div>
  );
}
