export default function PracticalTraining({ inView }) {
  const keywords = [
    "Client Preparation",
    "Hygiene Setup",
    "Safe Working Practice",
    "Technique Awareness",
    "Client Comfort",
    "Consent",
    "Aftercare",
    "Case Study Completion",
    "Professional Responsibility",
  ];

  return (
    <section className="pt-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .pt-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #ecfaf1 0%, #def7e7 55%, #e6f9ed 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .pt-pattern {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.6;
          background-image:
            linear-gradient(rgba(22,101,52,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(22,101,52,0.08) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(ellipse 80% 65% at 50% 10%, black 5%, transparent 75%);
          animation: ptDrift 24s linear infinite;
        }

        @keyframes ptDrift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 44px 44px, -44px 44px; }
        }

        .pt-ring {
          position: absolute;
          top: -10%;
          right: 4%;
          width: 18rem;
          height: 18rem;
          border: 1.5px dashed rgba(22,101,52,0.18);
          border-radius: 999px;
          z-index: 0;
          opacity: 0;
        }

        .pt-ring.show {
          animation: ptRingIn 1.2s ease forwards, ptSpin 60s linear infinite;
          animation-delay: 0.3s, 0.3s;
        }

        @keyframes ptRingIn {
          to { opacity: 1; }
        }

        @keyframes ptSpin {
          to { transform: rotate(360deg); }
        }

        .pt-glow {
          position: absolute;
          bottom: -18%;
          left: -10%;
          width: 26rem;
          height: 26rem;
          background: radial-gradient(circle, rgba(22,163,74,0.16) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .pt-dark-right {
          position: absolute;
          top: -10%;
          right: -16%;
          width: 34rem;
          height: 34rem;
          background: radial-gradient(circle, rgba(20,83,45,0.35) 0%, rgba(22,101,52,0.16) 45%, transparent 72%);
          z-index: 0;
          pointer-events: none;
          opacity: 0;
          filter: blur(4px);
        }

        .pt-dark-right.show {
          animation: ptDarkIn 1.4s ease forwards, ptDarkFloat 9s ease-in-out infinite;
          animation-delay: 0.1s, 1.5s;
        }

        @keyframes ptDarkIn {
          to { opacity: 1; }
        }

        @keyframes ptDarkFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-18px, 22px) scale(1.06); }
        }

        .pt-content {
          position: relative;
          z-index: 1;
        }

        .pt-head {
          opacity: 0;
          transform: translateY(24px) scale(0.96);
        }

        .pt-head.show {
          animation: ptPopUp 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes ptPopUp {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .pt-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #0f2e1a;
        }

        .pt-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #16a34a;
        }

        .pt-p {
          opacity: 0;
          transform: translateY(16px);
        }

        .pt-p.show {
          animation: ptFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes ptFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .pt-p-body {
          font-family: 'Inter', sans-serif;
          color: rgba(28,56,38,0.85);
          font-size: 16px;
          line-height: 1.7;
        }

        .pt-p-body-muted {
          font-family: 'Inter', sans-serif;
          color: rgba(28,56,38,0.75);
          font-size: 16px;
          line-height: 1.7;
        }

        .pt-quote {
          position: relative;
          margin-top: 28px;
          padding: 1.5px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(22,101,52,0.45), rgba(22,163,74,0.08) 60%);
          opacity: 0;
          transform: translateY(20px) scale(0.97);
        }

        .pt-quote.show {
          animation: ptPopUp 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        .pt-quote-inner {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(6px);
          border-radius: 16.5px;
          padding: 20px 26px;
        }

        .pt-quote-inner p {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-weight: 300;
          color: #0f2e1a;
          font-size: 16px;
          line-height: 1.7;
        }

        .pt-chip-row {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pt-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(22,101,52,0.18);
          border-radius: 999px;
          color: #14532d;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          opacity: 0;
          transform: scale(0.6) translateY(10px);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1),
                      background 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .pt-chip.show {
          animation: ptChipPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes ptChipPop {
          0% { opacity: 0; transform: scale(0.5) translateY(10px); }
          70% { opacity: 1; transform: scale(1.08) translateY(0); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .pt-chip:hover {
          transform: translateY(-3px) scale(1.04);
          background: #16a34a;
          color: #ffffff;
          border-color: #16a34a;
          box-shadow: 0 10px 22px rgba(22,163,74,0.3);
        }

        .pt-chip-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #16a34a;
          transition: background 0.3s ease;
        }

        .pt-chip:hover .pt-chip-dot {
          background: #ffffff;
        }

        .pt-cta {
          display: inline-block;
          margin-top: 36px;
          background: #16a34a;
          color: #ffffff;
          border: 1px solid #16a34a;
          padding: 13px 30px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(22,163,74,0.22);
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(16px);
          cursor: default;       /* ← non‑clickable cursor */
        }

        .pt-cta.show {
          animation: ptFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.5s;
        }

        .pt-cta:hover {
          background: #128a3e;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(22,163,74,0.32);
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

        @media (prefers-reduced-motion: reduce) {
          .pt-head, .pt-p, .pt-quote, .pt-chip, .pt-cta, .pt-ring {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="pt-pattern" />
      <div className={`pt-ring ${inView ? "show" : ""}`} />
      <div className={`pt-dark-right ${inView ? "show" : ""}`} />
      <div className="pt-glow" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="pt-content">
          <div className={`pt-head ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Practical Training</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl pt-heading leading-tight mb-6">
              Practical Training and <span>Assessment</span>
            </h2>
          </div>

          <p className={`pt-p pt-p-body max-w-3xl ${inView ? "show" : ""}`} style={{ animationDelay: "0.12s" }}>
            One of the biggest concerns students have is practical confidence.
          </p>
          <p className={`pt-p pt-p-body-muted max-w-3xl mt-4 ${inView ? "show" : ""}`} style={{ animationDelay: "0.2s" }}>
            This course helps students understand the practical side of Hijama through structured
            guidance, case studies, technique awareness, safety standards, and assessment preparation.
          </p>

          <div className="pt-chip-row">
            {keywords.map((k, idx) => (
              <span
                key={k}
                className={`pt-chip ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.3 + idx * 0.06}s` }}
              >
                <span className="pt-chip-dot" />
                {k}
              </span>
            ))}
          </div>

          <div className={`pt-quote ${inView ? "show" : ""}`} style={{ animationDelay: "0.95s" }}>
            <div className="pt-quote-inner">
              <p>
                You are not left to figure everything out alone. The course is designed to guide you
                step by step.
              </p>
            </div>
          </div>

          {/* ─── Non‑clickable CTA ─── */}
          <div
            role="button"
            className={`pt-cta ${inView ? "show" : ""}`}
            onClick={(e) => e.preventDefault()}
          >
            View Practical Assessment Details →
          </div>
        </div>
      </div>
    </section>
  );
}