import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import theme from "../../theme/Theme";

const PrincipalMessage = () => {
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
          {/* Left Column - Principal's Image */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="Img/Principal/Principal.jpg" // Replace with actual path
                alt="Principal"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
          </Grid>

          {/* Right Column - Principal's Message */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
                // mb: 3,
              }}
            >
              Principal's{" "}
              <span style={{ color: theme.palette.customBlue.main }}>
                Message
              </span>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#444",
                fontWeight: "bold",
                textAlign: "center",
                // mb: 2,
              }}
            >
              Dear Students, Parents, & Guardians,
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#444",
                textAlign: "center",
                // mb: 3,
              }}
            >
              Welcome to Anurag Public School!
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
              As the Principal, I am honored to lead our community toward
              academic excellence. Students, dream big, work hard, and embrace
              learning. Parents, thank you for your trust and partnership.
              Together, we will create a positive and inspiring environment.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: theme.palette.customBlue.main,
                textAlign: "center",
                fontWeight: "bold",
                // mb: 1,
              }}
            >
              Mr. Sri Ram Singh
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "#555",
              }}
            >
              Principal, Anurag Public School
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PrincipalMessage;
