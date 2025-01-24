import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Styled components for the banner
const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(40, 40, 44, 0.5)", // Overlay color
  zIndex: 1, // Ensures the overlay is below the text
}));

const BannerWrapper = styled(Box)(({ theme, bgImage }) => ({
  position: "relative",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  height: "400px", // Adjust height as needed
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2, // Ensures the text is above the overlay
  textAlign: "center",
  color: "#fff", // Text color
}));

// Banner component that accepts props
export default function BannerCustom({ title, breadcrumb, bgImage }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <BannerWrapper bgImage={bgImage}>
      <Overlay />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContentWrapper>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ mt: 2, color: "#fff" }}>
            {breadcrumb} {">"} {currentPath.split("/").pop()}
          </Typography>
        </ContentWrapper>
      </Container>
    </BannerWrapper>
  );
}

// Prop validation for BannerCustom component
BannerCustom.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumb: PropTypes.string.isRequired,
  bgImage: PropTypes.string, // Optional background image
};

BannerCustom.defaultProps = {
  bgImage: "/Img/customBanner/default-banner.jpg", // Default image if none provided
};
