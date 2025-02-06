import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import BookIcon from "@mui/icons-material/Book";
import { motion } from "framer-motion";
import theme from "../../theme/Theme";

// Facility data
const facilities = [
  { title: "Computer Lab", icon: <ComputerIcon sx={{ fontSize: 50 }} /> },
  { title: "Sports", icon: <SportsBasketballIcon sx={{ fontSize: 50 }} /> },
  { title: "Bus", icon: <DirectionsBusIcon sx={{ fontSize: 50 }} /> },
  { title: "Smart Class", icon: <SchoolIcon sx={{ fontSize: 50 }} /> },
  { title: "Labs", icon: <ScienceIcon sx={{ fontSize: 50 }} /> },
  { title: "Library", icon: <BookIcon sx={{ fontSize: 50 }} /> },
];

const Facilities = () => {
  const [activeGroup, setActiveGroup] = useState(1);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  useEffect(() => {
    // Switch between groups every 3 seconds
    const interval = setInterval(() => {
      setActiveGroup((prev) => (prev === 1 ? 2 : 1));
    }, 3000); // Adjust duration as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        Our Facilities
      </Typography>

      {/* Responsive Grid Layout */}
      <Grid container spacing={{ xs: 2, sm: 4, md: 2 }} justifyContent="center">
        {facilities.map((facility, index) => {
          // Determine if the current card is in the active group
          const isActive =
            (activeGroup === 1 && index % 2 === 0) || // Group 1: 1st, 3rd, 5th (even indices)
            (activeGroup === 2 && index % 2 !== 0); // Group 2: 2nd, 4th, 6th (odd indices)

          return (
            <Grid item key={index} xs={6} sm={4} md={2}>
              {/* Conditionally apply motion effects */}
              {isSmallScreen ? (
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    boxShadow: isActive
                      ? "0px 4px 20px rgba(0, 0, 0, 0.15)"
                      : "0px 1px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{
                    duration: 1.2, // Smooth transition
                    ease: "easeInOut",
                  }}
                >
                  <Box
                    sx={{
                      padding: "20px",
                      borderRadius: "10px",
                      backgroundColor: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: theme.palette.customBlue.main,
                        mb: 2,
                        fontSize: "2rem",
                      }}
                    >
                      {facility.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" , color: "#444",}}>
                      {facility.title}
                    </Typography>
                  </Box>
                </motion.div>
              ) : (
                <Box
                  sx={{
                    padding: "20px",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    textAlign: "center",
                    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Box
                    sx={{
                      color: theme.palette.customBlue.main,
                      mb: 2,
                      fontSize: "2rem",
                    }}
                  >
                    {facility.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {facility.title}
                  </Typography>
                </Box>
              )}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Facilities;
