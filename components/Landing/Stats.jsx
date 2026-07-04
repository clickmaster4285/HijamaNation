"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 2011,
    suffix: "",
    label: "Year Founded",
    sublabel: "A decade+ of trust",
    isYear: true,
  },
  {
    value: 4000,
    suffix: "+",
    label: "Students Trained",
    sublabel: "Across the UK & beyond",
  },
  {
    value: 100,
    suffix: "+",
    label: "Communities Reached",
    sublabel: "Local to global",
  },
  {
    value: 95,
    suffix: "%",
    label: "Satisfaction Rate",
    sublabel: "Verified outcomes",
  },
];

function Counter({ value, suffix, isYear }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = isYear ? 1900 : 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isYear]);

  const formattedNumber = isYear
    ? count.toString()
    : count.toLocaleString();

  return (
    <span ref={ref}>
      {formattedNumber}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0d1117] py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-2">
        <p className="text-white text-xs font-bold tracking-widest uppercase">
          Our Impact
        </p>
        <p className="text-white italic font-serif text-sm">
          Serving the Ummah Since 2011
        </p>
      </div>

      {/* Divider */}
      <hr className="border-white/10 mb-8 md:mb-12" />

      {/* Stats Grid – 2 columns on mobile, 4 on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-white/10">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`text-center md:text-left px-4 md:px-6 py-4 md:py-6 ${
              index < 2 ? 'border-b border-white/10 md:border-b-0' : ''
            }`}
          >
            {/* Number */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-yellow-600 mb-2 md:mb-4">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                isYear={stat.isYear}
              />
            </div>

            {/* Label */}
            <p className="text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1">
              {stat.label}
            </p>

            {/* Sublabel */}
            <p className="text-white/30 text-[10px] sm:text-xs">{stat.sublabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}