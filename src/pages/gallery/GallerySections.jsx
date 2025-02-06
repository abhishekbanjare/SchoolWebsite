import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

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
    albumName: "Album 3",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 4",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 5",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },
  {
    albumName: "Album 6",
    images: [
      "Img/GalleryImg/img1.jpg",
      "Img/GalleryImg/img001.jpg",
      "Img/GalleryImg/img2.jpg",
      "Img/GalleryImg/img002.jpg",
    ],
  },

  // Add more albums and images as needed
];

const GallerySections = () => {
  const [open, setOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickOpen = (album, index) => {
    setCurrentAlbum(album);
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % currentAlbum.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentAlbum.images.length) %
        currentAlbum.images.length
    );
  };

  return (
    <div>
      <Grid container spacing={2}>
        {galleryData.map((album, albumIndex) => (
          <Grid item xs={4} key={albumIndex}>
            <Card>
              <CardMedia
                component="img"
                alt={album.albumName}
                height="140"
                image={album.images[0]}
                onClick={() => handleClickOpen(album, 0)} // Show the first image of the album by default
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogContent>
          <img
            src={currentAlbum?.images[currentImageIndex]}
            alt="Full-Screen"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
        <DialogActions>
          <IconButton onClick={prevImage} color="primary">
            <ArrowBack />
          </IconButton>
          <IconButton onClick={nextImage} color="primary">
            <ArrowForward />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GallerySections;
