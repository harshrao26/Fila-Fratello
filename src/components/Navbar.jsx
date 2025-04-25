import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import PharmaInquiryForm from "./PharmaInquiryForm.jsx"; // Assuming you have a PharmaInquiryForm component

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-3 border-t border-b border-gray-200">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Company Logo" className="h-16" />
          </Link>
          <nav className="flex gap-6 text-base font-medium text-gray-800">
            <button
              onClick={() => setShowModal(true)}
              className="hover:text-blue-600 transition"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50 transition-opacity duration-300">
          <div
            className="relative bg-white w-full max-w-6xl p-6 rounded-xl shadow-lg transform transition-all duration-300 scale-100 opacity-100"
            style={{
              animation: "fadeScaleIn 0.3s ease-out",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-600 text-4xl font-extralight"
            >
              ×
            </button>
            <PharmaInquiryForm />
          </div>

          {/* Inline Animation Styles */}
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
