import React from "react";
import { Box, Typography, Link, Grid, Container } from "@mui/material";
import theme from "../theme/Theme";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.customBlue.main,
        color: "white",
        padding: "20px 0",
        marginTop: "auto",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Section 1: About */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are dedicated to providing quality education and fostering an
              environment of learning and growth for students.
            </Typography>
          </Grid>

          {/* Section 2: Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/about-us" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="/admissions" color="inherit" underline="hover">
                Admissions
              </Link>
              <Link href="/contact-us" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Section 3: Contact Info */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Address: 123 School Lane, Education City, 12345
            </Typography>
            <Typography variant="body2">
              Phone: 9120983777, 8573027141
            </Typography>
            <Typography variant="body2">
              Email: Anurag.baraps@gmail.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Anurag Public School. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
