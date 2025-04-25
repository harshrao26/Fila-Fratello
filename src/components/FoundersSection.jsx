import sampradaImg from '../assets/f1.webp'; // Add actual image path
import basudeoImg from '../assets/f2.webp';   // Add actual image path

const founders = [

  {
    name: "Priyanshu Bhadouriya",
    title: "Director",
    image: basudeoImg,
    titleColor: "text-blue-700",
    border: "border-blue-300",
    desc: `Priyanshu Bhadouriya combines deep business insight with a passion for building scalable systems. His commitment to integrity and forward-thinking has positioned him as a catalyst in the organization’s long-term strategic planning and execution.`,
  },
  {
    name: "Sumit Kumar Yadav",
    title: "Director",
    image: sampradaImg,
    titleColor: "text-blue-700",
    border: "border-red-300",
    desc: `Sumit Kumar Yadav brings a dynamic vision to leadership, with a focus on innovation and operational excellence. His strategic mindset and strong execution skills have been instrumental in driving sustainable growth and expanding impact in new markets.`,
  },
];

const FoundersSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Text */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-3xl capitalized md:text-5xl font-semibold  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-red-400 mb-2">
            Our Founders
          </h3>
          {/* <h2 className="text-3xl md:text-5xl font-semibold  text-gray-800 mb-6">
            Journeys that inspired us
          </h2> */}
          {/* <button className="px-6 py-3 bg-red-400 text-white rounded-full hover:bg-red-500 transition">
            Know More
          </button> */}
        </div>

        {/* Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <div
              key={i}
              className={`border rounded-xl p-6 ${founder.border} shadow-md`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={founder.image}
                  alt="Founders of Fila Fratello Pharmaceutical - Sumit Kumar Yadav and Priyanshu Bhadouriya"
                  className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md mb-4"
                />
                <h4 className={`text-lg font-semibold ${founder.titleColor}`}>
                  {founder.name}
                </h4>
                <p className="text-sm text-gray-700 mt-4">{founder.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
