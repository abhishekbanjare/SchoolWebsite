import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { src: "/Img/GalleryImg/img001.jpg", alt: "Image 1" },
  { src: "/Img/GalleryImg/img002.jpg", alt: "Image 2" },
  { src: "/Img/GalleryImg/img003.jpg", alt: "Image 3" },
  { src: "/Img/GalleryImg/img004.jpg", alt: "Image 4" },
  { src: "/Img/GalleryImg/img005.jpg", alt: "Image 5" },
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 425, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Medium devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024, // Large devices
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container sx={{ py: 5 }}>
      <Box
      // sx={{ padding: { xs: 2, sm: 4, md: 6 } }}
      >
        <Grid container direction="column" alignItems="center">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
            }}
          >
            Our Gallery
          </Typography>
        </Grid>

        {/* Image Slider */}
        <Box>
          <Slider {...settings}>
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: 3,
                  width: "90%", // Reduced width for better layout
                  margin: "0 auto", // Center horizontally
                  padding: "10px", // Padding around the image cards for spacing
                  boxSizing: "border-box",
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    width: "100%", // Ensure the image takes full width of the container
                    height: "auto",
                    borderRadius: 2, // Slightly rounded corners
                    // boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Optional shadow for better visuals
                  }}
                />
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  sx={{
                    marginTop: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  {image.alt}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
};

export default Gallery;
