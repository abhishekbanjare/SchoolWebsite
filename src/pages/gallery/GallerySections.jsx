import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
  { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
  { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
  { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
  { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
  { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
  { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
  { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
  { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
  { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
  { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
  { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
  { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
  { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
  { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
  { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
  { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
  { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
  { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
  { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
];

const GallerySections = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={2}>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start from bottom
              whileInView={{ opacity: 1, y: 0 }} // Animate smoothly from bottom to top
              transition={{ duration: 0.6, delay: index * 0.05 }} // Smooth transition with slight stagger
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is in view
            >
              <Card elevation={4}>
                <CardMedia
                  component="img"
                  height="200"
                  image={image.src}
                  alt={image.title}
                />
                <CardContent
                  sx={{
                    py: 1,
                    px: 1,
                    "&:last-child": { pb: 1 },
                  }}
                >
                  <Typography variant="h6" align="center">
                    {image.title}
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
