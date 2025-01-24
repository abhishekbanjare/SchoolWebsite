// components/Banner.jsx
"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import backgroundImage from "/Img/customBanner/Banner2.jpg"; // Update the path to your image

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(13, 13, 14, 0.5)", // Blue overlay with transparency
}));

const BannerWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed", // This makes the background image fixed
  height: "400px", // Adjust the height as needed
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function BannerCustom() {
  return (
    <BannerWrapper>
      <Overlay />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h1">
          About Us
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
          Home {">"} About Us
        </Typography>
      </Container>
    </BannerWrapper>
  );
}
