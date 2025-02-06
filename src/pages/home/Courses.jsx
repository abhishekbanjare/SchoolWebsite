import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/courseSlice";
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
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courses);
  // console.log("abcourses......", courses);
  useEffect(() => {
    dispatch(fetchCourses()); // Dispatch the action to fetch courses
  }, [dispatch]);

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
        <Grid container spacing={2} justifyContent="center">
          {/* {Subject.map((course) => ( */}
          {courses.map((course) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={course.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={4}
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                {/* Course Image */}
                <CardMedia
                  component="img"
                  height="200"
                  // image={course.imageUrl}
                  image={`http://localhost:5000${course.imageUrl}`}
                  alt={course.subjectName}
                  sx={{ borderRadius: "8px 8px 0 0" }}
                />
                {/* Course Content */}
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "#444",
                      my: 0,
                    }}
                  >
                    {course.subjectName}
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
