export default function WhyChoose({ reasons, inView }) {
  return (
    <section className="wc-section bg-black py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .wc-section {
          position: relative;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .wc-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: inline-block;
          color: #16a34a;
          margin-bottom: 8px;
        }

        .wc-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .wc-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .wc-sub {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
          max-width: 640px;
          margin-bottom: 40px;
        }

        .wc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          margin-top: 8px;
        }

        @media (max-width: 1100px) {
          .wc-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 560px) {
          .wc-grid { grid-template-columns: 1fr; }
        }

        .wc-flip {
          perspective: 1400px;
          height: 240px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .wc-flip.active {
          opacity: 1;
          transform: translateY(0);
        }

        .wc-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }

        .wc-flip:hover .wc-flip-inner,
        .wc-flip:focus-within .wc-flip-inner {
          transform: rotateY(180deg);
        }

        .wc-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 18px;
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
        }

        .wc-front {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.08);
          justify-content: space-between;
        }

        .wc-flip:hover .wc-front,
        .wc-flip:focus-within .wc-front {
          border-color: rgba(34,197,94,0.35);
        }

        .wc-index {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          letter-spacing: 0.08em;
          color: rgba(74,222,128,0.7);
        }

        .wc-front-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4ade80;
          font-size: 20px;
          margin: 14px 0 auto;
        }

        .wc-front h3 {
          font-family: 'Playfair Display', Georgia, serif;
          color: #fff;
          font-size: 18px;
          line-height: 1.3;
          margin: 0;
        }

        .wc-flip-hint {
          margin-top: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .wc-flip-hint svg {
          width: 12px;
          height: 12px;
          transition: transform 0.3s ease;
        }

        .wc-back {
          background: linear-gradient(160deg, #14532d 0%, #052e16 100%);
          border: 1px solid rgba(34,197,94,0.4);
          transform: rotateY(180deg);
          justify-content: center;
        }

        .wc-back h4 {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #86efac;
          margin: 0 0 10px;
        }

        .wc-back p {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.88);
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .wc-flip, .wc-flip-inner {
            transition: none !important;
          }
          .wc-flip { opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`reveal ${inView ? "show" : ""}`}>
          <span className="wc-eyebrow">Why Choose</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl wc-heading leading-tight mb-4">
            Why Choose This <span>Hijama Course</span>?
          </h2>
          <p className="wc-sub">
            Students choose this Hijama course because it is designed to provide a clear, supported,
            and responsible learning experience.
          </p>

          <div className="wc-grid">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className={`wc-flip ${inView ? "active" : ""}`}
                style={{ transitionDelay: `${0.08 * idx}s` }}
                tabIndex={0}
              >
                <div className="wc-flip-inner">
                  {/* Front */}
                  <div className="wc-face wc-front">
                    <span className="wc-index">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="wc-front-icon">✦</span>
                    <h3>{item.title}</h3>
                    <span className="wc-flip-hint">
                      Hover to read
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>

                  {/* Back */}
                  <div className="wc-face wc-back">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}