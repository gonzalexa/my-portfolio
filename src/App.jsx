import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

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
    <>
      <Navbar />
      <ScrollToTop /> {/* resets scroll instantly on route change */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
