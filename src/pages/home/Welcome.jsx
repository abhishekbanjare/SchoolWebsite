import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const latestNews = [
  {
    title: "Admissions Open for 2025-2026",
    date: "Jan 15, 2025",
    description: "Apply for the upcoming academic year before March 31st!",
  },
  {
    title: "Annual Sports Day",
    date: "Jan 20, 2025",
    description: "Don’t miss the Sports Day on February 10th!",
  },
  {
    title: "Exam Dates",
    date: "Jan 25, 2025",
    description: "Midterm begins Feb 20. Finals start March 10, 2025.",
  },
];

const Welcome = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which news item is expanded

  const handleToggle = (index) => {
    // Toggle the expanded state of the clicked item
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container sx={{ py: 5 }}>
      <Box>
        <Grid container spacing={2} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Welcome <span style={{ color: "#B50303" }}>To</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Anurag Public School, Raipur
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                lineHeight: 1.8,
                color: "#555",
              }}
            >
              Our school is dedicated to providing a nurturing environment where
              students can grow, learn, and excel. With a strong focus on
              academic excellence and character building, we aim to empower our
              students to achieve their dreams and contribute to society.
              Explore our wide range of activities and programs designed to
              enrich your child’s learning experience.
            </Typography>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="Img/homeImg/Welcome.jpg" // Replace with your image path
              alt="Welcome"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* Latest News Column */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                p: 2,
                height: "100%",
                overflowY: "auto", // Allow scroll if content exceeds the box height
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  textAlign: "center",
                }}
              >
                Latest News
              </Typography>
              <List>
                {latestNews.map((news, index) => (
                  <Box key={index}>
                    <ListItem
                      alignItems="flex-start"
                      sx={{ p: 0, cursor: "pointer" }}
                      onClick={() => handleToggle(index)} // Handle title click
                    >
                      <ListItemText
                        primary={
                          <Typography variant="div" sx={{ display: "flex" }}>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontWeight: 600, color: "#B50303" }}
                            >
                              {news.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 600,
                                color: "#B50303",
                                display: "flex",
                                alignItems: "flex-end",
                              }}
                            >
                              <KeyboardArrowDownIcon />
                            </Typography>
                          </Typography>
                        }
                      />
                    </ListItem>

                    {/* Show date and description only when expanded */}
                    {expandedIndex === index && (
                      <Box sx={{ mt: 1, pl: 2 }}>
                        <Typography
                          variant="caption"
                          sx={{ color: "#888", display: "block" }}
                        >
                          {news.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#555",
                            mt: 0.5,
                          }}
                        >
                          {news.description}
                        </Typography>
                      </Box>
                    )}

                    {index < latestNews.length - 1 && (
                      <Divider sx={{ my: 1 }} />
                    )}
                  </Box>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Welcome;
