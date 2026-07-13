'use client';
import { useState } from "react";

export default function WhyLearnHijama({ benefits, inView }) {
  const [showAll, setShowAll] = useState(false);
  const visibleBenefits = showAll ? benefits : benefits.slice(0, 6);
  const hasMore = benefits.length > 6;

  return (
    <section className="wly-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .wly-section {
          position: relative;
          overflow: hidden;
          background: #0a0e14;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .wly-bg-img {
          position: absolute;
          inset: 0;
          background-image: url(/learn.png);
          background-size: cover;
          background-position: center;
          opacity: 0.55;
          transform: scale(1.06);
          z-index: 0;
        }

        .wly-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 80% 10%, rgba(34,197,94,0.20) 0%, transparent 55%),
            linear-gradient(180deg, rgba(10,14,20,0.65) 0%, rgba(10,14,20,0.40) 50%, rgba(10,14,20,0.75) 100%);
          z-index: 1;
        }

        .wly-grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.35;
          background-image: radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .wly-glow {
          position: absolute;
          bottom: -18%;
          left: -8%;
          width: 26rem;
          height: 26rem;
          background: radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .wly-content {
          position: relative;
          z-index: 3;
        }

        .wly-head {
          opacity: 0;
          transform: translateY(20px);
        }

        .wly-head.show {
          animation: wlyFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes wlyFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .wly-lead {
          opacity: 0;
          transform: translateY(16px);
        }

        .wly-lead.show {
          animation: wlyFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.12s;
        }

        .wly-subline {
          opacity: 0;
          transform: translateY(14px);
        }

        .wly-subline.show {
          animation: wlyFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.2s;
        }

        .wly-bento {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 14px;
        }

        @media (min-width: 768px) {
          .wly-bento { grid-template-columns: repeat(2, 1fr); }
        }

        .wly-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px 22px;
          background: linear-gradient(150deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.85);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease,
                      background 0.35s ease;
        }

        .wly-card.show {
          animation: wlyPopIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes wlyPopIn {
          0% { opacity: 0; transform: scale(0.8) translateY(18px); }
          70% { opacity: 1; transform: scale(1.03) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .wly-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 100% 0%, rgba(34,197,94,0.18), transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .wly-card:hover::before {
          opacity: 1;
        }

        .wly-card:hover {
          transform: translateY(-6px) scale(1.015);
          border-color: rgba(34,197,94,0.5);
          box-shadow: 0 18px 38px rgba(0,0,0,0.5);
          background: linear-gradient(150deg, rgba(34,197,94,0.12), rgba(255,255,255,0.04));
        }

        .wly-card-icon {
          position: relative;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(34,197,94,0.20);
          border: 1px solid rgba(34,197,94,0.40);
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease;
        }

        .wly-card:hover .wly-card-icon {
          transform: scale(1.18) rotate(8deg);
          background: rgba(34,197,94,0.35);
        }

        .wly-card-label {
          position: relative;
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.92);
          font-size: 14.5px;
          font-weight: 400;
          line-height: 1.55;
          padding-top: 3px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .wly-quote {
          position: relative;
          margin-top: 36px;
          padding: 1.5px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(74,222,128,0.55), rgba(34,197,94,0.05) 55%, rgba(74,222,128,0.2));
          opacity: 0;
          transform: translateY(24px);
        }

        .wly-quote.show {
          animation: wlyFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.45s;
        }

        .wly-quote-inner {
          position: relative;
          background: rgba(9,13,21,0.75);
          backdrop-filter: blur(16px);
          border-radius: 20.5px;
          padding: 34px 38px;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .wly-quote-inner { padding: 26px 22px; }
        }

        .wly-quote-mark {
          position: absolute;
          top: -6px;
          left: 18px;
          font-family: Georgia, serif;
          font-size: 90px;
          color: rgba(74,222,128,0.20);
          line-height: 1;
          pointer-events: none;
        }

        .wly-quote-inner p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.9);
          font-style: italic;
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

        .wly-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .wly-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #4ade80;
        }

        .wly-show-more {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }

        .wly-show-more-btn {
          background: transparent;
          border: 1px solid rgba(34,197,94,0.4);
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 28px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .wly-show-more-btn:hover {
          background: rgba(34,197,94,0.15);
          border-color: #4ade80;
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .wly-head, .wly-lead, .wly-subline, .wly-card, .wly-quote {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="wly-bg-img" />
      <div className="wly-overlay" />
      <div className="wly-grain" />
      <div className="wly-glow" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`wly-content ${inView ? "show" : ""}`}>
          <div className={`wly-head ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Why Learn</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl wly-heading leading-tight mb-6">
              Why Learn <span>Hijama</span>?
            </h2>
          </div>

          <p className={`wly-lead text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mb-8 ${inView ? "show" : ""}`}>
            Learning Hijama can be a meaningful step for students who want to combine faith, knowledge,
            natural wellness, and service.
          </p>

          <p className={`wly-subline text-white/70 text-sm md:text-base leading-relaxed max-w-3xl mb-6 ${inView ? "show" : ""}`}>
            Through proper Hijama training, students can:
          </p>

          <div className="wly-bento">
            {visibleBenefits.map((item, idx) => (
              <div
                key={idx}
                className={`wly-card ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.25 + idx * 0.09}s` }}
              >
                <span className="wly-card-icon">✓</span>
                <span className="wly-card-label">{item}</span>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="wly-show-more">
              <button
                className="wly-show-more-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            </div>
          )}

          <div className={`wly-quote ${inView ? "show" : ""}`}>
            <div className="wly-quote-inner">
              <span className="wly-quote-mark">"</span>
              <p className="relative">
                This course is not only about learning a technique. It is about learning Hijama
                with knowledge, safety, respect, and responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}