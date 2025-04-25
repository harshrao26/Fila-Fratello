import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin, Facebook, X, Youtube } from "lucide-react";
import logo from '../assets/logo.webp'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow" : "bg-transparent"}`}>
      {/* Top Strip */}
      <div className="flex justify-between items-center px-6 py-2 text-blue-900 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <Mail className="w-4 h-4 text-red-500" />
        </div>
        <div className="flex items-center gap-2">
          <span>Kindly follow us on</span>
          <Linkedin className="w-5 h-5 cursor-pointer" />
          <Facebook className="w-5 h-5 cursor-pointer" />
          <X className="w-5 h-5 cursor-pointer" />
          <Youtube className="w-5 h-5 text-red-600 cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-3 border-t border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ALKEM Logo" className="h-16" />
        </Link>
        <nav className="flex gap-6 text-base font-medium text-gray-800">
          <Link to="/media">Media Room</Link>
          <Link to="/quick-links">Quick Links</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
