import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.webp";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-white py-16 md:py-32 px-6 overflow-hidden"
      role="region"
      aria-label="About Fila Fratello Pharmaceuticals"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
                Established 2025
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-[1.15]">
                A Leading Force in <span className="text-blue-600">Pharmaceutical Innovation</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Fila Fratello Pharmaceutical Private Limited is committed to delivering high-quality pharmaceutical solutions that prioritize innovation, accessibility, and human health.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                Registered under ROC Kanpur, we aim to redefine industry standards in healthcare through science-backed formulations and ethical practices, serving as a catalyst for a healthier global future.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg group"
              >
                Learn More About Our Mission
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10 scale-150"></div>
            <div className="relative p-12 bg-white rounded-[3rem] shadow-2xl shadow-blue-500/10 border border-slate-100">
              <Image
                src={logo}
                alt="Fila Fratello Pharmaceuticals Logo"
                className="max-w-[240px] md:max-w-[320px] h-auto drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
