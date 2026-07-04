import React from "react";
import { FaUserPlus, FaBookOpen, FaClipboardCheck, FaCertificate, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaUserPlus />,
    title: "Enrol",
    desc: "Choose your programme and complete enrolment in minutes.",
  },
  {
    number: "02",
    icon: <FaBookOpen />,
    title: "Learn Online",
    desc: "Access video lessons, guides, and expert instruction at your pace.",
  },
  {
    number: "03",
    icon: <FaClipboardCheck />,
    title: "Complete Assessments",
    desc: "Demonstrate your knowledge through structured evaluations.",
  },
  {
    number: "04",
    icon: <FaCertificate />,
    title: "Receive Certification",
    desc: "Earn your professional Hijama certification upon completion.",
  },
  {
    number: "05",
    icon: <FaHandsHelping />,
    title: "Practice With Confidence",
    desc: "Join our community and begin serving with full credentials.",
  },
];

export default function Journey() {
  return (
    <section className="bg-[#0d0f1c] py-16 px-8 md:px-16 lg:px-24">

      {/* Header */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <p className="text-white text-xs font-bold tracking-widest uppercase mb-3">
  Your Path Forward
</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Your Journey to{" "}
            <em className="text-green-500 italic font-serif">Certification</em>
          </h2>
        </div>
        <a
          href="#"
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200 mt-4 hidden md:block"
        >
          Start Today
        </a>
      </div>

      {/* Steps */}
      <div className="flex flex-col">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex items-center gap-6 py-6 border-t border-white/10 group hover:border-green-500/50 transition-colors duration-300"
          >
            <span className="text-white/10 text-4xl font-bold font-serif w-12 group-hover:text-green-500/30 transition-colors duration-300">
              {step.number}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-sm flex-shrink-0 group-hover:bg-green-500/20 group-hover:text-green-400 transition-all duration-300">
              {step.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl font-serif mb-1">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm">{step.desc}</p>
            </div>
            <div className="w-3 h-3 rounded-full border border-white/20 group-hover:border-green-500 group-hover:bg-green-500 transition-all duration-300" />
          </div>
        ))}
        <div className="border-t border-white/10" />
      </div>
    

      {/* Mobile Button */}
      <div className="flex justify-center mt-8 md:hidden">
        <a
          href="#"
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
        >
          Start Today
        </a>
      </div>

    </section>
  );
}