import React from "react";
import BannerCustom from "../customeComponents/BannerCustom";
import backgroundImage from "/Img/customBanner/AdmissionBanner1.png";
export default function Admission() {
  return (
    <div>
      <BannerCustom
        title="Admission"
        breadcrumb="Home"
        bgImage={backgroundImage}
      />
    </div>
  );
}
