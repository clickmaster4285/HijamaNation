const benefits = [
  "Learn a meaningful Sunnah-based skill",
  "Build confidence",
  "Understand safe practice",
  "Work toward certification",
];

export default function FinalCTA({ inView }) {
  return (
    <section className="hn-section cta-section bg-[#0a0f1a] relative overflow-hidden">
      <style>{`
        .cta-section {
          padding: 100px 24px;
        }

        @media (max-width: 768px) {
          .cta-section { padding: 70px 20px; }
        }

        /* ── Background layers ───────────────────────────────────────────── */
        .cta-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(74,222,128,0.15) 0.8px, transparent 1px);
          background-size: 24px 24px;
          mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 70%);
          z-index: 0;
        }

        .cta-glow {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 700px;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 65%);
          z-index: 0;
          pointer-events: none;
          animation: cta-pulse 6s ease-in-out infinite;
        }

        @keyframes cta-pulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.08); }
        }

        /* ── Card ────────────────────────────────────────────────────────── */
        .cta-card {
          position: relative;
          z-index: 1;
          max-width: 880px;
          margin: 0 auto;
          background: linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 56px 48px;
          text-align: center;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
          opacity: 0;
          transform: translateY(30px) scale(0.98);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .cta-card.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        @media (max-width: 640px) {
          .cta-card { padding: 40px 24px; border-radius: 22px; }
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .cta-tag-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #22c55e);
        }

        .cta-tag-line:last-child {
          background: linear-gradient(90deg, #22c55e, transparent);
        }

        .cta-tag-label {
          color: #4ade80;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cta-heading {
          font-family: Georgia, serif;
          color: #fff;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .cta-heading .accent {
          color: #22c55e;
        }

        .cta-lead {
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto 32px;
        }

        /* ── Checklist ───────────────────────────────────────────────────── */
        .cta-checklist {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 20px;
          max-width: 560px;
          margin: 0 auto 14px;
          text-align: left;
        }

        @media (max-width: 560px) {
          .cta-checklist { grid-template-columns: 1fr; }
        }

        .cta-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease, background 0.3s ease;
        }

        .cta-check-item.show {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-check-item:hover {
          border-color: rgba(34,197,94,0.35);
          background: rgba(34,197,94,0.06);
        }

        .cta-check-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(34,197,94,0.18);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }

        .cta-check-icon svg {
          width: 11px;
          height: 11px;
        }

        .cta-check-text {
          color: rgba(255,255,255,0.85);
          font-size: 14.5px;
          line-height: 1.5;
        }

        .cta-highlight {
          color: #4ade80;
          font-weight: 600;
          font-size: 15px;
          margin: 22px 0 34px;
        }

        /* ── Buttons ─────────────────────────────────────────────────────── */
        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #22c55e, #15803d);
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 38px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 12px 30px rgba(34,197,94,0.32);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          cursor: default;       /* non‑clickable cursor */
        }

        .cta-btn-primary:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 16px 40px rgba(34,197,94,0.48);
        }

        .cta-btn-primary svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .cta-btn-primary:hover svg {
          transform: translateX(3px);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 38px;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: default;       /* non‑clickable cursor */
        }

        .cta-btn-secondary:hover {
          border-color: rgba(74,222,128,0.6);
          color: #4ade80;
          background: rgba(34,197,94,0.08);
        }

        /* ── Trust row ───────────────────────────────────────────────────── */
        .cta-trust {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }

        .cta-trust-item svg {
          width: 14px;
          height: 14px;
          color: #4ade80;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-card, .cta-check-item, .cta-glow {
            transition: none !important;
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="cta-grid-pattern" />
      <div className="cta-glow" />

      <div className={`cta-card ${inView ? "show" : ""}`}>
        <div className="cta-tag">
          <span className="cta-tag-line" />
          <span className="cta-tag-label">Start Today</span>
          <span className="cta-tag-line" />
        </div>

        <h2 className="cta-heading">
          Start Your Hijama Learning Journey <span className="accent">Today</span>
        </h2>

        <p className="cta-lead">
          If you want to learn Hijama in a structured, supported, and responsible way, this
          Online Hijama Certification Course can help you take the next step.
        </p>

        <div className="cta-checklist">
          {benefits.map((text, idx) => (
            <div
              key={idx}
              className={`cta-check-item ${inView ? "show" : ""}`}
              style={{ transitionDelay: `${0.1 + idx * 0.08}s` }}
            >
              <span className="cta-check-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="cta-check-text">{text}</span>
            </div>
          ))}
        </div>

        <p className="cta-highlight">Start your journey as a Hijama student today.</p>

        <div className="cta-buttons">
          <div
            role="button"
            className="cta-btn-primary"
            onClick={(e) => e.preventDefault()}
          >
            Apply Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
          <div
            role="button"
            className="cta-btn-secondary"
            onClick={(e) => e.preventDefault()}
          >
            View Course Details
          </div>
        </div>

        <div className="cta-trust">
          <span className="cta-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
            Since 2011
          </span>
          <span className="cta-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Online Certification
          </span>
          <span className="cta-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12.5 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            4,000+ Trained
          </span>
        </div>
      </div>
    </section>
  );
}