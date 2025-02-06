import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Close, Fullscreen } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  {
    albumName: "Album 1",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 2",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 1",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 2",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 1",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 2",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
];

const GallerySections = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [isFullScreenMode, setIsFullScreenMode] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const viewerRef = useRef(null);
  const startX = useRef(0);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleOpen = (album, index) => {
    setCurrentAlbum(album);
    setCurrentImageIndex(index);
    setFullscreen(true);
  };

  const handleClose = () => {
    setFullscreen(false);
    if (document.fullscreenElement) document.exitFullscreen();
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    if (viewerRef.current) {
      if (!document.fullscreenElement) {
        viewerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const nextImage = useCallback(() => {
    if (!currentAlbum) return;
    setDirection(1); // Right swipe
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % currentAlbum.images.length
    );
  }, [currentAlbum]);

  const prevImage = useCallback(() => {
    if (!currentAlbum) return;
    setDirection(-1); // Left swipe
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentAlbum.images.length) %
        currentAlbum.images.length
    );
  }, [currentAlbum]);

  useEffect(() => {
    if (!fullscreen) return;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreen, nextImage, prevImage]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 40) nextImage();
    else if (diff < -40) prevImage();
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreenMode(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <Container sx={{ my: 6 }}>
      <Grid container spacing={2}>
        {galleryData.map((album, albumIndex) => (
          <Grid item xs={12} sm={6} md={4} key={albumIndex}>
            <Card>
              <CardMedia
                component="img"
                alt={album.albumName}
                height="200"
                image={album.images[0]}
                onClick={() => handleOpen(album, 0)}
                sx={{ cursor: "pointer" }}
                loading="lazy"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="subtitle1">{album.albumName}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {fullscreen && (
        <div
          ref={viewerRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          // onClick={nextImage}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentAlbum?.images[currentImageIndex]}
              src={currentAlbum?.images[currentImageIndex]}
              alt="Gallery View"
              style={{
                maxHeight: "90%",
                maxWidth: "90%",
                cursor: "pointer",
                position: "absolute",
              }}
              loading="lazy"
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {!isSmallScreen && (
            <>
              <ArrowBackIosIcon
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                style={{
                  position: "absolute",
                  left: 20,
                  color: "white",
                  fontSize: 40,
                  cursor: "pointer",
                }}
              />
              <ArrowForwardIosIcon
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 40,
                  cursor: "pointer",
                }}
              />
            </>
          )}
          {!isFullScreenMode && (
            <>
              <Close
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  color: "white",
                  fontSize: 40,
                  cursor: "pointer",
                }}
              />
              <Fullscreen
                onClick={toggleFullScreen}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 70,
                  color: "white",
                  fontSize: 40,
                  cursor: "pointer",
                }}
              />
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default GallerySections;
