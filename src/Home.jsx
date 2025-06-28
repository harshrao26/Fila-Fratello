import React from 'react'

 import MapSection from "./components/MapSection";
 import FutureVision from "./components/FutureVision";
 import AboutUs from "./components/AboutUs";
 import Hero from "./components/Hero";
 import AboutSection from "./components/AboutSection";
 import FoundersSection from "./components/FoundersSection";
 import ContactForm from "./components/ContactForm";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <AboutUs />
      <FutureVision />
      <FoundersSection />
      <MapSection />
            <ContactForm />

    </div>
  )
}

export default Home
