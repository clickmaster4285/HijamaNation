export default function CourseAtGlance({ features, inView }) {
  return (
    <section className="cag-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .cag-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #eefbf2 0%, #e3f8e9 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .cag-glow {
          position: absolute;
          top: -10%;
          right: -8%;
          width: 26rem;
          height: 26rem;
          background: radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cag-eyebrow-row {
          opacity: 0;
          transform: translateY(16px);
        }

        .cag-eyebrow-row.show {
          animation: cagFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes cagFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .cag-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #0f2e1a;
        }

        .cag-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #16a34a;
        }

        .cag-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        @media (min-width: 768px) {
          .cag-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .cag-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .cag-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          background: #ffffff;
          border: 1px solid rgba(22,163,74,0.12);
          border-radius: 14px;
          box-shadow: 0 4px 14px rgba(15,46,26,0.06);
          opacity: 0;
          transform: translateY(22px);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease,
                      background 0.35s ease;
          font-family: 'Inter', sans-serif;
        }

        .cag-card.show {
          animation: cagCardIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes cagCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .cag-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,46,26,0.14);
          border-color: rgba(22,163,74,0.4);
          background: #f6fdf8;
        }

        .cag-card-icon {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: rgba(22,163,74,0.1);
          color: #16a34a;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), background 0.35s ease;
        }

        .cag-card:hover .cag-card-icon {
          transform: scale(1.12) rotate(8deg);
          background: rgba(22,163,74,0.18);
        }

        .cag-card-label {
          color: #1c3826;
          font-size: 14.5px;
          font-weight: 500;
        }

        .cag-cta-row {
          margin-top: 40px;
          text-align: left;
          opacity: 0;
          transform: translateY(16px);
        }

        .cag-cta-row.show {
          animation: cagFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
        }

        .cag-cta {
          display: inline-block;
          background: #16a34a;
          color: #ffffff;
          border: 1px solid #16a34a;
          padding: 13px 30px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14.5px;
          font-family: 'Inter', sans-serif;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 24px rgba(22,163,74,0.25);
          cursor: default;        /* ← non‑clickable cursor */
        }

        .cag-cta:hover {
          background: #128a3e;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(22,163,74,0.35);
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
          .cag-eyebrow-row, .cag-card, .cag-cta-row {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="cag-glow" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`cag-eyebrow-row ${inView ? "show" : ""}`}>
          <span className="eyebrow eyebrow--green">At a Glance</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl cag-heading leading-tight mb-10">
            Course <span>at a Glance</span>
          </h2>
        </div>

        <div className="cag-grid">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`cag-card ${inView ? "show" : ""}`}
              style={{ animationDelay: `${0.1 + idx * 0.06}s` }}
            >
              <span className="cag-card-icon">✦</span>
              <span className="cag-card-label">{item}</span>
            </div>
          ))}
        </div>

        <div className={`cag-cta-row ${inView ? "show" : ""}`}>
          <div
            role="button"
            className="cag-cta"
            onClick={(e) => e.preventDefault()}
          >
            View Full Course Curriculum →
          </div>
        </div>
      </div>
    </section>
  );
}