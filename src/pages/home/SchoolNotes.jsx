import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "./../../theme/Theme";

const SchoolNotes = () => {
  // Static JSON object
  const schoolNotes = [
    { id: 1, text: "Welcome to Anurag Public School, Raipur!" },
    { id: 2, text: "Admissions are open for the 2025-26 academic year" },
    { id: 3, text: "Contact us for more details." },
    { id: 4, text: "Annual Sports Day on 15th March" },
    { id: 5, text: "Science Exhibition on 25th March" },
    { id: 6, text: "Parent-Teacher Meeting on 10th April" },
    {
      id: 7,
      text: "Congrats to our students for winning the State Level Science Quiz!",
    },
  ];

  // Sare notes ko join karke ek string bana rahe hain
  const notesText = schoolNotes.map((note) => note.text).join(" | ");

  return (
    <Box
      sx={{
        // border:"1px solid red",
        // background: "#d1d8e0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "2px",
        position: "relative",
      }}
    >
      <Typography
        component="div"
        sx={{
          display: "inline-block",
          animation: "scroll-left 50s linear infinite",
          animationDelay: "0s",
          fontSize: "18px",
          fontWeight: "bold",
          color: theme.palette.customBlue.main,
        }}
      >
        {notesText || "No school notes available"}
      </Typography>

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(10%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default SchoolNotes;
