import Image from 'next/image';
import sampradaImg from '../assets/f1.webp';
import basudeoImg from '../assets/f2.webp';
import f3 from '../assets/f3.webp';
import f4 from '../assets/f4.webp';
import f7 from '../assets/xxs.webp';
import f8 from '../assets/f8.webp';

const team = [
  {
    name: "Priyanshu Bhadouriya",
    title: "Director",
    image: basudeoImg,
    bio: "Priyanshu combines deep business insight with a passion for building scalable systems, acting as a catalyst for excellence.",
  },
  {
    name: "Sumit Kumar Yadav",
    title: "Director",
    image: sampradaImg,
    bio: "Sumit brings a dynamic vision to leadership, focusing on innovation and sustainable growth in global markets.",
  },
  {
    name: "Akhilesh Yadav",
    title: "Central Marketing Head",
    image: f4,
    bio: "Akhilesh leads central marketing with a creative, data-driven approach that strengthens our brand presence.",
  },
  {
    name: "Rajnish Singh",
    title: "Eastern Marketing Head",
    image: f3,
    bio: "Rajnish oversees eastern operations, leveraging regional expertise to enhance outreach and loyalty.",
  },
  {
    name: "Aditya Pratap Singh",
    title: "Business Development Manager",
    image: f7,
    bio: "Aditya spearheads growth through strategic partnerships and a proactive client-first approach.",
  },
  {
    name: "Uttam Bhardwaj",
    title: "Territory Sales Manager",
    image: f8,
    bio: "Uttam drives regional sales through deep industry knowledge and strong client relationships.",
  }
];

const FoundersSection = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-4">
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Driven by <span className="text-blue-600">Vision</span>, <br />Dedicated to Health
            </h2>
          </div>
          <div className="h-0.5 flex-grow bg-slate-200 hidden md:block mb-6 ml-12"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-10 transition-transform duration-700 group-hover:scale-150 group-hover:bg-blue-100"></div>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full scale-105 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-semibold text-slate-900">
                    {member.name}
                  </h4>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    {member.title}
                  </span>
                </div>

                <p className="text-slate-500 font-normal leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
