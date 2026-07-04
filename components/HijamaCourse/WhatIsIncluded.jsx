const PARTICLE_COUNT = 8;
const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  const angle = (i / PARTICLE_COUNT) * 2 * Math.PI;
  const distance = 46;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  return { x, y };
});

export default function WhatIsIncluded({ inclusions, inView }) {
  return (
    <section className="wi-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .wi-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 80% 15%, rgba(34,197,94,0.14) 0%, transparent 55%),
            radial-gradient(circle at 10% 85%, rgba(16,185,129,0.10) 0%, transparent 50%),
            linear-gradient(180deg, #050a08 0%, #071410 45%, #050907 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* ── Forest green pattern layers ─────────────────────────────────── */
        .wi-pattern-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#22c55e 0.9px, transparent 1px);
          background-size: 26px 26px;
          opacity: 0.10;
          z-index: 0;
          pointer-events: none;
        }

        .wi-pattern-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(115deg, rgba(34,197,94,0.06) 0%, transparent 35%),
            linear-gradient(295deg, rgba(16,185,129,0.05) 0%, transparent 40%);
          z-index: 0;
          pointer-events: none;
        }

        .wi-pattern-leaf {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(
              60deg,
              rgba(34,197,94,0.035) 0px,
              rgba(34,197,94,0.035) 1px,
              transparent 1px,
              transparent 34px
            ),
            repeating-linear-gradient(
              -60deg,
              rgba(34,197,94,0.035) 0px,
              rgba(34,197,94,0.035) 1px,
              transparent 1px,
              transparent 34px
            );
          z-index: 0;
          pointer-events: none;
        }

        .wi-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 40%, transparent 30%, rgba(0,0,0,0.55) 100%);
          z-index: 0;
          pointer-events: none;
        }

        /* ── Bomb burst effect (background) ────────────────────────────── */
        .wi-burst {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(34,197,94,0.22) 0%, rgba(16,185,129,0.08) 40%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          pointer-events: none;
          transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1),
                      height 1.2s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 1.2s ease;
          opacity: 0;
        }

        .wi-burst.active {
          width: 120vw;
          height: 120vw;
          opacity: 1;
        }

        /* ── Content ──────────────────────────────────────────────────────── */
        .wi-content {
          position: relative;
          z-index: 1;
        }

        .wi-header {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .wi-header.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .wi-eyebrow {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4ade80;
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.25);
          padding: 4px 16px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .wi-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #fff;
          line-height: 1.2;
        }

        .wi-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .wi-sub {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
          max-width: 640px;
        }

        .wi-sub-muted {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.6);
          font-size: 14px;
          line-height: 1.7;
          max-width: 640px;
          margin-top: 8px;
        }

        /* ── Grid: 5 per row ──────────────────────────────────────────────── */
        .wi-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          margin-top: 40px;
        }

        @media (max-width: 1200px) {
          .wi-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .wi-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }

        @media (max-width: 480px) {
          .wi-grid { grid-template-columns: 1fr; }
        }

        /* ── Card (bomb pop) ────────────────────────────────────────────── */
        .wi-card {
          position: relative;
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 22px 18px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          opacity: 0;
          transform: scale(0.4) rotate(-14deg) translateY(30px);
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
                      opacity 0.5s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease,
                      background 0.3s ease;
          will-change: transform, opacity;
        }

        .wi-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: radial-gradient(circle at 30% 20%, rgba(34,197,94,0.4), transparent 60%);
          opacity: 0;
          pointer-events: none;
        }

        .wi-card.active {
          opacity: 1;
          transform: scale(1) rotate(0deg) translateY(0);
        }

        .wi-card.active::before {
          animation: wi-pop-flash 0.6s ease-out forwards;
        }

        @keyframes wi-pop-flash {
          0% { opacity: 0.95; }
          100% { opacity: 0; }
        }

        .wi-card-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          margin: -10px 0 0 -10px;
          border-radius: 50%;
          border: 2px solid rgba(34,197,94,0.7);
          opacity: 0;
          pointer-events: none;
          z-index: 2;
        }

        .wi-card.active .wi-card-ring {
          animation: wi-ring-expand 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes wi-ring-expand {
          0% { width: 20px; height: 20px; margin: -10px 0 0 -10px; opacity: 0.9; border-width: 2px; }
          100% { width: 220px; height: 220px; margin: -110px 0 0 -110px; opacity: 0; border-width: 0.5px; }
        }

        .wi-card-sparks {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          pointer-events: none;
          z-index: 2;
        }

        .wi-spark {
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px 1px rgba(74,222,128,0.8);
          opacity: 0;
          transform: translate(0, 0) scale(1);
        }

        .wi-card.active .wi-spark {
          animation: wi-spark-fly 0.6s ease-out forwards;
        }

        @keyframes wi-spark-fly {
          0% { opacity: 1; transform: translate(0, 0) scale(1); }
          100% { opacity: 0; transform: translate(var(--sx), var(--sy)) scale(0.2); }
        }

        .wi-card:hover {
          transform: translateY(-6px) scale(1.03);
          border-color: rgba(34,197,94,0.45);
          box-shadow: 0 20px 45px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,197,94,0.15);
          background: rgba(34,197,94,0.09);
        }

        .wi-card-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          color: #4ade80;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 3;
        }

        .wi-card:hover .wi-card-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .wi-card-text {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          line-height: 1.5;
          position: relative;
          z-index: 3;
        }

        /* ── CTA button (left aligned) ──────────────────────────────────── */
        .wi-cta-wrap {
          margin-top: 48px;
          text-align: left;
        }

        .wi-cta {
          display: inline-block;
          padding: 14px 40px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          color: #fff;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          box-shadow: 0 8px 32px rgba(34,197,94,0.3);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease;
          border: none;
          cursor: default;       /* ← non‑clickable cursor */
        }

        .wi-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(34,197,94,0.5);
        }

        /* ── Reduced motion ──────────────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .wi-burst.active {
            transition: none;
            width: 0;
            height: 0;
            opacity: 0;
          }
          .wi-header,
          .wi-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .wi-card.active::before,
          .wi-card.active .wi-card-ring,
          .wi-card.active .wi-spark {
            animation: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>

      {/* ── Background layers ───────────────────────────────────────────── */}
      <div className="wi-pattern-dots" />
      <div className="wi-pattern-lines" />
      <div className="wi-pattern-leaf" />
      <div className="wi-vignette" />

      {/* ── Bomb burst overlay ───────────────────────────────────────────── */}
      <div className={`wi-burst ${inView ? "active" : ""}`} />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="wi-content">
          <div className={`wi-header ${inView ? "active" : ""}`}>
            <span className="wi-eyebrow">💥 Included</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl wi-heading leading-tight mb-4">
              What Is Included in the <span>Course</span>?
            </h2>
            <p className="wi-sub">
              The course includes structured learning and support to help students understand Hijama properly.
            </p>
            <p className="wi-sub-muted">
              Course features may include:
            </p>
          </div>

          <div className="wi-grid">
            {inclusions.map((item, idx) => (
              <div
                key={idx}
                className={`wi-card ${inView ? "active" : ""}`}
                style={{ transitionDelay: `${0.06 * (idx + 1)}s` }}
              >
                <span className="wi-card-ring" style={{ transitionDelay: `${0.06 * (idx + 1)}s` }} />
                <span className="wi-card-sparks">
                  {particles.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className="wi-spark"
                      style={{
                        "--sx": `${p.x}px`,
                        "--sy": `${p.y}px`,
                        animationDelay: `${0.06 * (idx + 1)}s`,
                      }}
                    />
                  ))}
                </span>
                <span className="wi-card-icon">✦</span>
                <span className="wi-card-text">{item}</span>
              </div>
            ))}
          </div>

          {/* ─── Non‑clickable CTA ─── */}
          <div className="wi-cta-wrap">
            <div
              role="button"
              className="wi-cta"
              onClick={(e) => e.preventDefault()}
            >
              See What Is Included →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}