import { FaCheckCircle } from "react-icons/fa";

const points = [
  "Over 13 years teaching Hijama nationally and internationally",
  "Trained and certified over 1,000 students across the UK",
  "Committed to safe, ethical, and Sunnah-compliant practice",
  "Dedicated to reviving Prophetic medicine in modern communities",
  "Ongoing CPD and integration of current healthcare standards",
];

export default function Instructor() {
  return (
    <section className="bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center gap-16">

        {/* Left Content */}
        <div className="flex-1">
          {/* Eyebrow */}
          <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-4">
            Instructor Spotlight
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-6">
            Learn From
            <br />
            <em className="text-green-600 italic font-serif">Experienced</em>
            <br />
            Practitioners
          </h2>

          {/* Quote */}
          <div className="border-l-4 border-green-600 pl-4 mb-6">
            <span className="text-green-600 text-2xl font-serif">"</span>
            <p className="text-blue-900 italic text-lg font-serif leading-relaxed">
  Our mission is not just to certify    it is to equip every student
  with the knowledge, ethics, and confidence to revive Prophetic
  medicine in their communities.
</p>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Founded in 2011, Hijama Nation was built on a deep belief that
            Prophetic medicine deserves the same respect, rigour, and
            professionalism as modern healthcare. Our instructors bring years of
            hands-on practice and a genuine love for the Sunnah to every lesson.
          </p>

          {/* Points */}
          <ul className="flex flex-col gap-3 mb-8">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          {/* Button */}
          <a
            href="#"
            className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200 inline-block"
          >
            Meet Our Team
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full">
          <img
            src="/images/practitioners.png"
            alt="Instructor"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}