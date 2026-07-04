import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import heroBg from "../assets/hero1.jpeg";

const testimonials = [
  {
    initials: "AH",
    name: "Ahmed H",
    role: "Licensed Hijama Therapist",
    review:
      "Completing the Hijama Nation program gave me confidence and expertise. The blend of spiritual and medical guidance helped me serve others effectively.",
    stars: 5,
  },
  {
    initials: "SM",
    name: "Sara M",
    role: "Qualified Hijama Practitioner",
    review:
      "This course not only taught me technique but deepened my connection to my faith. I'm now able to help friends and family safely and with compassion.",
    stars: 5,
  },
  {
    initials: "RK",
    name: "Rami K",
    role: "Professional Hijama Specialist",
    review:
      "The curriculum was detailed and accessible. It bridged traditional healing and modern practices, empowering me to start my own Hijama clinic confidently.",
    stars: 5,
  },
  {
    initials: "LN",
    name: "Layla N",
    role: "Certified Hijama Practitioner",
    review:
      "I appreciated the thorough approach to hygiene and ethics. The instructors brought a professional yet deeply spiritual experience to every lesson.",
    stars: 5,
  },
  {
    initials: "OA",
    name: "Omar A",
    role: "Hijama Therapist",
    review:
      "The online format was flexible and well structured. I could study at my own pace while still feeling supported by the team throughout my journey.",
    stars: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <section className="relative py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Image with green overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-green-800/80" />

      {/* Content */}
      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-4">
          <div>
            <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-3">
              Student Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Stories From Our{" "}
              <em className="italic font-serif text-white/80">Students</em>
            </h2>
          </div>
          <div className="flex items-center gap-2 md:mt-10">
            <div className="flex text-yellow-400 text-sm">
              {"★★★★★"}
            </div>
            <span className="text-white/70 text-sm">Rated 5/5 by our graduates</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/20 mb-8" />

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
             className="min-w-[380px] max-w-[380px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col gap-4"      
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <span className="text-white text-sm font-medium">{t.name}</span>
                </div>
                <div className="flex text-yellow-400 text-xs">
                  {"★".repeat(t.stars)}
                </div>
              </div>

              {/* Review */}
              <p className="text-white/80 text-sm italic leading-relaxed flex-1">
                {t.review}
              </p>

              {/* Role */}
              <p className="text-white/50 text-xs">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-end mt-8">
        {/* Scroll Arrows
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div> */}

          {/* View All Button */}
          <a
            href="#"
            className="bg-white hover:bg-gray-100 text-green-900 text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            View All Programmes
          </a>
        </div>

      </div>
    </section>
  );
}