import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Introduction from "./components/Introduction";
import ROIS from "./components/ROIS";
import Achievements from "./components/Achievements";
import CustomerSuccess from "./components/CustomerSuccess";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


import "./App.css";


function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Introduction />
      <ROIS />
      <Achievements />
      <CustomerSuccess />
      <FAQ />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;