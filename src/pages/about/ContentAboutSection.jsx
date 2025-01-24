import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function ContentAboutSection() {
  return (
    <Container>
      <Grid>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Welcome to Anurag Public School
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Anurag Public School is a beacon of excellence in education, dedicated
          to nurturing young minds and building the leaders of tomorrow. Our
          school stands as a symbol of quality education, innovation, and
          character development, committed to providing an environment where
          students thrive academically, socially, and emotionally.
        </Typography>
        {/* .................................. */}
        <Typography
          variant="h5"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Who We Are
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Founded with the vision to provide holistic education, Anurag Public
          School has been a cornerstone of learning for years. We believe that
          every child is unique and deserves the best opportunities to explore
          their potential. With a focus on academic excellence, extracurricular
          activities, and character building, we aim to create well-rounded
          individuals ready to make a positive impact on the world.
        </Typography>
      </Grid>
    </Container>
  );
}
