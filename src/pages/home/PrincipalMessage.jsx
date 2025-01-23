import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const PrincipalMessage = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Box
        sx={{
          backgroundColor: "#f9f9f9", // Light background
          padding: { xs: 2, sm: 4, md: 6 },
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Director's Message */}
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
                src="Img/Principal/Principal.jpg" // Replace with actual path
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

          {/* Right Column - Director's Image */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Principal's <span style={{ color: "#B50303" }}>Message</span>
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                color: "#555",
                fontWeight: "bold",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Dear Students, Parents, & Guardians,
            </Typography>
            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                color: "#555",
                fontWeight: "bold",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Welcome to Anurag Public School, Raipur !
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "#555",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              As the Principal, I am honored to lead our community toward
              academic excellence. Students, dream big, work hard, and embrace
              learning. Parents, thank you for your trust and partnership. Let's
              create a positive and inspiring environment together.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#B50303",
                textAlign: { xs: "center", md: "center" },
              }}
            >
              Mr. Sri Ram Singh
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: { xs: "center", md: "center" } }}
            >
              Principal, Anurag Public School, Raipur !
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PrincipalMessage;
