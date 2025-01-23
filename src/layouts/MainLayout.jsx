import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure it fills the entire viewport height
        overflowX: "hidden", // Prevent horizontal scroll
      }}
    >
      {/* Uncomment the Header when it's ready */}
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
