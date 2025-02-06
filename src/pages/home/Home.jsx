import React from "react";
import SliderSection from "./SliderSection";
import SchoolNotes from "./SchoolNotes";
import Welcome from "./Welcome";
import PrincipalMessage from "./PrincipalMessage";
import Facilities from "./Facilities";
import Courses from "./Courses";
import WhyChooseUs from "./WhyChooseUs";
import Gallery from "./Gallery";
import DirectorSection from "./DirectorSection";
export default function Home() {
  return (
    <div>
      <SliderSection />
      <SchoolNotes />
      <Welcome />
      <PrincipalMessage />
      <DirectorSection />
      <Facilities />
      <Courses />
      <WhyChooseUs />
      {/* <Gallery /> */}
    </div>
  );
}
