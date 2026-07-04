"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Observe Nature",
    description:
      "Ancient texts documented the properties of the natural world, forming the foundation of Prophetic medicine through careful observation and timeless wisdom.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="34" height="34">
        <circle cx="20" cy="20" r="10" stroke="#1c7c47" strokeWidth="2.5"/>
        <line x1="28" y1="28" x2="40" y2="40" stroke="#1c7c47" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="4" fill="#d0ece0"/>
      </svg>
    ),
    accent: "#e8f5ef",
    border: "#a8d5b8",
  },
  {
    number: "02",
    title: "Integrate Health",
    description:
      "Remedies were connected with spiritual and lifestyle practices, weaving physical healing with ethical living and community wellbeing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="34" height="34">
        <path d="M24 8 C24 8, 10 18, 10 28 a14 14 0 0 0 28 0 C38 18, 24 8, 24 8Z" stroke="#1c7c47" strokeWidth="2.5" fill="#e8f5ef"/>
        <path d="M24 20 v10 M19 25 h10" stroke="#1c7c47" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#f0faf4",
    border: "#a8d5b8",
  },
  {
    number: "03",
    title: "Investigate Wisdom",
    description:
      "Modern science now validates and understands this ancient knowledge, bridging centuries of Prophetic tradition with contemporary clinical standards.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="34" height="34">
        <rect x="8" y="28" width="8" height="14" rx="2" stroke="#1c7c47" strokeWidth="2.5"/>
        <rect x="20" y="20" width="8" height="22" rx="2" stroke="#1c7c47" strokeWidth="2.5"/>
        <rect x="32" y="12" width="8" height="30" rx="2" stroke="#1c7c47" strokeWidth="2.5"/>
        <path d="M10 20 L22 14 L34 8" stroke="#e05c2a" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3"/>
      </svg>
    ),
    accent: "#fef8f5",
    border: "#f0c4a8",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function StepCard({ step, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`pod-card ${inView ? "pod-card--visible" : ""}`}
      style={{ transitionDelay: inView ? `${0.1 + index * 0.18}s` : "0s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="pod-topline" style={{ width: hovered ? "100%" : "0%" }} />
      <div className="pod-step-num-wrap">
        <span className="pod-step-num">{step.number}</span>
      </div>
      <div
        className="pod-icon-wrap"
        style={{
          background: step.accent,
          borderColor: step.border,
          transform: hovered ? "translateY(-5px) scale(1.06)" : "translateY(0) scale(1)",
          boxShadow: hovered ? "0 8px 20px rgba(28,124,71,0.15)" : "none",
        }}
      >
        {step.icon}
      </div>
      <h3 className="pod-title">{step.title}</h3>
      <p className="pod-desc">{step.description}</p>
      <div
        className="pod-arrow"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-8px)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10h12M12 6l4 4-4 4" stroke="#1c7c47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontSize: "13px", color: "#1c7c47", fontWeight: 600, marginLeft: "6px" }}>
          Learn more
        </span>
      </div>
    </div>
  );
}

