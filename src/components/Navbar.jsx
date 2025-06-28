import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../assets/logo.webp";
import PharmaInquiryForm from "./PharmaInquiryForm.jsx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Fila Fratello Pharmaceuticals | Innovating for Better Health</title>
        <meta name="description" content="Fila Fratello is redefining pharmaceutical standards with science-driven, ethical healthcare solutions from India." />
        <meta name="keywords" content="Fila Fratello, pharmaceutical company, Kanpur, Indian pharma, healthcare innovation, generic medicines" />
        <meta property="og:title" content="Fila Fratello Pharmaceuticals | Innovating for Better Health" />
        <meta property="og:description" content="Progressive Indian pharma company delivering global-quality healthcare through science and integrity." />
        <meta property="og:url" content="https://www.filafratello.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow" : "bg-transparent"}`}>
        <div className="flex justify-between items-center px-4 md:px-6 py-3 border-t border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2" aria-label="Fila Fratello Pharmaceuticals Home">
            <img src={logo} alt="Fila Fratello Pharmaceuticals Logo" className="h-12 md:h-16" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-base font-medium text-gray-800">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/products" className="hover:text-blue-600 transition">Our Products</Link>
            <button onClick={() => setShowModal(true)} className="hover:text-blue-600 transition">Contact Us</button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow px-4 py-3 text-gray-800 text-base font-medium space-y-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Home</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Our Products</Link>
            <button onClick={() => { setMenuOpen(false); setShowModal(true); }} className="block hover:text-blue-600">Contact Us</button>
          </div>
        )}
      </header>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-300">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative bg-white w-full max-w-6xl p-6 rounded-xl shadow-lg transform transition-all duration-300 scale-100 opacity-100"
            style={{ animation: "fadeScaleIn 0.3s ease-out" }}
          >
            <h2 id="modal-title" className="sr-only">Pharma Inquiry Form</h2>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-4xl font-extralight"
              aria-label="Close Contact Form"
            >
              ×
            </button>
            <PharmaInquiryForm />
          </div>
          <style>{`
            @keyframes fadeScaleIn {
              0% {
                opacity: 0;
                transform: scale(0.95);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default Header;
