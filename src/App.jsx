import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from './pages/About';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import GalleryPage from "./pages/gallery/GalleryPage";
import ContactsPage from "./pages/contact/ContactsPage";
import CurriculumPage from "./pages/curriculum/CurriculumPage";
import About from "./pages/about/About";
import Academics from "./pages/academics/Academics";
import Admission from "./pages/admission/Admission";
import Career from "./pages/career/Career";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