export default function ProcessOfDiscovery() {
  const [headerRef, headerInView] = useInView(0.2);
  const [cardsRef, cardsInView] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600&display=swap');

        .pod-section {
          font-family: 'Inter', sans-serif;
          background: #e6f0ea;  /* 👈 darker than original #f4f9f6 */
          padding: 80px 80px;
          box-sizing: border-box;
          width: 100%;
        }

        @media (max-width: 1024px) { .pod-section { padding: 64px 48px; } }
        @media (max-width: 768px)  { .pod-section { padding: 48px 24px; } }

        /* ── HEADER ── */
        .pod-header { margin-bottom: 52px; }

        .pod-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e05c2a;
          margin: 0 0 14px;
          display: block;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .pod-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .pod-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(34px, 4vw, 50px);
          font-weight: 700;
          color: #1a2e1a;
          line-height: 1.1;
          margin: 0 0 16px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .pod-heading.visible { opacity: 1; transform: translateY(0); }
        .pod-heading em { font-style: italic; color: #1c7c47; }

        .pod-subhead {
          font-size: 16px;
          color: #4a5568;
          max-width: 540px;
          line-height: 1.75;
          margin: 0;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .pod-subhead.visible { opacity: 1; transform: translateY(0); }

        /* ── CONNECTOR ── */
        .pod-connector-wrap { position: relative; }

        .pod-connector {
          position: absolute;
          top: 56px;
          left: calc(16.67% + 20px);
          right: calc(16.67% + 20px);
          height: 1.5px;
          background: #c8dfd0;
          z-index: 0;
          overflow: hidden;
        }
        .pod-connector-fill {
          height: 100%;
          background: #1c7c47;
          width: 0%;
          transition: width 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }
        .pod-connector-fill.visible { width: 100%; }

        .pod-node {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          border: 2.5px solid #1c7c47;
          position: absolute;
          top: 49px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .pod-node.visible { opacity: 1; }

        @media (max-width: 900px) {
          .pod-connector { display: none; }
          .pod-node { display: none; }
        }

        /* ── GRID ── */
        .pod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 900px) { .pod-grid { grid-template-columns: 1fr; } }

        /* ── CARD ── */
        .pod-card {
          background: #ffffff;
          border: 1px solid #ddeae2;
          border-radius: 20px;
          padding: 28px 26px 26px;
          position: relative;
          cursor: default;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.65s ease,
            transform 0.65s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .pod-card--visible { opacity: 1; transform: translateY(0); }
        .pod-card:hover {
          border-color: #1c7c47;
          box-shadow: 0 16px 48px rgba(28,124,71,0.1);
        }

        .pod-topline {
          position: absolute;
          top: 0;
          left: 0;
          height: 3px;
          background: #1c7c47;
          border-radius: 20px 0 0 0;
          transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pod-step-num-wrap {
          position: absolute;
          top: 20px;
          right: 22px;
        }
        .pod-step-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1;
          color: #dbeee3;
          display: block;
          transition: color 0.3s ease;
          user-select: none;
        }
        .pod-card:hover .pod-step-num { color: #b8ddc8; }

        .pod-icon-wrap {
          width: 62px;
          height: 62px;
          border-radius: 15px;
          border: 1.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          margin-top: 8px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .pod-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a2e1a;
          margin: 0 0 10px;
          line-height: 1.25;
        }

        .pod-desc {
          font-size: 14.5px;
          color: #4a5568;
          line-height: 1.78;
          margin: 0 0 20px;
        }

        .pod-arrow {
          display: flex;
          align-items: center;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .pod-eyebrow, .pod-heading, .pod-subhead,
          .pod-card, .pod-connector-fill, .pod-node {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            width: 100% !important;
          }
        }
      `}</style>

      <section className="pod-section" aria-label="Process of Discovery">

        {/* Header */}
        <div className="pod-header" ref={headerRef}>
          <span className={`pod-eyebrow ${headerInView ? "visible" : ""}`}>Our Approach</span>
          <h2 className={`pod-heading ${headerInView ? "visible" : ""}`}>
            Process of <em>Discovery</em>
          </h2>
          <p className={`pod-subhead ${headerInView ? "visible" : ""}`}>
            From ancient observation to modern validation    how Hijama knowledge was built,
            preserved, and continues to grow.
          </p>
        </div>

        {/* Connector + Cards */}
        <div className="pod-connector-wrap" ref={cardsRef}>

          <div className="pod-connector">
            <div className={`pod-connector-fill ${cardsInView ? "visible" : ""}`} />
          </div>

          {steps.map((_, i) => (
            <div
              key={i}
              className={`pod-node ${cardsInView ? "visible" : ""}`}
              style={{
                left: `calc(${i === 0 ? "16.67%" : i === 1 ? "50%" : "83.33%"} - 7px)`,
                transitionDelay: cardsInView ? `${0.6 + i * 0.25}s` : "0s",
              }}
            />
          ))}

          <div className="pod-grid">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} inView={cardsInView} />
            ))}
          </div>
        </div>

      </section>
    </>
  );
}