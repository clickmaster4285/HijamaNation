import React from "react";
import heroBg from "../assets/hero1.jpeg";
const stats = [
  { icon: "⊙", label: "Since 2011" },
  { icon: "⊙", label: "Online Certification" },
  { icon: "⊙", label: "1,000+ Trained" },
  { icon: "⊙", label: "UK-Based" },
];

export default function Hero() {
  return (
    <section className="relative md:min-h-screen min-h-auto flex items-start md:items-end pb-12 md:pb-20 overflow-hidden pt-6 md:pt-24">
      {/* Background Image Overlay */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
/>
   {/* Dark gradient overlay - matches the original dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/40" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 max-w-3xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
        \ <div className="w-12 h-px bg-white/60" />
          <p className="text-white/70 text-sm tracking-widest font-light">
            UK's Trusted Hijama Platform · Est. 2019
          </p>
        </div>

        {/* Headline */}
       <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] mb-4">
  Learn{" "}
  <em className="text-green-600 font-serif italic font-light italic">
    Hijama
  </em>
  <br />
  The Right Way.
</h1>

    {/* Tagline */}
<p className="text-white text-lg italic font-light mb-5 tracking-wide">
  Certified Training Rooted in Sunnah &amp; Science.
</p>

        {/* Description */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
          Gain professional Hijama certification through structured online
          training designed to help you heal, serve your community, and revive
          Prophetic medicine with confidence.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-green-400 text-xs">⊙</span>
              <span className="text-white/70 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="absolute bottom-8 right-8 w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-105 z-20">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </section>
  );
}