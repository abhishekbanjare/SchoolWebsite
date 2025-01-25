import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/Theme";

const Contact = () => {
  const navigate = useNavigate();

  // State for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");

    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });

    navigate("/");
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh" }}>
      {/* Header Section */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Contact Us Contact Us
      </Typography>

      {/* Grid Container */}
      <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
        {/* Contact Details Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              backgroundColor: "#ffffff",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Get in Touch
            </Typography>
            <Typography sx={{ marginBottom: "20px" }}>
              We'd love to hear from you! Reach out to us via the form or the
              contact details below.
            </Typography>

            {/* Contact Info */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <Phone
                sx={{
                  color: theme.palette.customBlue.main,
                  fontSize: "30px",
                  marginRight: "10px",
                }}
              />
              <Typography>9120983777, 8573027141</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <Email
                sx={{
                  color: theme.palette.customBlue.main,
                  fontSize: "30px",
                  marginRight: "10px",
                }}
              />
              <Typography>Anurag.baraps@gmail.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOn
                sx={{
                  color: theme.palette.customBlue.main,
                  fontSize: "30px",
                  marginRight: "10px",
                }}
              />
              <Typography>
                123, Green Avenue, Raipur, Chhattisgarh, India
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              backgroundColor: "#ffffff",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Send Us a Message
            </Typography>

            <form
              onSubmit={handleSubmit}
              style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                variant="outlined"
                type="tel"
                inputProps={{ maxLength: 10, pattern: "[0-9]{10}" }}
                value={formData.mobile}
                onChange={handleChange}
                required
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{ marginBottom: "15px" }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.customBlue.main,
                  color: "#ffffff",
                  alignSelf: "center",
                  width: "40%",
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
