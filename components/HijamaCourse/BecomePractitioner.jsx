export default function BecomePractitioner({ inView }) {
  const topics = [
    "Foundations of Hijama",
    "Safety & Hygiene",
    "Client Screening",
    "Practical Application",
    "Aftercare",
    "Case Studies",
    "Professional Responsibility",
  ];

  return (
    <section className="bp-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .bp-section {
          position: relative;
          overflow: hidden;
          background: #07090f;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .bp-glow-a {
          position: absolute;
          top: -18%;
          right: -10%;
          width: 32rem;
          height: 32rem;
          background: radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          animation: bpDrift 11s ease-in-out infinite;
        }

        .bp-glow-b {
          position: absolute;
          bottom: -16%;
          left: -8%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        @keyframes bpDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-18px, 20px) scale(1.06); }
        }

        .bp-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 920px) {
          .bp-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }

        .bp-head {
          opacity: 0;
          transform: translateY(24px) scale(0.97);
        }

        .bp-head.show {
          animation: bpPopUp 0.75s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes bpPopUp {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .bp-p {
          opacity: 0;
          transform: translateY(16px);
        }

        .bp-p.show {
          animation: bpFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes bpFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .bp-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .bp-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .bp-body {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 1.7;
        }

        .bp-body-muted {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
        }

        .bp-note {
          position: relative;
          margin-top: 28px;
          padding: 1.5px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(74,222,128,0.55), rgba(34,197,94,0.05) 60%);
          opacity: 0;
          transform: translateY(20px);
        }

        .bp-note.show {
          animation: bpFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.35s;
        }

        .bp-note-inner {
          position: relative;
          display: flex;
          gap: 14px;
          background: rgba(9,13,21,0.92);
          backdrop-filter: blur(14px);
          border-radius: 18.5px;
          padding: 22px 24px;
          overflow: hidden;
        }

        .bp-note-glow {
          position: absolute;
          top: -50%;
          right: -10%;
          width: 12rem;
          height: 12rem;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 70%);
          pointer-events: none;
        }

        .bp-note-icon {
          position: relative;
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(34,197,94,0.16);
          border: 1px solid rgba(74,222,128,0.35);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
        }

        .bp-note-inner p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
        }

        .bp-note-inner .highlight {
          font-weight: 600;
          color: #4ade80;
        }

        .bp-card {
          position: relative;
          background: linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          padding: 32px 30px;
          opacity: 0;
          transform: translateY(28px) scale(0.94);
          box-shadow: 0 26px 56px rgba(0,0,0,0.5);
        }

        .bp-card.show {
          animation: bpCardIn 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.2s;
        }

        @keyframes bpCardIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .bp-card-top {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 24px;
        }

        .bp-ring-wrap {
          position: relative;
          width: 76px;
          height: 76px;
          flex-shrink: 0;
        }

        .bp-ring-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .bp-ring-track {
          fill: none;
          stroke: rgba(255,255,255,0.08);
          stroke-width: 6;
        }

        .bp-ring-fill {
          fill: none;
          stroke: #4ade80;
          stroke-width: 6;
          stroke-linecap: round;
          stroke-dasharray: 207;
          stroke-dashoffset: 207;
          filter: drop-shadow(0 0 6px rgba(74,222,128,0.6));
        }

        .bp-card.show .bp-ring-fill {
          animation: bpRingFill 1.4s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.5s;
        }

        @keyframes bpRingFill {
          to { stroke-dashoffset: 31; }
        }

        .bp-ring-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
        }

        .bp-card-title {
          font-family: 'Inter', sans-serif;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
        }

        .bp-card-sub {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.5);
          font-size: 12.5px;
          margin-top: 3px;
        }

        .bp-topics {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bp-topic {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transform: translateX(-14px);
        }

        .bp-topic:last-child {
          border-bottom: none;
        }

        .bp-topic.show {
          animation: bpTopicIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes bpTopicIn {
          to { opacity: 1; transform: translateX(0); }
        }

        .bp-topic-check {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: rgba(34,197,94,0.16);
          color: #4ade80;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease;
        }

        .bp-topic:hover .bp-topic-check {
          transform: scale(1.25);
          background: #4ade80;
          color: #07090f;
        }

        .bp-topic-label {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.78);
          font-size: 13.5px;
        }

        .bp-eyebrow {
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
          .bp-head, .bp-p, .bp-note, .bp-card, .bp-topic, .bp-glow-a {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="bp-glow-a" />
      <div className="bp-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="bp-grid">
          <div>
            <div className={`bp-head ${inView ? "show" : ""}`}>
              <span className="bp-eyebrow">Practitioner Path</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl bp-heading leading-tight mb-6">
                Can This Course Help You Become a <span>Hijama Practitioner</span>?
              </h2>
            </div>

            <p className={`bp-p bp-body max-w-3xl ${inView ? "show" : ""}`} style={{ animationDelay: "0.12s" }}>
              This course is designed to help students work toward practitioner-level understanding.
            </p>
            <p className={`bp-p bp-body-muted max-w-3xl mt-4 ${inView ? "show" : ""}`} style={{ animationDelay: "0.2s" }}>
              You will learn the foundations of Hijama, safety, hygiene, client screening, practical
              application, aftercare, case studies, and professional responsibility.
            </p>

            <div className={`bp-note ${inView ? "show" : ""}`}>
              <div className="bp-note-inner">
                <div className="bp-note-glow" />
                <span className="bp-note-icon">!</span>
                <p>
                  <span className="highlight">Important:</span> If your goal is to offer
                  Hijama to others, the course gives you a structured starting point. You should also
                  check local laws, insurance requirements, and practice rules before offering Hijama
                  professionally.
                </p>
              </div>
            </div>
          </div>

          <div className={`bp-card ${inView ? "show" : ""}`}>
            <div className="bp-card-top">
              <div className="bp-ring-wrap">
                <svg className="bp-ring-svg" viewBox="0 0 76 76">
                  <circle className="bp-ring-track" cx="38" cy="38" r="33" />
                  <circle className="bp-ring-fill" cx="38" cy="38" r="33" />
                </svg>
                <span className="bp-ring-label">85%</span>
              </div>
              <div>
                <div className="bp-card-title">Practitioner Readiness</div>
                <div className="bp-card-sub">What this course covers</div>
              </div>
            </div>

            <div className="bp-topics">
              {topics.map((t, idx) => (
                <div
                  key={t}
                  className={`bp-topic ${inView ? "show" : ""}`}
                  style={{ animationDelay: `${0.55 + idx * 0.08}s` }}
                >
                  <span className="bp-topic-check">✓</span>
                  <span className="bp-topic-label">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}