import React from "react";
import BannerCustom from "../customeComponents/BannerCustom";
import Contact from "./Contact";
import backgroundImage from "/Img/customBanner/ContactBanner6.jpg";
// import backgroundImage from "/Img/customBanner/ContactBanner4.webp";
export default function ContactsPage() {
  return (
    <div>
      <BannerCustom
        title="Contact Us"
        breadcrumb="Home"
        bgImage={backgroundImage}
      />
      <Contact />
    </div>
  );
}
