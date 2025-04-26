import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FoundersSection from "./components/FoundersSection";
import Footer2 from "./components/Footer2";
import ContactForm from "./components/ContactForm";
import MapSection from "./components/MapSection";
import Whatsapp from "./components/Whatsapp";
import FutureVision from "./components/FutureVision";
import AboutUs from "./components/AboutUs";

const App = () => {
 

  return (
    <div>
    
      <Whatsapp />
      <Navbar />
      <Hero />
      <AboutSection />
      <AboutUs />
      <FutureVision />
      <FoundersSection />
      <MapSection />
      <ContactForm />

      <Footer2 />
    </div>
  );
};

export default App;
