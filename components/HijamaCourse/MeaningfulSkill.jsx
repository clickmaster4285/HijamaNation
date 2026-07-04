export default function MeaningfulSkill({ inView }) {
  const items = [
    "Some want to help their family.",
    "Some want to serve their community.",
    "Some want to build a halal income path.",
    "Some want to add Hijama to an existing wellness or healthcare service.",
    "Some want to revive and preserve a Sunnah-based practice.",
  ];

  return (
    <section className="ms-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .ms-section {
          position: relative;
          overflow: hidden;
          background: #f0faf0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .ms-bg-img {
          position: absolute;
          inset: 0;
          background-image: url(/skill.png);
          background-size: cover;
          background-position: center;
          opacity: 0.9;
          transform: scale(1.06);
          z-index: 0;
        }

        .ms-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 0%, rgba(240,250,240,0.15) 0%, rgba(240,250,240,0.3) 62%),
            linear-gradient(180deg, rgba(240,250,240,0.2) 0%, rgba(240,250,240,0.1) 28%, rgba(240,250,240,0.3) 100%);
          z-index: 1;
        }

        .ms-glow-a {
          position: absolute;
          top: -14%;
          right: -8%;
          width: 28rem;
          height: 28rem;
          background: radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .ms-glow-b {
          position: absolute;
          bottom: -18%;
          left: -10%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .ms-content {
          position: relative;
          z-index: 2;
        }

        .ms-head {
          opacity: 0;
          transform: translateY(20px);
        }

        .ms-head.show {
          animation: msFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes msFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .ms-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #0f1f0f;
        }

        .ms-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .ms-lead {
          opacity: 0;
          transform: translateY(16px);
          font-family: 'Inter', sans-serif;
          color: #1a2e1a;
          font-size: 16px;
          line-height: 1.7;
        }

        .ms-lead.show {
          animation: msFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.12s;
        }

        .ms-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 28px;
        }

        @media (min-width: 700px) {
          .ms-bento { grid-template-columns: repeat(2, 1fr); }
        }

        .ms-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 22px 22px;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(34,197,94,0.15);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px) scale(0.93);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease,
                      background 0.35s ease;
        }

        .ms-card.show {
          animation: msPopIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes msPopIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.85); }
          70% { opacity: 1; transform: translateY(-2px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ms-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, rgba(34,197,94,0.12), transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .ms-card:hover::before {
          opacity: 1;
        }

        .ms-card:hover {
          transform: translateY(-6px);
          border-color: rgba(34,197,94,0.5);
          box-shadow: 0 18px 36px rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.92);
        }

        .ms-card-span {
          grid-column: span 1;
        }

        @media (min-width: 700px) {
          .ms-card-span-2 { grid-column: span 2; }
        }

        .ms-card-icon {
          position: relative;
          flex-shrink: 0;
          color: #22c55e;
          font-size: 18px;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }

        .ms-card:hover .ms-card-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .ms-card-label {
          position: relative;
          font-family: 'Inter', sans-serif;
          color: #1a2e1a;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.55;
        }

        .ms-note {
          position: relative;
          margin-top: 30px;
          padding: 1.5px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(34,197,94,0.4), rgba(34,197,94,0.05) 55%, rgba(34,197,94,0.2));
          opacity: 0;
          transform: translateY(24px);
        }

        .ms-note.show {
          animation: msFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.5s;
        }

        .ms-note-inner {
          position: relative;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(16px);
          border-radius: 20.5px;
          padding: 32px 36px;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .ms-note-inner { padding: 24px 22px; }
        }

        .ms-note-glow {
          position: absolute;
          bottom: -40%;
          left: -10%;
          width: 16rem;
          height: 16rem;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .ms-note-inner p {
          font-family: 'Inter', sans-serif;
          color: #1a2e1a;
          font-size: 16px;
          line-height: 1.7;
        }

        .ms-note-inner p:last-of-type {
          color: #2c3e2c;
        }

        .ms-eyebrow {
          font-family: 'Inter', sans-serif;
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #22c55e;
          background: rgba(34,197,94,0.12);
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ms-head, .ms-lead, .ms-card, .ms-note {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="ms-bg-img" />
      <div className="ms-overlay" />
      <div className="ms-glow-a" />
      <div className="ms-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`ms-content reveal ${inView ? "show" : ""}`}>
          <div className={`ms-head ${inView ? "show" : ""}`}>
            <span className="ms-eyebrow">Purpose</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl ms-heading leading-tight mb-6">
              Build a Meaningful Skill With <span>Purpose</span>
            </h2>
          </div>

          <p className={`ms-lead max-w-3xl ${inView ? "show" : ""}`}>
            Many students choose Hijama because they want to do something meaningful.
          </p>

          <div className="ms-bento">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`ms-card ${idx === items.length - 1 ? "ms-card-span-2" : ""} ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <span className="ms-card-icon">✦</span>
                <span className="ms-card-label">{item}</span>
              </div>
            ))}
          </div>

          <div className={`ms-note ${inView ? "show" : ""}`}>
            <div className="ms-note-inner">
              <div className="ms-note-glow" />
              <p>
                This course helps turn your interest into a structured learning journey.
              </p>
              <p className="mt-3">
                You do not need to feel fully ready before starting. You need the right guidance,
                the right support, and the willingness to learn properly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}