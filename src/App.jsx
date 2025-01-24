import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from './pages/About';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import GalleryPage from "./pages/gallery/GalleryPage";
import ContactsPage from "./pages/contact/ContactsPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<ContactsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
