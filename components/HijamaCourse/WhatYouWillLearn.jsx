import { useState } from "react";

export default function WhatYouWillLearn({ curriculum, inView }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? curriculum : curriculum.slice(0, 9);
  const hasMore = curriculum.length > 9;

  return (
    <section className="wyl-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .wyl-section {
          position: relative;
          overflow: hidden;
          background: #07090f;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .wyl-pattern {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.7;
          background-image:
            linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px),
            repeating-linear-gradient(135deg, rgba(34,197,94,0.05) 0px, rgba(34,197,94,0.05) 1px, transparent 1px, transparent 18px);
          background-size: 46px 46px, 46px 46px, 100% 100%;
          mask-image: radial-gradient(ellipse 85% 65% at 50% 15%, black 10%, transparent 78%);
          pointer-events: none;
        }

        .wyl-dots {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          background-image: radial-gradient(rgba(74,222,128,0.18) 1.5px, transparent 1.5px);
          background-size: 22px 22px;
          mask-image: radial-gradient(ellipse 70% 50% at 85% 85%, black 5%, transparent 75%);
          pointer-events: none;
        }

        .wyl-glow-a {
          position: absolute;
          top: -16%;
          right: -8%;
          width: 30rem;
          height: 30rem;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .wyl-glow-b {
          position: absolute;
          bottom: -18%;
          left: -10%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .wyl-content {
          position: relative;
          z-index: 1;
        }

        .wyl-head {
          opacity: 0;
          transform: translateY(20px);
        }

        .wyl-head.show {
          animation: wylFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes wylFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .wyl-lead {
          opacity: 0;
          transform: translateY(16px);
        }

        .wyl-lead.show {
          animation: wylFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.12s;
        }

        .wyl-sub {
          opacity: 0;
          transform: translateY(14px);
        }

        .wyl-sub.show {
          animation: wylFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.2s;
        }

        .eyebrow--green {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: inline-block;
          color: #16a34a;
          margin-bottom: 8px;
        }

        .wyl-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .wyl-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .wyl-lead-text {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
        }

        .wyl-sub-text {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          line-height: 1.7;
        }

        .wyl-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 14px;
        }

        @media (min-width: 640px) {
          .wyl-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .wyl-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .wyl-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 22px;
          background: linear-gradient(150deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(18px) scale(0.92);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease,
                      background 0.35s ease;
        }

        .wyl-card.show {
          animation: wylCardIn 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes wylCardIn {
          0% { opacity: 0; transform: translateY(18px) scale(0.85); }
          70% { opacity: 1; transform: translateY(-2px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .wyl-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, rgba(34,197,94,0.18), transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .wyl-card:hover::before {
          opacity: 1;
        }

        .wyl-card:hover {
          transform: translateY(-5px);
          border-color: rgba(34,197,94,0.45);
          box-shadow: 0 16px 32px rgba(0,0,0,0.45);
        }

        .wyl-card-num {
          position: relative;
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.3);
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease;
        }

        .wyl-card:hover .wyl-card-num {
          transform: scale(1.15) rotate(-6deg);
          background: rgba(34,197,94,0.28);
        }

        .wyl-card-label {
          position: relative;
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.85);
          font-size: 14.5px;
          font-weight: 400;
          line-height: 1.55;
          padding-top: 3px;
        }

        .wyl-footer {
          margin-top: 36px;
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .wyl-more-btn {
          background: transparent;
          border: 1px solid rgba(74,222,128,0.4);
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          padding: 11px 24px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .wyl-more-btn:hover {
          border-color: #4ade80;
          background: rgba(34,197,94,0.1);
          color: #ffffff;
        }

        .wyl-cta-row {
          margin-top: 16px;
          text-align: left;
        }

        .wyl-cta {
          display: inline-block;
          border: 1px solid rgba(34,197,94,0.4);
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          padding: 13px 30px;
          border-radius: 999px;
          font-weight: 500;
          font-size: 14.5px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: default;       /* ← non‑clickable cursor */
        }

        .wyl-cta:hover {
          border-color: #22c55e;
          background: #16a34a;
          color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          .wyl-head, .wyl-lead, .wyl-sub, .wyl-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="wyl-pattern" />
      <div className="wyl-dots" />
      <div className="wyl-glow-a" />
      <div className="wyl-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`wyl-content reveal ${inView ? "show" : ""}`}>
          <div className={`wyl-head ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Curriculum</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl wyl-heading leading-tight mb-6">
              What You Will Learn in This <span>Hijama Course</span>
            </h2>
          </div>

          <p className={`wyl-lead wyl-lead-text max-w-3xl mb-6 ${inView ? "show" : ""}`}>
            Our Hijama course covers the key knowledge areas students need to understand before
            practising Hijama responsibly.
          </p>

          <p className={`wyl-sub wyl-sub-text max-w-3xl mb-8 ${inView ? "show" : ""}`}>
            On the homepage, here is a short overview of the curriculum:
          </p>

          <div className="wyl-grid">
            {visibleItems.map((item, idx) => (
              <div
                key={idx}
                className={`wyl-card ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.15 + (idx % 9) * 0.06}s` }}
              >
                <span className="wyl-card-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="wyl-card-label">{item}</span>
              </div>
            ))}
          </div>

          <div className="wyl-footer">
            {hasMore && (
              <button className="wyl-more-btn" onClick={() => setShowAll((v) => !v)}>
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          <div className="wyl-cta-row">
            <div
              role="button"
              className="wyl-cta"
              onClick={(e) => e.preventDefault()}
            >
              View Full Course Curriculum →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}