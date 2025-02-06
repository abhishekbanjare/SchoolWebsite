import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import theme from "../../theme/Theme";

const DirectorSection = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Box
        sx={{
          backgroundColor: "#ffffff", // Clean white background
          padding: { xs: 3, sm: 5, md: 6 },
          borderRadius: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Column - Director's Message */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
              }}
            >
              Message from the{" "}
              <span style={{   color: theme.palette.customBlue.main, }}>Director</span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#444",
                textAlign: "center",
              }}
            >
              Dear students, parents, and staff,
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "#555",
                textAlign: "center",
                mb: 2,
              }}
            >
              It is with great pride and pleasure that I welcome you to our
              institution. Our mission is to provide a nurturing and
              intellectually stimulating environment where students grow to
              become responsible global citizens. Let us work together to
              achieve excellence and contribute to a brighter future.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: theme.palette.customBlue.main,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Mr. Anurag Barnwal
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#555",
              }}
            >
              Director, Anurag Public School
            </Typography>
          </Grid>

          {/* Right Column - Director's Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src="Img/Principal/Director.jpg" // Replace with actual path
                alt="Director"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)", // Softer shadow
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DirectorSection;
