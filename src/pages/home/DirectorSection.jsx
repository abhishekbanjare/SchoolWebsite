import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const DirectorSection = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Box
        sx={{
          padding: { xs: 2, sm: 4, md: 6 },
          backgroundColor: "#f9f9f9", // Light background
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Director's Message */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Message from the{" "}
              <span style={{ color: "#B50303" }}>Director</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                fontWeight: "bold",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Dear students, parents, and staff,
            </Typography>
            <Typography variant="body1" sx={{ color: "#555",textAlign: { xs: "center", md: "center" }, }}>
              It is with great pride and pleasure that I welcome you to our
              institution. Our mission is to provide a nurturing and
              intellectually stimulating environment where students grow to
              become responsible global citizens. Let us work together to
              achieve excellence and contribute to a brighter future.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#B50303",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Mr. Anurag Barnwal
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: { xs: "center", md: "center" } }}
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
                  maxWidth: "340px",
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
