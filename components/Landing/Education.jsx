import { FaSyncAlt, FaStar, FaHeartbeat, FaShieldAlt } from "react-icons/fa";

const topics = [
  {
    icon: <FaSyncAlt />,
    title: "What is Hijama?",
    desc: "Hijama (wet cupping) is a Prophetic healing practice in which cups are applied to the skin to draw out stagnant blood    promoting circulation, detoxification, and holistic wellness.",
  },
  {
    icon: <FaStar />,
    title: "Benefits of Hijama",
    desc: "From relieving chronic pain and improving blood flow to supporting immunity and reducing stress    Hijama offers wide-ranging, documented health benefits rooted in both tradition and research.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Hijama vs. Cupping Therapy",
    desc: "Hijama involves controlled superficial incisions (wet cupping), while dry cupping uses suction only. Both require formal training for safe and ethical practice.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Why Proper Training Matters",
    desc: "Safe practice requires thorough knowledge of anatomy, infection control, contraindications, and aftercare. Certification ensures both your safety and the wellbeing of those you serve.",
  },
];

export default function Education() {
  return (
    <section className="bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-16 items-center">

        {/* Left Image */}
        <div className="flex-1 w-full">
          <img
            src="/images/education.png"
            alt="Hijama Education"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Eyebrow */}
          <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Educational Resources
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-8">
            Understand the{" "}
            <em className="text-green-600 italic font-serif">Science</em>
            <br />
            <em className="text-green-600 italic font-serif">& Spirit</em>{" "}
            of Hijama
          </h2>

          {/* Topics */}
          <div className="flex flex-col gap-6 mb-8">
            {topics.map((topic) => (
              <div key={topic.title} className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-sm flex-shrink-0 mt-0.5">
                  {topic.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-gray-900 font-semibold text-sm mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href="#"
            className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200 inline-block"
          >
            Read More Articles
          </a>
        </div>

      </div>
    </section>
  );
}