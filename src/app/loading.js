import Image from "next/image";
import logo from "../assets/logo.webp";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Main Logo Container */}
        <div className="relative mb-8">
          {/* Outer Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
          
          {/* Rotating Gradient Ring */}
          <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-blue-600 border-r-blue-600/30 animate-spin"></div>
          
          {/* Center Brand Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-12 h-12">
              <Image
                src={logo}
                alt="Fila Fratello Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-semibold text-slate-900 tracking-tight">
            Fila Fratello
          </h2>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
          </div>
        </div>

        {/* Glassmorphic Background Card (Subtle) */}
        <div className="absolute -z-10 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
