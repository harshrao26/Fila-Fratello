import { Helmet } from "react-helmet";
import logo from "../assets/logo.webp"; // Use your masked/diamond image

const AboutSection = () => {
  return (
    <>
      {/* SEO Meta Tags for About Section */}
      <Helmet>
        <title>Fila Fratello | Leading Pharmaceutical Company in India</title>
        <meta
          name="description"
          content="Fila Fratello Pharmaceutical Pvt. Ltd. is redefining Indian healthcare through innovation, accessibility, and ethical pharma practices."
        />
        <meta
          name="keywords"
          content="Fila Fratello, Indian pharma company, healthcare innovation, Kanpur pharmaceutical company, generic medicine India"
        />
      </Helmet>

      <section
        className="bg-gradient-to-b from-[#eef3fa] to-white py-16 px-6 md:px-20"
        role="region"
        aria-label="About Fila Fratello Pharmaceuticals"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Block */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6 leading-snug">
              A Leading Pharmaceutical Company
            </h2>
            <p className="text-gray-600 text-md md:text-lg mb-6">
              Fila Fratello Pharmaceutical Private Limited is a private limited company incorporated in April 2025, registered under ROC Kanpur. We are committed to delivering high-quality pharmaceutical solutions that prioritize innovation, accessibility, and human health.
              <br /> <br />
              Fila Fratello stands as a non-government company limited by shares, aiming to redefine industry standards in healthcare through science-backed formulations and ethical practices.
            </p>
            <a
              href="#mission" // adjust this link as needed
              className="inline-block bg-red-400 text-white px-8 py-3 rounded-full hover:bg-red-500 transition"
              aria-label="Learn more about Fila Fratello's mission and values"
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="w-full md:w-[40%] flex justify-center">
            <img
              src={logo}
              alt="Fila Fratello Pharmaceuticals Logo"
              className="max-w-[280px] md:max-w-[360px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
