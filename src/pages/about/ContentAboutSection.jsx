import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import theme from "../../theme/Theme";
import content from "../.././data/contentAboutSection.json";

export default function ContentAboutSection() {
  return (
    <Container sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
      </Box>

      <Grid container spacing={6}>
        {content.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.customBlue.main,
                mb: 2,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {section.content}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
