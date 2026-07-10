"use client";
import { useEffect, useRef, useState } from "react";
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function AnimatedStat({ value, inView, duration = 1200 }) {
  const numeric = parseInt(value, 10);
  const isNumber = !isNaN(numeric) && String(numeric) === value;
  const [display, setDisplay] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (!inView || !isNumber) return;
    let start = null;
    let frame;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplay(Math.floor(progress * numeric));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setDisplay(numeric);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumber, numeric, duration]);

  return <>{isNumber ? display : value}</>;
}

const credentials = ["GRCCT", "PMA", "IICT"];
const stats = [
  { value: "2", label: "Insurance Companies" },
  { value: "5", label: "Countries Recognised" },
  { value: "GRCCT", label: "Lead Advisors" },
];

export default function Recognition() {
  const [headRef, headInView] = useInView();
  const [bodyRef, bodyInView] = useInView();
  const [statsRef, statsInView] = useInView();

  return (
    <>
      <style>{`
        @keyframes bombIn {
          0% { transform: scale(0.6) translateY(20px); opacity: 0; }
          50% { transform: scale(1.08) translateY(-4px); opacity: 1; }
          70% { transform: scale(0.95) translateY(2px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .bomb-pop {
          animation: bombIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes cardFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .card-float {
          animation: cardFloat 3s ease-in-out infinite;
        }
        .card-float:nth-child(1) { animation-delay: 0s; }
        .card-float:nth-child(2) { animation-delay: 0.3s; }
        .card-float:nth-child(3) { animation-delay: 0.6s; }
      `}</style>

      <section className="about-section relative overflow-hidden py-14 md:py-20 px-6 md:px-12 lg:px-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/recognition.png"
            alt="Recognition background"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Darker overlay – now 80% */}
        <div className="absolute inset-0 z-10 bg-black/80" />

        <div className="relative z-20">
          <div>
            <div
              ref={headRef}
              className={`transition-all duration-700 ease-out ${
                headInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-flex items-center gap-3 text-green-400 text-sm font-medium tracking-widest uppercase mb-4">
                <span className="w-10 h-px bg-green-400" />
                Our Impact
              </span>

              <h2 className="about-heading text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
                Recognition &amp; Global Impact
              </h2>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium tracking-widest uppercase text-green-400 border border-green-400/30 rounded-full px-4 py-1.5"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div
              ref={bodyRef}
              className={`space-y-4 text-white/70 text-base md:text-lg leading-relaxed transition-all duration-700 ease-out delay-150 ${
                bodyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p>
                Muddassar and Umm Amaar aim to provide an excellent service for their clients,
                students and public. They have a pioneering vision for their Hijama Project and hope
                to provide a platform for case studies, scientific research and data analysis at
                their new location; <span className="text-green-400 font-medium">Hijama Nation Academy</span>.
              </p>

              <p>
                Their target is to have Hijama Cupping Therapy recognised and accepted within
                Governmental and Scientific circles and the NHS. They have already made
                breakthroughs by getting Hijama covered by{" "}
                <span className="text-green-400 font-medium">2 insurance companies</span> in the UK.
              </p>

              <p>
                They are members of various agencies and Lead Advisors in Holistic Hijama to the{" "}
                <span className="text-green-400 font-medium">GRCCT</span>. They have had Hijama
                Cupping Therapy recognised in the UK, EU, USA, Canada and Australia by the{" "}
                <span className="text-green-400 font-medium">PMA</span> and{" "}
                <span className="text-green-400 font-medium">IICT</span>.
              </p>
            </div>

            {/* Stats cards */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10"
            >
              {stats.map((item, i) => (
                <div
                  key={item.label}
                  style={{ transitionDelay: `${150 + i * 120}ms` }}
                  className={`rounded-xl border border-white/10 bg-white/[0.03] px-5 py-5 transition-all duration-700 ease-out hover:border-green-400/40 hover:bg-white/[0.05] hover:-translate-y-0.5 ${
                    statsInView ? "bomb-pop card-float" : "opacity-0"
                  }`}
                >
                  <span className="block text-white font-serif text-2xl md:text-3xl mb-1">
                    <AnimatedStat value={item.value} inView={statsInView} />
                  </span>
                  <span className="text-white/60 text-xs uppercase tracking-wider font-sans">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}