import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.webp";
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image src={logo} alt="Fila Fratello Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-slate-500 font-normal leading-relaxed text-sm">
              Passionately advancing healthcare with science, ethics, and a global vision. Reimagining pharmaceutical excellence since 2025.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Our Products', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-normal"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-slate-900 font-semibold mb-8">Corporate Connect</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Office</span>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    H-1-892, H Block, Barra World Bank, Barra, Kanpur, UP 208027
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Phone</span>
                  <p className="text-sm text-slate-600 font-normal">
                    +91-8173041920
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:col-span-2">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Email</span>
                  <p className="text-sm text-slate-600 font-normal">
                    Filafratellopharmaceutical@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-xs text-slate-400 font-normal">
            © {currentYear} Fila Fratello Pharmaceutical Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-400 font-normal flex items-center gap-2">
            Designed with excellence by
            <a href="https://genforgestudio.com/" className="text-blue-600 font-semibold hover:underline">GenForge Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;