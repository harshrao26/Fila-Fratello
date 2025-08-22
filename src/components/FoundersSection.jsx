import sampradaImg from '../assets/f1.webp'; // Add actual image path
import basudeoImg from '../assets/f2.webp';   // Add actual image path
import f3 from '../assets/f3.webp';   // Add actual image path
import f4 from '../assets/f4.webp';   // Add actual image path
import f5 from '../assets/f5.webp';   // Add actual image path
 import f7 from '../assets/xxs.webp';   // Add actual image path

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
    desc: `Sumit Kumar Yadav brings a dynamic vision to leadership, focusing on innovation and operational excellence. His strategic mindset and strong execution skills have been instrumental in driving sustainable growth and expanding impact in new markets.`,
  },
  {
    name: "Akhilesh Yadav",
    title: "Central Marketing Head",
    image: f4,
    titleColor: "text-blue-700",
    border: "border-blue-300",
    desc: `Akhilesh Yadav leads the central marketing efforts with a creative and data-driven approach. His deep understanding of market trends and customer engagement strategies has significantly strengthened the organization's brand presence.`,
  },
  {
    name: "Rajnish Singh",
    title: "Eastern Marketing Head",
    image: f3,
    titleColor: "text-blue-700",
    border: "border-red-300",
    desc: `Rajneesh Singh oversees marketing operations in the eastern region, bringing regional expertise and innovative campaigns. His dedication to localized strategies has greatly enhanced outreach and customer loyalty.`,
  },
  // {
  //   name: "Rahul Kumar",
  //   title: "Product Management Team Head",
  //   image: f5,
  //   titleColor: "text-blue-700",
  //   border: "border-blue-300",
  //   desc: `Rahul Kumar drives the product management initiatives with a sharp focus on user needs and market demands. His leadership ensures that the product development process aligns perfectly with organizational goals and customer expectations.`,
  // },
  
  {
  name: "Aditya Pratap Singh",
  title: "Business Development Manager",
  image: f7,
  titleColor: "text-blue-700",
  border: "border-blue-300",
  desc: `Aditya Pratap Singh spearheads business development with a focus on strategic partnerships, client acquisition, and market expansion. His deep understanding of customer needs and proactive approach has been instrumental in driving sustainable growth for the organization.`,
}

];


const FoundersSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-ro gap-12 items-start">
        {/* Left Text */}
        <div className="w-full  ">
          <h3 className="text-3xl capitalized text-center w-full md:text-5xl font-semibold  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-red-400 mb-2">
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
        <div className="w-full  grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h4 className={`text-lg font-semibold capitalize ${founder.titleColor}`}>
                  {founder.name}
                </h4>
                <h4 className={`text-sm font- capitalize `}>
                  {founder.title}
                </h4>
                <p className="text-sm text-gray-700 mt-2">{founder.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
