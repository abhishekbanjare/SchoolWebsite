// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchGallery } from "../../redux/gallerySlice";

// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
//   Container,
// } from "@mui/material";
// import { motion } from "framer-motion";

// // const galleryImages = [
// //   { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
// //   { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
// //   { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
// //   { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
// //   { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
// //   { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
// //   { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
// //   { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
// //   { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
// //   { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
// //   { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
// //   { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
// //   { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
// //   { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
// //   { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
// //   { src: "/Img/GalleryImg/img001.jpg", title: "Image 1" },
// //   { src: "/Img/GalleryImg/img002.jpg", title: "Image 2" },
// //   { src: "/Img/GalleryImg/img003.jpg", title: "Image 3" },
// //   { src: "/Img/GalleryImg/img004.jpg", title: "Image 4" },
// //   { src: "/Img/GalleryImg/img005.jpg", title: "Image 5" },
// // ];

// const GallerySections = () => {
//   const dispatch = useDispatch();
//   //redux se data select karna
//   const { galleries, loading, error } = useSelector((state) => state.galleries);
//   {
//     console.log("Abhishek....", galleries);
//   }
//   useEffect(() => {
//     dispatch(fetchGallery());
//   }, [dispatch]);

//   return (
//     <Container sx={{ pb: 6, pt: 4 }}>
//       <Grid alignItems="center">
//         <Typography
//           variant="h4"
//           component="h2"
//           sx={{
//             fontWeight: "bold",
//             textAlign: "center",
//             mb: 4,
//           }}
//         >
//           Our Gallery
//         </Typography>
//       </Grid>
//       <Grid container spacing={2}>
//         {galleries.map((gallery, index) => (
//           <Grid item xs={12} sm={6} md={4} key={gallery.id}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }} // Start from bottom
//               whileInView={{ opacity: 1, y: 0 }} // Animate smoothly from bottom to top
//               transition={{ duration: 0.6, delay: index * 0.05 }} // Smooth transition with slight stagger
//               viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is in view
//             >
//               <Card elevation={4}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={`http://localhost:5000${gallery.imageUrl}`}
//                   alt={gallery.title}
//                 />
//                 <CardContent
//                   sx={{
//                     py: 1,
//                     px: 1,
//                     "&:last-child": { pb: 1 },
//                   }}
//                 >
//                   <Typography variant="h6" align="center">
//                     {gallery.title}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default GallerySections;

// ......................................................................
// ......................................................................

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchGallery } from "../../redux/gallerySlice";

// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
//   Container,
//   Box,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const GallerySections = () => {
//   const dispatch = useDispatch();
//   const { galleries, loading, error } = useSelector((state) => state.galleries);

//   useEffect(() => {
//     dispatch(fetchGallery());
//   }, [dispatch]);

//   return (
//     <Container sx={{ pb: 6, pt: 4 }}>
//       <Grid alignItems="center">
//         <Typography
//           variant="h4"
//           component="h2"
//           sx={{
//             fontWeight: "bold",
//             textAlign: "center",
//             mb: 4,
//           }}
//         >
//           Our Gallery
//         </Typography>
//       </Grid>
//       <Grid container spacing={3}>
//         {galleries.map((gallery, index) => (
//           <Grid item xs={12} sm={6} md={4} key={gallery.id}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.05 }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <Card
//                 sx={{
//                   borderRadius: "16px", // Rounded corners
//                   boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // Soft shadow
//                   overflow: "hidden",
//                   transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
//                   "&:hover": {
//                     transform: "scale(1.05)", // Scale-up effect
//                     boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", // Stronger shadow on hover
//                   },
//                 }}
//               >
//                 <Box sx={{ position: "relative" }}>
//                   <CardMedia
//                     component="img"
//                     height="250"
//                     image={`http://localhost:5000${gallery.imageUrl}`}
//                     alt={gallery.title}
//                     sx={{
//                       objectFit: "cover", // Ensures images fill the space properly
//                       transition: "transform 0.3s ease-in-out",
//                       "&:hover": {
//                         transform: "scale(1.1)", // Slight zoom effect on hover
//                       },
//                     }}
//                   />
//                   {/* Gradient Overlay */}
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       bottom: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "60px",
//                       background:
//                         "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
//                     }}
//                   />
//                 </Box>

