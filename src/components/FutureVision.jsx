import { Leaf, FlaskConical, Globe } from 'lucide-react';

const FutureVision = () => {
  const visions = [
    {
      title: "Sustainable Growth",
      desc: "Building a future-ready pharma ecosystem with responsible practices, efficient supply chains, and environment-first strategies.",
      icon: <Leaf className="w-6 h-6" />,
      accent: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-500/10",
    },
    {
      title: "R&D Leadership",
      desc: "Investing in breakthrough research and development to deliver next-gen solutions in both generics and speciality healthcare.",
      icon: <FlaskConical className="w-6 h-6" />,
      accent: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/10",
    },
    {
      title: "Global Expansion",
      desc: "Expanding our global footprint while upholding our commitment to quality, compliance, and accessible healthcare worldwide.",
      icon: <Globe className="w-6 h-6" />,
      accent: "from-indigo-500 to-purple-600",
      shadow: "shadow-indigo-500/10",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight italic">
            Vision for the <span className="text-blue-600 not-italic">Future</span>
          </h2>
          <p className="text-lg text-slate-500 font-normal leading-relaxed">
            At <strong>Fila Fratello Pharmaceutical Pvt. Ltd.</strong>, we envision a future where advanced science, compassionate care, and sustainable innovation converge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visions.map((v, i) => (
            <div
              key={i}
              className={`group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2 ${v.shadow}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.accent} flex items-center justify-center text-white mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {v.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">
                {v.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-normal">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVision;
