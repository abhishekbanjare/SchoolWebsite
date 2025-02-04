// import {
//   Grid,
//   Box,
//   Typography,
//   ListItem,
//   ListItemText,
//   List,
//   Divider,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import { useState } from "react";

// const latestNews = [
//   {
//     title: "Admissions Open for 2025-2026",
//     date: "Jan 15, 2025",
//     description: "Apply for the upcoming academic year before March 31st!",
//   },
//   {
//     title: "Annual Sports Day",
//     date: "Jan 20, 2025",
//     description: "Don’t miss the Sports Day on February 10th!",
//   },
//   {
//     title: "Exam Dates",
//     date: "Jan 25, 2025",
//     description: "Midterm begins Feb 20. Finals start March 10, 2025.",
//   },
// ];

// export default function LatestNews() {
//   const [expandedIndex, setExpandedIndex] = useState(null); // Track which news item is expanded

//   const handleToggle = (index) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   return (
//     <Grid>
//       <Grid>
//         <Box
//           sx={{
//             backgroundColor: "#f5f5f5",
//             borderRadius: 2,
//             boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
//             p: 2,
//             height: "100%",
//             overflowY: "auto",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: "bold",
//               mb: 2,
//               textAlign: "center",
//             }}
//           >
//             Latest News
//           </Typography>
//           <List>
//             {latestNews.map((news, index) => (
//               <Box key={index}>
//                 <ListItem
//                   alignItems="flex-start"
//                   sx={{
//                     p: 0,
//                     cursor: "pointer",
//                     display: "flex",
//                     justifyContent: "space-between",
//                   }}
//                   onClick={() => handleToggle(index)}
//                 >
//                   <ListItemText
//                     primary={
//                       <Typography
//                         variant="subtitle2"
//                         sx={{ fontWeight: 600, color: "#B50303" }}
//                       >
//                         {news.title}
//                       </Typography>
//                     }
//                   />
//                   {expandedIndex === index ? (
//                     <ExpandLessIcon sx={{ color: "#B50303" }} />
//                   ) : (
//                     <ExpandMoreIcon sx={{ color: "#B50303" }} />
//                   )}
//                 </ListItem>

//                 {expandedIndex === index && (
//                   <Box sx={{ mt: 1, pl: 2 }}>
//                     <Typography
//                       variant="caption"
//                       sx={{ color: "#888", display: "block" }}
//                     >
//                       {news.date}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "#555", mt: 0.5 }}>
//                       {news.description}
//                     </Typography>
//                   </Box>
//                 )}

//                 {index < latestNews.length - 1 && <Divider sx={{ my: 1 }} />}
//               </Box>
//             ))}
//           </List>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

// .....................................................
// .....................................................

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
import { useState } from "react";

const latestNews = [
  {
    title: "Admissions Open for 2025-2026",
    date: "Jan 15, 2025",
    description: "Apply for the upcoming academic year before March 31st!",
  },
  {
    title: "Exam Dates",
    date: "Jan 25, 2025",
    description: "Midterm begins Feb 20. Finals start March 10, 2025.",
  },
  {
    title: "Annual Sports Day",
    date: "Jan 20, 2025",
    description:
      "Don’t miss the Sports Day on February 10th! Apply for the upcoming academic ",
  },
  {
    title: "Exam Dates",
    date: "Jan 25, 2025",
    description: "Midterm begins Feb 20. Finals start March 10, 2025.",
  },
  {
    title: "Annual Sports Day",
    date: "Jan 20, 2025",
    description:
      "Don’t miss the Sports Day on February 10th! Apply for the upcoming academic year before March 31st!",
  },
];

export default function LatestNews() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Grid>
      <Grid>
        <Box
          sx={{
            border: "1px solid #f5f5f5",
            // backgroundColor: "#f5f5f5",
            borderRadius: 2,
            // boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
            p: 2,
            height: "400px", // Fixed height
            overflowY: "auto", // Enable scrolling if content exceeds box height
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#B50303",
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
                      <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                        {news.title}
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
                      maxHeight: "100px", // Fixed height for expanded content
                      overflowY: "auto", // Enable scrolling for expanded content
                      paddingLeft: "10px",
                      transition: "max-height 0.3s ease-in-out",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#888", display: "block" }}
                    >
                      {news.date}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555", mt: 0.5 }}>
                      {news.description}
                    </Typography>
                  </Box>
                )}

                {index < latestNews.length - 1 && <Divider sx={{ my: 1 }} />}
              </Box>
            ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}
