export default function StructuredCourse({ inView }) {
  const steps = [
    "Foundations of Hijama",
    "Safety & Hygiene Standards",
    "Client Care & Screening",
    "Practical Understanding",
    "Case Studies",
    "Professional Standards",
  ];

  return (
    <section className="sc-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .sc-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #eafbf1 0%, #def6e8 50%, #e7f9ee 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .sc-glow-a {
          position: absolute;
          top: -16%;
          right: -8%;
          width: 30rem;
          height: 30rem;
          background: radial-gradient(circle, rgba(22,163,74,0.16) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .sc-glow-b {
          position: absolute;
          bottom: -18%;
          left: -10%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .sc-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 920px) {
          .sc-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        .sc-text {
          opacity: 0;
          transform: translateY(20px);
        }

        .sc-text.show {
          animation: scFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes scFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .sc-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #0f2e1a;
        }

        .sc-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #16a34a;
        }

        .sc-body {
          font-family: 'Inter', sans-serif;
          color: rgba(28,56,38,0.9);
          font-size: 16px;
          line-height: 1.7;
        }

        .sc-body-muted {
          font-family: 'Inter', sans-serif;
          color: rgba(28,56,38,0.75);
          font-size: 16px;
          line-height: 1.7;
        }

        .sc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          background: #16a34a;
          color: #ffffff;
          border: 1px solid #16a34a;
          padding: 13px 30px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 24px rgba(22,163,74,0.22);
          cursor: default;       /* ← non‑clickable cursor */
        }

        .sc-cta:hover {
          background: #128a3e;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(22,163,74,0.32);
        }

        .sc-panel {
          position: relative;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(22,163,74,0.18);
          border-radius: 20px;
          padding: 30px 28px;
          box-shadow: 0 24px 50px rgba(15,46,26,0.1);
          opacity: 0;
          transform: translateY(24px) scale(0.98);
        }

        .sc-panel.show {
          animation: scPanelIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
        }

        @keyframes scPanelIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .sc-panel-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 18px;
          display: block;
        }

        .sc-step {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 0;
          opacity: 0;
          transform: translateX(-12px);
        }

        .sc-step.show {
          animation: scStepIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes scStepIn {
          to { opacity: 1; transform: translateX(0); }
        }

        .sc-step:not(:last-child) {
          border-bottom: 1px solid rgba(22,163,74,0.12);
        }

        .sc-step-num {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          background: rgba(22,163,74,0.1);
          color: #16a34a;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
        }

        .sc-step:hover .sc-step-num {
          transform: scale(1.12);
          background: #16a34a;
          color: #ffffff;
        }

        .sc-step-label {
          font-family: 'Inter', sans-serif;
          color: #1c3826;
          font-size: 14.5px;
          font-weight: 500;
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
          .sc-text, .sc-panel, .sc-step {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="sc-glow-a" />
      <div className="sc-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="sc-grid">
          <div className={`sc-text ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Structured Learning</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl sc-heading leading-tight mb-6">
              A Structured Hijama Course That <span>Guides You Step by Step</span>
            </h2>
            <p className="sc-body max-w-3xl">
              Our Online Hijama Certification Course gives students a clear and organised way to learn.
            </p>
            <p className="sc-body-muted max-w-3xl mt-4">
              Instead of watching scattered videos or trying to understand Hijama alone, you follow a
              structured course that explains the foundations, safety, hygiene, client care, practical
              understanding, case studies, and professional standards step by step.
            </p>
            <p className="sc-body-muted max-w-3xl mt-4">
              You do not need previous Hijama experience to begin. The course is beginner-friendly and
              built for students who want to learn seriously and responsibly.
            </p>

            {/* ─── Non‑clickable button with hover animations ─── */}
            <div
              role="button"
              className="sc-cta"
              onClick={(e) => e.preventDefault()}
            >
              See How the Course Works →
            </div>
          </div>

          <div className={`sc-panel ${inView ? "show" : ""}`}>
            <span className="sc-panel-label">The Learning Path</span>
            {steps.map((s, idx) => (
              <div
                key={s}
                className={`sc-step ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.3 + idx * 0.08}s` }}
              >
                <span className="sc-step-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="sc-step-label">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}