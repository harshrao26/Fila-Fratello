import { Target, Eye, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import aboutImg from '../assets/about.webp';

const AboutUs = () => {
  const cards = [
    {
      title: "Our Mission",
      desc: "To improve quality of life by delivering safe, effective, and affordable medications through continuous research and care-driven manufacturing.",
      icon: <Target className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Our Vision",
      desc: "To be a globally respected pharmaceutical company empowering healthcare systems with sustainable innovation and human-first values.",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      title: "Our Values",
      desc: "We stand for trust, compliance, transparency, and long-term partnerships with healthcare providers and communities worldwide.",
      icon: <ShieldCheck className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section className="bg-slate-50/50 py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 md:gap-24 items-start">

          {/* Visual Side */}
          <div className="lg:col-span-2 space-y-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl blur-2xl group-hover:bg-blue-600/10 transition-colors"></div>
              <Image
                src={aboutImg}
                alt="Fila Fratello manufacturing excellence"
                className="relative w-full h-auto rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <div className="p-8 bg-blue-600 rounded-[2rem] text-white shadow-xl shadow-blue-500/20">
              <p className="text-xl font-semibold leading-relaxed mb-4">
                "Passionately advancing healthcare with science, ethics, and a global vision."
              </p>
              <div className="h-0.5 w-12 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-3 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
                Integrity in Every <span className="text-blue-600">Formulation</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-normal">
                <strong>Fila Fratello Pharmaceutical Private Limited</strong> is a progressive Indian pharma company driven by innovation, integrity, and impact. We specialize in high-quality specialty medicines for domestic and international markets.
              </p>
            </div>

            <div className="grid gap-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-x-2"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border ${card.color}`}>
                    {card.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-slate-900">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
