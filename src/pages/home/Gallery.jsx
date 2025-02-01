import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGallery } from "../../redux/gallerySlice";
import { useNavigate } from "react-router-dom";
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
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Initialize navigation hook

  // Redux se data select karna
  const { galleries, loading, error } = useSelector((state) => state.galleries);
  useEffect(() => {
    dispatch(fetchGallery()); // Redux se data fetch karne ka action call karna
  }, [dispatch]);

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
  // ✅ Function to handle navigation
  const handleImageClick = () => {
    navigate("/gallery"); // Pass data via state
  };
  return (
    <Container sx={{ py: 5 }}>
      <Box>
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
            {galleries.map((gallery) => (
              <Box
                key={gallery.id}
                onClick={() => handleImageClick()}
                sx={{
                  borderRadius: 3,
                  width: "320px", // ✅ Fix width
                  height: "350px", // ✅ Fix height
                  margin: "0 auto",
                  padding: "10px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={`http://localhost:5000${gallery.imageUrl}`}
                  alt={gallery.title}
                  sx={{
                    width: "100%", // ✅ Full width
                    height: "250px", // ✅ Fixed height
                    objectFit: "cover", // ✅ Crop image to fit the box
                    borderRadius: 0.5,
                  }}
                />

                {/* Title */}
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  sx={{
                    fontWeight: "500",
                    width: "100%",
                    height: "50px", // ✅ Fixed height for text section
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {gallery.title}
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
