export default function WhoCanJoin({ audiences, inView }) {
  return (
    <section className="wcj-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .wcj-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #f3fbf6 0%, #e9f8ef 50%, #f0fbf4 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .wcj-glow-a {
          position: absolute;
          top: -14%;
          left: -8%;
          width: 26rem;
          height: 26rem;
          background: radial-gradient(circle, rgba(22,163,74,0.14) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .wcj-glow-b {
          position: absolute;
          bottom: -16%;
          right: -8%;
          width: 22rem;
          height: 22rem;
          background: radial-gradient(circle, rgba(22,163,74,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .wcj-content {
          position: relative;
          z-index: 1;
        }

        .wcj-head {
          opacity: 0;
          transform: translateY(20px);
        }

        .wcj-head.show {
          animation: wcjFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes wcjFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .wcj-sub {
          opacity: 0;
          transform: translateY(14px);
        }

        .wcj-sub.show {
          animation: wcjFadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.12s;
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

        .wcj-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #0f2e1a;
        }

        .wcj-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #16a34a;
        }

        .wcj-sub-text {
          font-family: 'Inter', sans-serif;
          color: rgba(28,56,38,0.7);
          font-size: 16px;
          line-height: 1.7;
        }

        .wcj-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 14px;
        }

        @media (min-width: 640px) {
          .wcj-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .wcj-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .wcj-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          padding: 22px 18px;
          background: #ffffff;
          border: 1px solid rgba(22,163,74,0.12);
          border-radius: 16px;
          box-shadow: 0 4px 14px rgba(15,46,26,0.06);
          opacity: 0;
          transform: scale(0.7);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease,
                      background 0.35s ease;
        }

        .wcj-card.show {
          animation: wcjBlowout 0.65s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes wcjBlowout {
          0% { opacity: 0; transform: scale(0.55) rotate(-3deg); }
          60% { opacity: 1; transform: scale(1.06) rotate(0.5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .wcj-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 18px 34px rgba(15,46,26,0.14);
          border-color: rgba(22,163,74,0.4);
          background: #f6fdf8;
        }

        .wcj-card-icon {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          background: rgba(22,163,74,0.1);
          color: #16a34a;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease;
        }

        .wcj-card:hover .wcj-card-icon {
          transform: scale(1.18) rotate(10deg);
          background: #16a34a;
          color: #ffffff;
        }

        .wcj-card-label {
          font-family: 'Inter', sans-serif;
          color: #1c3826;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
        }

        .wcj-note {
          position: relative;
          margin-top: 32px;
          padding: 1.5px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(22,163,74,0.45), rgba(22,163,74,0.05) 60%);
          opacity: 0;
          transform: translateY(20px);
        }

        .wcj-note.show {
          animation: wcjFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.4s;
        }

        .wcj-note-inner {
          background: #ffffff;
          border-radius: 16.5px;
          padding: 22px 26px;
        }

        .wcj-note-inner p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.7;
        }

        .wcj-note-inner .highlight {
          font-weight: 600;
          color: #16a34a;
        }

        .wcj-note-inner .muted {
          color: rgba(28,56,38,0.65);
        }

        @media (prefers-reduced-motion: reduce) {
          .wcj-head, .wcj-sub, .wcj-card, .wcj-note {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="wcj-glow-a" />
      <div className="wcj-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`wcj-content reveal ${inView ? "show" : ""}`}>
          <div className={`wcj-head ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Who Can Join</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl wcj-heading leading-tight mb-6">
              Who Can Join This <span>Hijama Course</span>?
            </h2>
          </div>

          <p className={`wcj-sub wcj-sub-text max-w-3xl mb-6 ${inView ? "show" : ""}`}>
            This course is suitable for:
          </p>

          <div className="wcj-grid">
            {audiences.map((item, idx) => (
              <div
                key={idx}
                className={`wcj-card ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.18 + idx * 0.08}s` }}
              >
                <span className="wcj-card-icon">✓</span>
                <span className="wcj-card-label">{item}</span>
              </div>
            ))}
          </div>

          <div className={`wcj-note ${inView ? "show" : ""}`}>
            <div className="wcj-note-inner">
              <p>
                <span className="highlight">Note:</span> No medical background is required
                to start. The course is designed to guide students from the basics.
              </p>
              <p className="muted mt-2">
                If a younger student wants to join, they should contact the team first to confirm eligibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}