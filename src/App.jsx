import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Smashy from "./components/Smashy";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Smashy />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
