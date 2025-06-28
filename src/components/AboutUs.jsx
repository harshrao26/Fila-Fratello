import { Target, Eye, ShieldCheck } from 'lucide-react';
import aboutImg from '../assets/about.webp'; // Use your actual image

const AboutUs = () => {


  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl capitalized md:text-5xl font-semibold text-gray-800 mb-6 leading-snug">
            About Fila Fratello Pharmaceutical
          </h2>
          <p className="text-gray-600 text-md md:text-lg mb-6">
            Passionately advancing healthcare with science, ethics, and global vision.
          </p>
        </div>

        {/* Image + Content Row */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <img
            src={aboutImg}
            alt="Fila Fratello pharmaceutical manufacturing plant in Kanpur"
            className="w-full h-auto rounded-xl shadow-lg"
          />

          {/* Text Content */}
          <div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              <strong>Fila Fratello Pharmaceutical Private Limited</strong> is a progressive Indian pharma company driven by innovation, integrity, and impact. We specialize in high-quality specialty medicines for domestic and international markets.
            </p>
            <p className="text-gray-600 mb-6">
              We are committed to reshaping the healthcare landscape with scalable solutions, regulatory excellence, and a dedication to affordable therapeutic access.
            </p>

            {/* Icon Grid */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Target className="text-blue-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-blue-700">Our Mission</h4>
                  <p className="text-sm text-gray-600">
                    To improve quality of life by delivering safe, effective, and affordable medications through continuous research and care-driven manufacturing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Eye className="text-purple-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-purple-700">Our Vision</h4>
                  <p className="text-sm text-gray-600">
                    To be a globally respected pharmaceutical company empowering healthcare systems with sustainable innovation and human-first values.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck className="text-green-600 w-6 h-6 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-green-700">Our Values</h4>
                  <p className="text-sm text-gray-600">
                    We stand for trust, compliance, transparency, and long-term partnerships with healthcare providers and communities.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
