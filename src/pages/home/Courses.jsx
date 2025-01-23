import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import Subject from "../../data/subjects.json";

const Courses = () => {
  return (
    <Container>
      <Box sx={{ py: 6 }}>
        {/* Page Title */}
        <Typography
          variant="h4"
          sx={{ mb: 5, textAlign: "center", fontWeight: "bold" }}
        >
          Our Courses
        </Typography>

        {/* Courses Grid */}
        <Grid container spacing={4} justifyContent="center">
          {Subject.map((course) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={course.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={8}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                {/* Course Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ borderRadius: "8px 8px 0 0" }}
                />
                {/* Course Content */}
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold", color: "#444" }}
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Courses;
