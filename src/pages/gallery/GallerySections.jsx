import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGallery } from "../../redux/gallerySlice";
import {
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { motion } from "framer-motion"; // ✅ Import framer-motion

const GallerySections = () => {
  const dispatch = useDispatch();
  const { galleries, loading, error } = useSelector((state) => state.galleries);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  return (
    <Container sx={{ pb: 6, pt: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        Our Gallery
      </Typography>

      {/* ✅ Handle loading & errors */}
      {loading && <Typography align="center">Loading...</Typography>}
      {error && (
        <Typography align="center" color="error">
          Failed to load gallery!
        </Typography>
      )}

      <Grid container spacing={3}>
        {galleries.map((gallery, index) => (
          <Grid item xs={12} sm={6} md={4} key={gallery.id}>
            {/* ✅ Add animation to the cards */}
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }} // Starts from the bottom with no opacity
              whileInView={{ opacity: 1, y: 0 }} // Animates to original position with full opacity
              transition={{ duration: 1, type: "spring", stiffness: 100 }} // Smooth spring effect
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is in view
            > */}

            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start from bottom
              whileInView={{ opacity: 1, y: 0 }} // Animate smoothly from bottom to top
              transition={{ duration: 0.6, delay: index * 0.05 }} // Smooth transition with slight stagger
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is in view
            >
              <Card
                sx={{
                  borderRadius: "12px", // Smooth corners
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)", // Soft shadow
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)", // Slight lift on hover
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={`http://localhost:5000${gallery.imageUrl}`}
                  alt={gallery.title}
                  sx={{
                    objectFit: "cover", // Ensures images fit well
                    borderRadius: "12px 12px 0 0", // Smooth border for top corners
                  }}
                />
                <CardContent
                  sx={{ textAlign: "center", backgroundColor: "#fff" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#333" }}
                  >
                    {gallery.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GallerySections;
