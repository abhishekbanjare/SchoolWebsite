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
  backgroundColor: "rgba(13, 13, 14, 0.5)", // Overlay color
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
          <Typography
            variant="h3"
            component="h1"
            sx={{ color: "#fff" }} // Example color
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{ mt: 2, color: "#fff" }} // Example color
          >
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
