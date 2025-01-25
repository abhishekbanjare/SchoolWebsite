import React from "react";
import BannerCustom from "../customeComponents/BannerCustom";
import backgroundImage from "/Img/customBanner/Banner5.jpg";

export default function CurriculumPage() {
  return (
    <div>
      <BannerCustom
        title="Curriculum"
        breadcrumb="Home"
        bgImage={backgroundImage}
      />
    </div>
  );
}
