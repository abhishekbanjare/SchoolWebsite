import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLatestNews } from "../../redux/latestnewsSlice";
import { motion } from "framer-motion";
import {
  Grid,
  Box,
  Typography,
  ListItem,
  ListItemText,
  List,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import theme from "../../theme/Theme";

export default function LatestNews() {
  const dispatch = useDispatch();
  const { newsList, loading, error } = useSelector((state) => state.latestNews);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchLatestNews());
  }, [dispatch]);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Grid>
      <Grid>
        <Box
          sx={{
            border: "1px solid #f5f5f5",
            borderRadius: 2,
            p: 2,
            height: "400px", // Fixed height
            overflowY: "auto", // Scrollable content
            scrollbarWidth: "thin", // Firefox
            "&::-webkit-scrollbar": { width: "5px" }, // Webkit Browsers
          }}
        >
          {/* <motion.div
            animate={{
              color: [theme.palette.customBlue.main, "#e84118"],
            }} // Color Cycle
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }} // Infinite Loop
          >
            <Typography
              variant="h6"
              sx={{
                // color: theme.palette.customBlue.main,
                fontWeight: "bold",
                mb: 2,
                textAlign: "center",
              }}
            >
             🚨 Latest News
            </Typography>
          </motion.div> */}
          <motion.div
            animate={{
              color: [theme.palette.customBlue.main, "#e84118"],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1, // Space between emoji & text
              }}
            >
              {/* <motion.span
                animate={{ x: [-4, 5, -4] }} // Left & right movement
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{ display: "inline-block" }} // Ensure proper motion effect
              >
                📢
              </motion.span> */}
              <motion.span
                animate={{ rotate: [0, 0, -50, 0] }} // Clockwise and counterclockwise rotation
                transition={{
                  duration: 2, // Adjust for speed of rotation
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{ display: "inline-block" }} // Ensure proper motion effect
              >
                📢
              </motion.span>
              Latest News
            </Typography>
          </motion.div>

          {loading ? (
            <Typography variant="body2" align="center">
              Loading latest news...
            </Typography>
          ) : error ? (
            <Typography variant="body2" align="center" color="error">
              Failed to load news.
            </Typography>
          ) : newsList.length === 0 ? (
            <Typography variant="body2" align="center">
              No news available.
            </Typography>
          ) : (
            <List>
              {newsList.map((news, index) => (
                <Box key={news.id || index}>
                  <ListItem
                    alignItems="flex-start"
                    sx={{
                      p: 0,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    onClick={() => handleToggle(index)}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 500 }}
                        >
                          {news.title} <br />
                          <span style={{ color: "#888", fontSize: "12px" }}>
                            {news.createdAt}
                          </span>
                        </Typography>
                      }
                    />
                    {expandedIndex === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItem>

                  {expandedIndex === index && (
                    <Box
                      sx={{
                        mt: 1,
                        pl: 2,
                        maxHeight: "100px",
                        overflowY: "auto",
                        paddingLeft: "10px",
                        transition: "max-height 0.3s ease-in-out",
                        scrollbarWidth: "thin",
                        "&::-webkit-scrollbar": { width: "5px" },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: "#555", mt: 0.5 }}
                      >
                        {news.details || "No details available"}
                      </Typography>
                    </Box>
                  )}

                  {index < newsList.length - 1 && <Divider sx={{ my: 1 }} />}
                </Box>
              ))}
            </List>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
