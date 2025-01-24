import React from "react";
import BannerCustom from "../customeComponents/BannerCustom";
import backgroundImage from "/Img/customBanner/ContactBanner6.jpg";
import ContentAboutSection from "./ContentAboutSection";
export default function About() {
  return (
    <div>
      <BannerCustom
        title="About Us"
        breadcrumb="Home"
        bgImage={backgroundImage}
      />
      <ContentAboutSection />
    </div>
  );
}