//                 <CardContent
//                   sx={{
//                     py: 2,
//                     textAlign: "center",
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: "bold",
//                       color: "#333",
//                     }}
//                   >
//                     {gallery.title}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default GallerySections;

// ..................................................................................
// ..................................................................................

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchGallery } from "../../redux/gallerySlice";
// import { Grid, Container, Typography, Card, CardMedia, CardContent, Box } from "@mui/material";

// const GallerySections = () => {
//   const dispatch = useDispatch();
//   const { galleries, loading, error } = useSelector((state) => state.galleries);

//   useEffect(() => {
//     dispatch(fetchGallery());
//   }, [dispatch]);

//   return (
//     <Container sx={{ pb: 6, pt: 4 }}>
//       <Typography
//         variant="h4"
//         component="h2"
//         sx={{
//           fontWeight: "bold",
//           textAlign: "center",
//           mb: 4,
//         }}
//       >
//         Our Gallery
//       </Typography>

//       {/* ✅ Handle loading & errors */}
//       {loading && <Typography align="center">Loading...</Typography>}
//       {error && <Typography align="center" color="error">Failed to load gallery!</Typography>}

//       <Grid container spacing={3}>
//         {galleries.map((gallery) => (
//           <Grid item xs={12} sm={6} md={4} key={gallery.id}>
//             <Card
//               sx={{
//                 borderRadius: "12px", // ✅ Smooth corners
//                 boxShadow: "0px 5px 15px rgba(0,0,0,0.1)", // ✅ Soft shadow
//                 transition: "transform 0.3s ease-in-out",
//                 "&:hover": {
//                   transform: "translateY(-5px)", // ✅ Slight lift on hover
//                   boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
//                 },
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={`http://localhost:5000${gallery.imageUrl}`}
//                 alt={gallery.title}
//                 sx={{
//                   objectFit: "cover", // ✅ Ensures images fit well
//                   borderRadius: "12px 12px 0 0", // ✅ Smooth border for top corners
//                 }}
//               />
//               <CardContent sx={{ textAlign: "center", backgroundColor: "#fff" }}>
//                 <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
//                   {gallery.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default GallerySections;

// ......................................................................................
// ......................................................................................

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGallery } from "../../redux/gallerySlice";
import {
  Grid,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { motion } from "framer-motion"; // ✅ Import framer-motion

const GallerySections = () => {
  const dispatch = useDispatch();
  const { galleries, loading, error } = useSelector((state) => state.galleries);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  return (
    <Container sx={{ pb: 6, pt: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        Our Gallery
      </Typography>

      {/* ✅ Handle loading & errors */}
      {loading && <Typography align="center">Loading...</Typography>}
      {error && (
        <Typography align="center" color="error">
          Failed to load gallery!
        </Typography>
      )}

      <Grid container spacing={3}>
        {galleries.map((gallery, index) => (
          <Grid item xs={12} sm={6} md={4} key={gallery.id}>
            {/* ✅ Add animation to the cards */}
            {/* <motion.div
              initial={{ opacity: 0, y: 50 }} // Starts from the bottom with no opacity
              whileInView={{ opacity: 1, y: 0 }} // Animates to original position with full opacity
              transition={{ duration: 1, type: "spring", stiffness: 100 }} // Smooth spring effect
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is in view
            > */}

            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start from bottom
              whileInView={{ opacity: 1, y: 0 }} // Animate smoothly from bottom to top
              transition={{ duration: 0.6, delay: index * 0.05 }} // Smooth transition with slight stagger
              viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of card is in view
            >
              <Card
                sx={{
                  borderRadius: "12px", // Smooth corners
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)", // Soft shadow
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)", // Slight lift on hover
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={`http://localhost:5000${gallery.imageUrl}`}
                  alt={gallery.title}
                  sx={{
                    objectFit: "cover", // Ensures images fit well
                    borderRadius: "12px 12px 0 0", // Smooth border for top corners
                  }}
                />
                <CardContent
                  sx={{ textAlign: "center", backgroundColor: "#fff" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#333" }}
                  >
                    {gallery.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GallerySections;
