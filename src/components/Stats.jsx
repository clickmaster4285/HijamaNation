import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 2011,
    suffix: "",
    label: "Year Founded",
    sublabel: "A decade+ of trust",
    isYear: true,
  },
  {
    value: 1000,
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

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0d1117] py-16 px-8 md:px-16 lg:px-24">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-white text-xs font-bold tracking-widest uppercase">
          Our Impact
        </p>
       <p className="text-white italic font-serif text-sm">
  Serving the Ummah Since 2011
</p>
      </div>

      {/* Divider */}
      <hr className="border-white/10 mb-12" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {stats.map((stat) => (
          <div key={stat.label} className="px-8 py-6">
            {/* Number */}
            <div className="text-5xl md:text-6xl font-serif text-yellow-600 mb-4">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                isYear={stat.isYear}
              />
            </div>

            {/* Label */}
            <p className="text-white text-xs font-bold tracking-widest uppercase mb-1">
              {stat.label}
            </p>

            {/* Sublabel */}
            <p className="text-white/30 text-xs">{stat.sublabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}