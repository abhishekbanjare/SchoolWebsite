import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from './pages/About';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import GallerySections from "./pages/gallery/GallerySections";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GallerySections />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
