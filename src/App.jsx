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
import { Helmet } from "react-helmet-async";

const App = () => {
  <Helmet>
    <title>Fila Fratello Pharmaceutical | Innovation-Driven Healthcare</title>
    <meta
      name="description"
      content="Fila Fratello Pharmaceutical Pvt. Ltd. is a leading Indian pharma company delivering affordable generic and specialty medicines globally. Built on innovation, science, and ethics."
    />
    <meta
      name="keywords"
      content="Fila Fratello, pharmaceutical company India, generic medicine, specialty drugs, healthcare innovation, ethical pharma, pharma Kanpur, global pharma exporter"
    />
    <meta
      property="og:title"
      content="Fila Fratello Pharmaceutical | Redefining Healthcare"
    />
    <meta
      property="og:description"
      content="Transforming healthcare with cutting-edge solutions and global quality standards. Learn more about our mission to empower lives through pharmaceuticals."
    />
    <meta
      property="og:image"
      content="https://www.filafratello.com/path-to-og-image.jpg"
    />
    <meta property="og:url" content="https://www.filafratello.com" />
    <meta name="robots" content="index, follow" />
  </Helmet>;

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fila Fratello Pharmaceutical Private Limited",
            url: "https://www.filafratello.com",
            logo: "https://www.filafratello.com/logo.png",
            founders: [
              { "@type": "Person", name: "Priyanshu Bhadouriya" },
              { "@type": "Person", name: "Sumit Kumar Yadav" },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "H-1/999, WORLD BANK, Barra",
              addressLocality: "Kanpur Nagar",
              addressRegion: "Uttar Pradesh",
              postalCode: "208027",
              addressCountry: "India",
            },
            sameAs: [
              "https://www.linkedin.com/company/filafratello",
              "https://www.instagram.com/filafratello",
            ],
          })}
        </script>
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
