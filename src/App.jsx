import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import CuisineCompass from "./pages/project_folder/CuisineCompass";
import ICM from "./pages/project_folder/ICM";
import Reskin from "./pages/project_folder/Reskin";
import Meta from "./pages/project_folder/Meta";

export default function App() {
  // Scroll to top immediately on route change
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
      window.scrollTo(0, 0); // instant top before render
    }, [pathname]);

    return null;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <ScrollToTop />
      <div className="page-container" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project_folder/cuisine-compass" element={<CuisineCompass />} />
          <Route path="/project_folder/icm" element={<ICM />} />
          <Route path="/project_folder/reskin" element={<Reskin />} />
          <Route path="/project_folder/meta" element={<Meta />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
