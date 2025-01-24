import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import StarIcon from "@mui/icons-material/Star";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { motion } from "framer-motion";
import theme from "../.././theme/Theme";

const WhyChooseUs = () => {
  // Data for cards
  const statsData = [
    { title: "Students", count: 201, icon: <SchoolIcon fontSize="large" /> },
    {
      title: "Faculties",
      count: 101,
      icon: <PersonIcon fontSize="large" />,
    },
    {
      title: "School Buses",
      count: 31,
      icon: <DirectionsBusIcon fontSize="large" />,
    },
    { title: "Awards", count: 31, icon: <StarIcon fontSize="large" /> },
    {
      title: "Sports",
      count: 16,
      icon: <SportsSoccerIcon fontSize="large" />,
    },
  ];

  const [counters, setCounters] = useState(statsData.map(() => 0)); // Counter state
  const sectionRef = useRef(null); // Ref for the section

  // Function to animate counters
  const animateCounters = () => {
    statsData.forEach((data, index) => {
      let incrementValue = 1;
      const speed = 150; // Speed in ms (Increase this to slow down the animation)

      const interval = setInterval(() => {
        setCounters((prev) => {
          const newValue = prev[index] + incrementValue;
          if (newValue < data.count) {
            return prev.map((value, i) => (i === index ? newValue : value));
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, speed);
    });
  };

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
        } else {
          // Reset counters when section is out of view
          setCounters(statsData.map(() => 0));
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [statsData]);

  return (
    <Container>
      <Box ref={sectionRef} sx={{ py: 5 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          Why Choose Us
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch" // Ensures all cards stretch to the same height
          sx={{ display: "flex" }}
        >
          {statsData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    display: "flex", // Ensures that card stretches vertically
                    flexDirection: "column",
                    textAlign: "center",
                    py: 3,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", // Deeper shadow effect
                    borderRadius: "15px", // Slightly more rounded corners for a smoother look
                    backgroundColor: "#f0f0f0",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add transition for smooth shadow change
                    height: "180px", // Fixed height for all cards
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        color: theme.palette.customBlue.main,
                        mb: 2,
                        fontSize: "2rem",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: theme.palette.customBlue.main,
                        fontWeight: "bold",
                      }}
                    >
                      {counters[index]}+
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        // color: theme.palette.customBlue.dark,
                        color: theme.palette.customBlue.main,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
