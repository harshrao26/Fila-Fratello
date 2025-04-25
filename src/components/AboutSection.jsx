import logo from "../assets/logo.webp"; // Use your masked/diamond image

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#eef3fa] to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Block */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6 leading-snug">
            <span className="text-blue-800">About </span>
            <span className="text-red-400">Us</span><br />
            Leading global pharmaceutical company
          </h2>
          <p className="text-gray-600 text-md md:text-lg mb-6">
            A single idea, which sprouts from a human mind, contains the potential to create marvels
            that can influence generations. It can redefine rules, it can transform the world. Back in
            the year 1973, a team of individuals came with such an idea – The idea was called Alkem.
            It was highly potent and resilient, like a spark that could ignite a thousand more ideas.
          </p>
          <button className="bg-red-400 text-white px-8 py-3 rounded-full hover:bg-red-500 transition">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img src={logo} alt="Alkem Logo" className="max-w-[280px] md:max-w-[360px]" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 border-t pt-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-blue-900 font-semibold">
        <div>
          <h3 className="text-2xl md:text-3xl">19</h3>
          <p className="text-sm text-gray-600">Manufacturing units</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl">40</h3>
          <p className="text-sm text-gray-600">Countries</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl">800+</h3>
          <p className="text-sm text-gray-600">Brands</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl">21,000+</h3>
          <p className="text-sm text-gray-600">Workforce</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl">₹126,676</h3>
          <p className="text-sm text-gray-600">Million in FY 2023–24</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
