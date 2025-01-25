import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import theme from "../../theme/Theme";
import thankYouImage from "/Img/contactPage/ThankYou.jpg";

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#b2bec3" },
    "&:hover fieldset": { borderColor: theme.palette.customBlue.main },
    marginBottom: "15px",
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.customBlue.main,
      borderWidth: "2px",
    },
    input: { color: "#747d8c" },
    "&.Mui-focused input": { color: "#747d8c" },
  },
  "& .MuiInputLabel-root": { color: "#747d8c" },
  "& .MuiInputLabel-root.Mui-focused": { color: theme.palette.customBlue.main },
  "& .MuiInputBase-inputMultiline": { color: "#747d8c" },
};

const Contact = () => {
  const navigate = useNavigate();

  // State for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // State for the thank you popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

    // Show the popup
    setIsPopupOpen(true);

    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });

    // Close the popup after 3 seconds and navigate to home
    setTimeout(() => {
      setIsPopupOpen(false);
      navigate("/");
    }, 3000);
  };

  return (
    <Box sx={{ padding: "20px", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
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
                sx={textFieldStyles}
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
                sx={textFieldStyles}
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
                sx={textFieldStyles}
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
                sx={textFieldStyles}
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

      {/* Thank You Popup */}
      <Dialog
        open={isPopupOpen}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            marginTop: "0%", // Position the dialog 10% from the top of the viewport
          },
        }}
      >
        <DialogContent
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 0, // Remove padding for full image width at the top
          }}
        >
          <img
            src={thankYouImage}
            alt="Thank You"
            style={{
              width: "100%", // Full width
              height: "auto", // Maintain aspect ratio
              display: "block", // Avoid extra spacing under the image
            }}
          />
          <Box
            sx={{
              padding: "20px", // Add padding for text content
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: theme.palette.customBlue.main, fontWeight: "bold" }}
            >
              Thank you for contacting us!
            </Typography>
            <Typography variant="h6">We will get back to you soon.</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Contact;
