import { useEffect, useState } from "react";
import img1 from "../assets/01.webp"; // Local image import
import img2 from "../assets/02.webp"; // Local image import
import img3 from "../assets/03.webp"; // Local image import

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
    img: img2
  },
  {
    heading: "Driving Innovation for a",
    highlight: "Healthier Tomorrow",
    subtext: "Empowering pharmaceutical breakthroughs with technology and global excellence.",
    img: img3
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setAnimate(false);
      }, 400);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-[80vh] flex items-center px-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="bg-white/0 p-10 rounded-xl max-w-3xl backdrop-blur-sm">
              <h1 className="text-6xl font-bold text-gray-800 leading-tight">
                {slide.heading}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-red-400 bg-clip-text text-transparent font-bold">
                  {slide.highlight}
                </span>
              </h1>
              <p className="mt-4 text-gray-700">{slide.subtext}</p>
              <button className="mt-6 px-6 py-3 bg-red-400 text-white rounded-full hover:bg-red-500 transition">
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
