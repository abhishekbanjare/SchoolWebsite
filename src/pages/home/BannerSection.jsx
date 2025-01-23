"use client";
import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banners from "../../data/homeBanner.json";

// import theme from "@/theme/Theme";
export default function BannerSection() {
  const sliderSettings = {
    // dots: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set duration (in milliseconds) between slides
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          zIndex: 10,
          cursor: "pointer",
          "&:hover": {
            border: "2px solid #fff",
          },
        }}
      >
        <KeyboardArrowRightIcon sx={{ color: "#fff", fontSize: "30px" }} />
      </Box>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          zIndex: 10,
          cursor: "pointer",
          "&:hover": {
            border: "2px solid #fff",
          },
        }}
      >
        <KeyboardArrowLeftIcon sx={{ color: "#fff", fontSize: "30px" }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        "& .slick-dots": {
          bottom: "-18px",
        },
        "& .slick-dots li button:before": {
          fontSize: "8px",
        },
        "& .slick-dots li.slick-active button:before": {
          //   color: theme.palette.customBlue.main,
          color: "#1D31AA",
        },
      }}
    >
      <Slider {...sliderSettings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <Box
              component="img"
              src={banner.image}
              alt={banner.alt}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: { xs: 200, md: 300 },
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
}
