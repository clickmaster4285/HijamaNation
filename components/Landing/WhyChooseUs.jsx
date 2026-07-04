import { FaBookOpen, FaFlask, FaLaptop, FaCertificate, FaHeadset, FaHandsHelping } from "react-icons/fa";
const features = [
  {
    number: "01",
    icon: <FaBookOpen />,
    title: "Sunnah-Based Education",
    desc: "Rooted in authentic Prophetic medicine, taught with scholarly care and reverence for the tradition.",
  },
  {
    number: "02",
    icon: <FaFlask />,
    title: "Science-Led Training",
    desc: "Evidence-based curriculum developed alongside healthcare knowledge for safe, effective practice.",
  },
  {
    number: "03",
    icon: <FaLaptop />,
    title: "Flexible Online Learning",
    desc: "Study at your own pace with lifetime access to all course materials from anywhere in the world.",
  },
  {
    number: "04",
    icon: <FaCertificate />,
    title: "Professional Certification",
    desc: "Receive a recognised certification equipping you to practice with confidence and credibility.",
  },
  {
    number: "05",
    icon: <FaHeadset />,
    title: "Ongoing Student Support",
    desc: "Our team is with you from enrolment to practice    and beyond.",
  },
  {
    number: "06",
    icon: <FaHandsHelping />,
    title: "Practical Application",
    desc: "Real-world guidance that bridges theory to safe, hands-on Hijama practice.",
  },
   
];
export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-8 md:px-16 lg:px-24">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-6">
        <div>
          <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-5xl font-serif text-gray-900 leading-tight">
            Why Students Choose
            <br />
            <em className="text-green-600 italic font-serif">Hijama Nation</em>
          </h2>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm md:mt-8">
          For over a decade, the UK's most trusted Hijama certification academy
             combining Prophetic tradition with professional modern training.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-0" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200">
        {features.map((f) => (
          <div
            key={f.number}
            className="p-8 hover:bg-gray-50 transition-colors duration-200 group"
          >
            <div className="flex items-start justify-between mb-6">
             <span className="text-gray-200 group-hover:text-green-600 text-5xl font-bold font-serif leading-none transition-colors duration-300">
  {f.number}
</span>
             <span className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 text-xl">
  {f.icon}
</span>
            </div>
            <h3 className="text-gray-900 font-semibold text-base mb-2">
              {f.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}