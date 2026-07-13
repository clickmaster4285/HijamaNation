'use client';
import { useState } from "react";

export default function InterestedSection({ questions, inView }) {
  const [showAll, setShowAll] = useState(false);
  const visibleQuestions = showAll ? questions : questions.slice(0, 6);
  const hasMore = questions.length > 6;

  return (
    <section className="ins-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .ins-section {
          position: relative;
          overflow: hidden;
          background: #060a12;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .ins-bg-img {
          position: absolute;
          inset: 0;
          background-image: url(/intrested.png);
          background-size: cover;
          background-position: center;
          opacity: 0.5;
          transform: scale(1.05);
          z-index: 0;
        }

        .ins-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6,10,18,0.65) 0%, rgba(6,10,18,0.4) 40%, rgba(6,10,18,0.7) 100%);
          z-index: 1;
        }

        .ins-glow-a {
          position: absolute;
          top: -12%;
          left: -6%;
          width: 28rem;
          height: 28rem;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .ins-glow-b {
          position: absolute;
          bottom: -15%;
          right: -8%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .ins-content {
          position: relative;
          z-index: 2;
        }

        .ins-head {
          opacity: 0;
          transform: translateY(20px);
        }

        .ins-head.show {
          animation: insFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes insFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .ins-sub {
          opacity: 0;
          transform: translateY(16px);
        }

        .ins-sub.show {
          animation: insFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
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

        .ins-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .ins-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #4ade80;
        }

        .ins-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .ins-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .ins-q-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 18px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          opacity: 0;
          transform: translateY(20px);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease,
                      background 0.35s ease,
                      box-shadow 0.35s ease;
        }

        .ins-q-card.show {
          animation: insCardIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes insCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .ins-q-card:hover {
          transform: translateY(-4px);
          border-color: rgba(34,197,94,0.45);
          background: rgba(34,197,94,0.12);
          box-shadow: 0 14px 30px rgba(0,0,0,0.4);
        }

        .ins-q-icon {
          flex-shrink: 0;
          width: 26px;
          height: 26px;
          border-radius: 999px;
          background: rgba(34,197,94,0.14);
          color: #4ade80;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .ins-q-card:hover .ins-q-icon {
          transform: scale(1.15) rotate(-6deg);
          background: rgba(34,197,94,0.25);
        }

        .ins-q-text {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.9);
          font-size: 14.5px;
          font-weight: 400;
          line-height: 1.5;
        }

        .ins-answer {
          position: relative;
          padding: 1px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(34,197,94,0.5), rgba(34,197,94,0.05) 60%);
          opacity: 0;
          transform: translateY(24px);
          margin-top: 28px;   /* ← Added spacing between button and answer */
        }

        .ins-answer.show {
          animation: insAnswerIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.35s;
        }

        @keyframes insAnswerIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .ins-answer-inner {
          background: rgba(10,16,26,0.7);
          backdrop-filter: blur(14px);
          border-radius: 19px;
          padding: 28px 32px;
        }

        @media (max-width: 640px) {
          .ins-answer-inner { padding: 22px 20px; }
        }

        .ins-answer-inner p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
        }

        @media (min-width: 768px) {
          .ins-answer-inner p {
            font-size: 16px;
          }
        }

        .ins-answer-inner .highlight {
          font-weight: 600;
          color: #4ade80;
        }

        .ins-show-more {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
          margin-bottom: 4px;   /* ← Added bottom margin for extra breathing room */
        }

        .ins-show-more-btn {
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

        .ins-show-more-btn:hover {
          background: rgba(34,197,94,0.15);
          border-color: #4ade80;
          transform: translateY(-2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .ins-head, .ins-sub, .ins-q-card, .ins-answer {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="ins-bg-img" />
      <div className="ins-overlay" />
      <div className="ins-glow-a" />
      <div className="ins-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`ins-content reveal ${inView ? "show" : ""}`}>
          <div className={`ins-head ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Common Questions</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl ins-heading leading-tight mb-6">
              Are You Interested in Hijama But Not Sure <span>Where to Start</span>?
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              Many students feel interested in Hijama, but they are unsure how to learn it properly.
            </p>
          </div>

          <p className={`ins-sub text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mb-6 ${inView ? "show" : ""}`}>
            You may be asking:
          </p>

          <div className="ins-grid">
            {visibleQuestions.map((q, idx) => (
              <div
                key={idx}
                className={`ins-q-card ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
              >
                <span className="ins-q-icon">❓</span>
                <span className="ins-q-text">{q}</span>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="ins-show-more">
              <button
                className="ins-show-more-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            </div>
          )}

          <div className={`ins-answer ${inView ? "show" : ""}`}>
            <div className="ins-answer-inner">
              <p>
                <span className="highlight">These are important questions.</span>{" "}
                Hijama should not be learned randomly. It requires correct knowledge, safety awareness,
                hygiene standards, client screening, contraindication awareness, aftercare guidance,
                consent, and responsible practice.
              </p>
              <p className="mt-4">
                That is why a structured Hijama certification course is important.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}