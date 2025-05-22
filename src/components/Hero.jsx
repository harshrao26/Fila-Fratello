import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import img1 from "../assets/01.webp";
import img2 from "../assets/02.webp";
import img3 from "../assets/03.webp";

const slides = [
  {
    heading: "Heading towards a",
    highlight: "Promising Future in Healthcare",
    subtext:
      "Consolidating, transforming, and enhancing the world of generic and speciality pharmaceuticals.",
    img: img1,
    alt: "Fila Fratello - Generic and Speciality Pharma Innovation",
  },
  {
    heading: "Driving Innovation for a",
    highlight: "Healthier Tomorrow",
    subtext:
      "Empowering pharmaceutical breakthroughs with technology and global excellence.",
    img: img3,
    alt: "Fila Fratello - Health Innovation with Technology",
  },
  {
    heading: "Transforming Lives with",
    highlight: "Advanced Medical Solutions",
    subtext:
      "Committed to delivering world-class healthcare products with global impact.",
    img: img2,
    alt: "Fila Fratello - Advanced Global Healthcare Solutions",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* SEO Meta for Hero Section */}
      <Helmet>
        <title>Fila Fratello | India's Progressive Pharma Company</title>
        <meta
          name="description"
          content="Explore Fila Fratello’s mission in transforming healthcare with advanced pharmaceutical research, affordable generics, and global innovation."
        />
        <meta
          name="keywords"
          content="Indian Pharma Company, Pharmaceutical Innovation, Generic Medicines India, Fila Fratello, Healthcare Transformation"
        />
      </Helmet>

      {/* Hero Slider */}
      <div
        className="relative w-full h-[80vh] sm:h-[80vh] xs:h-[60vh] overflow-hidden"
        role="region"
        aria-label="Fila Fratello Hero Banner"
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full h-[80vh] sm:h-[80vh] xs:h-[60vh] flex items-center px-4 sm:px-8 md:px-16 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
              aria-label={slide.alt}
            >
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-xl max-w-2xl sm:max-w-3xl">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  {slide.heading}{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-400 bg-clip-text text-transparent font-bold">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="mt-4 text-sm sm:text-base text-gray-700">{slide.subtext}</p>
                <a
                  href="#about" // You can change this to a real route or anchor
                  className="inline-block mt-6 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-red-400 text-white rounded-full hover:bg-red-500 transition"
                  aria-label="Learn more about Fila Fratello's pharmaceutical mission"
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
