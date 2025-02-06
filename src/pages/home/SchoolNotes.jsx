import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchoolNotes } from "../../redux/schoolnoteSlice";
import { Box, Typography } from "@mui/material";
import theme from "./../../theme/Theme";

const SchoolNotes = () => {
  const dispatch = useDispatch();
  const { notesList, loading } = useSelector((state) => state.schoolNote);

  const [notesText, setNotesText] = useState("Fetching latest school notes...");

  useEffect(() => {
    dispatch(fetchSchoolNotes());
  }, [dispatch]);

  useEffect(() => {
    if (notesList.length > 0) {
      setNotesText(notesList.map((note) => note.SchoolNote).join(" | "));
    }
  }, [notesList]);

  // Dynamic speed calculation (longer text moves slower for better readability)
  const textLength = notesText.length;
  const animationDuration = Math.max(20, textLength / 6) + "s"; // Adjust speed dynamically

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: "5px",
        position: "relative",
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
      }}
    >
      <Typography
        component="div"
        sx={{
          display: "inline-block",
          animation: `scroll-left ${animationDuration} linear infinite`,
          fontSize: "18px",
          fontWeight: "bold",
          color: theme.palette.customBlue.main,
        }}
      >
        {notesText}
      </Typography>

      <style>
        {`
          @keyframes scroll-left {
            from {
              transform: translateX(20%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default SchoolNotes;
