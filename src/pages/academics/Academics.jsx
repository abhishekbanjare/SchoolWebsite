import React from "react";
import BannerCustom from "../customeComponents/BannerCustom";
import backgroundImage from "/Img/customBanner/Banner3.jpg";

export default function Academics() {
  return (
    <div>
      <BannerCustom
        title="Academics"
        breadcrumb="Home"
        bgImage={backgroundImage}
      />
    </div>
  );
}
