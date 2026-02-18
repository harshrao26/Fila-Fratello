import MapSection from "../components/MapSection";
import FutureVision from "../components/FutureVision";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FoundersSection from "../components/FoundersSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <AboutUs />
      <FutureVision />
      <FoundersSection />
      <MapSection />
      <ContactForm />
    </main>
  );
}
