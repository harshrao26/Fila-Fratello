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
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>
          Fila Fratello Pharmaceuticals | Innovating for Better Health
        </title>
        <meta
          name="description"
          content="Fila Fratello stands as a non-government company limited by shares, aiming to redefine industry standards in healthcare through science-backed formulations and ethical practices."
        />
        <meta
          name="keywords"
          content="Fila Fratello Pharmaceutical Private Limited is a private limited company incorporated on April 2025, registered under ROC Kanpur."
        />
        <meta property="og:url" content="https://www.filafratello.com" />
        <meta
          property="og:title"
          content="Fila Fratello Pharmaceuticals | Innovating for Better Health"
        />
        `
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Fila Fratello",
        "description": "Fila Fratello Pharmaceutical Private Limited is a private limited company incorporated on April 2025, registered under ROC Kanpur. ",
        "url": "https://www.filafratello.com",
        "missionStatement": "Empowering businesses through innovative web solutions",
        "foundingDate": "2025-01-15",
        "founders": [
          {
           "@type": "Person",
            "name": "Priyanshu Bhadouriya",
            "jobTitle": "Director"
          },
          {
            "@type": "Person",
            "name": "Sumit Kumar Yadav",
            "jobTitle": "Director"
          }
        ],
        "numberOfEmployees": "6",
        "sameAs": [
          "https://twitter.com/filafratello",
          "https://instagram.com/filafratello"
        ]
      }
    `}
        </script>
        `
      </Helmet>
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
