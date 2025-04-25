import { useEffect, useState } from "react";
import img1 from "../assets/01.webp";
import img2 from "../assets/02.webp";
import img3 from "../assets/03.webp";

const slides = [
  {
    heading: "Heading towards a",
    highlight: "Promising Future in Healthcare",
    subtext: "Consolidating, transforming, and enhancing the world of generic and speciality pharmaceuticals.",
    img: img1,
  },
  {
    heading: "Driving Innovation for a",
    highlight: "Healthier Tomorrow",
    subtext: "Empowering pharmaceutical breakthroughs with technology and global excellence.",
    img: img2,
  },
  {
    heading: "Transforming Lives with",
    highlight: "Advanced Medical Solutions",
    subtext: "Committed to delivering world-class healthcare products with global impact.",
    img: img3,
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] sm:h-[80vh] xs:h-[60vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-[80vh] sm:h-[80vh] xs:h-[60vh] flex items-center px-4 sm:px-8 md:px-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-xl max-w-2xl sm:max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                {slide.heading}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-400 bg-clip-text text-transparent font-bold">
                  {slide.highlight}
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-700">{slide.subtext}</p>
              <button className="mt-6 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-red-400 text-white rounded-full hover:bg-red-500 transition">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
