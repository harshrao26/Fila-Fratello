import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  X,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo.webp"; // Assuming you have a logo image
const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-8 px-4 md:px-16 flex flex-col md:flex-row items-start justify-between gap-6 border-t">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="">
            <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </div>
          <span className="text-blue-800 font-bold text-xl capitalize">
            fila fratello pharmaceutical private limited
          </span>
        </div>

        {/* Address Section */}
        <div className="flex items-start gap-2 max-w-xs">
          <MapPin className="text-blue-700 mt-1" />
          <div>
            <p className="font-semibold">Registered Office:</p>
            <p className="text-sm text-gray-700">
              H-1/999, WORLD BANK, Barra, <br />
              Kanpur Nagar, Barra, Uttar Pradesh, <br />
              India, 208027
            </p>
            <p className="text-sm text-gray-700">CIN: U12345UP2021PTC123456</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Phone className="text-blue-700" size={18} />
            <span>+91 63967 87418</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-blue-700" size={18} />
            <span> filafratello@gmail.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">
            <Linkedin
              className="text-white bg-blue-800 rounded-full p-1"
              size={32}
            />
          </a>
          <a href="#">
            <Facebook
              className="text-white bg-blue-800 rounded-full p-1"
              size={32}
            />
          </a>
          <a href="#">
            <X className="text-white bg-blue-800 rounded-full p-1" size={32} />
          </a>
          <a href="#">
            <Youtube
              className="text-white bg-blue-800 rounded-full p-1"
              size={32}
            />
          </a>
        </div>
      </footer>

     <div className="flex justify-center items-center bg-g ray-900 text- gray-300 py-4 text-sm">
  <p className="text-center">
    Designed & Developed by{" "}
    <a
      href="https://genforgestudio.com/"
      title="Web & App Development by GenForge Studio"
      className="text-indigo-400 font-medium hover:underline hover:text-indigo-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      GenForge Studio
    </a>
    {" "}— Global Web & App Development Agency
  </p>
</div>
    </div>
  );
};

export default Footer;
