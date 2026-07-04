export default function LearnFromHome({ inView }) {
  const perks = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Study at Your Own Pace"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: "Learn from Home"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      label: "International Students Welcome"
    },
  ];

  return (
    <section className="lfh-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .lfh-section {
          position: relative;
          overflow: hidden;
          background: #f0faf0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .lfh-glow {
          position: absolute;
          top: -10%;
          left: -6%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .lfh-glow-b {
          position: absolute;
          bottom: -16%;
          right: -8%;
          width: 22rem;
          height: 22rem;
          background: radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .lfh-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 920px) {
          .lfh-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        .lfh-image-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(34,197,94,0.3);
          box-shadow: 0 22px 50px rgba(0,0,0,0.12);
          opacity: 0;
          transform: translateY(26px) scale(0.96);
          height: 440px;
        }

        @media (max-width: 920px) {
          .lfh-image-wrap { height: 320px; }
        }

        .lfh-image-wrap.show {
          animation: lfhImgIn 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.2s;
        }

        @keyframes lfhImgIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .lfh-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .lfh-image-wrap:hover img {
          transform: scale(1.05);
        }

        .lfh-image-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(34,197,94,0.3);
          color: #1a3a1a;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 14px;
          border-radius: 999px;
        }

        .lfh-content {
          position: relative;
          z-index: 2;
        }

        .lfh-head {
          opacity: 0;
          transform: translateY(20px);
        }

        .lfh-head.show {
          animation: lfhFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes lfhFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .lfh-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #0f1f0f;
        }

        .lfh-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .lfh-p {
          opacity: 0;
          transform: translateY(16px);
          font-family: 'Inter', sans-serif;
          color: #2c3e2c;
          font-size: 16px;
          line-height: 1.7;
        }

        .lfh-p.show {
          animation: lfhFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        .lfh-perks {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lfh-perk {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(34,197,94,0.15);
          border-radius: 14px;
          opacity: 0;
          transform: translateX(-18px);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease,
                      background 0.35s ease,
                      box-shadow 0.35s ease;
          max-width: 420px;
        }

        .lfh-perk.show {
          animation: lfhPerkIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes lfhPerkIn {
          to { opacity: 1; transform: translateX(0); }
        }

        .lfh-perk:hover {
          transform: translateX(6px);
          border-color: rgba(34,197,94,0.5);
          background: rgba(255,255,255,0.85);
          box-shadow: 0 14px 30px rgba(0,0,0,0.08);
        }

        .lfh-perk-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }

        .lfh-perk:hover .lfh-perk-icon {
          transform: scale(1.12) rotate(-6deg);
        }

        .lfh-perk-label {
          font-family: 'Inter', sans-serif;
          color: #1a2e1a;
          font-size: 14.5px;
          font-weight: 500;
        }

        .lfh-eyebrow {
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
          .lfh-head, .lfh-p, .lfh-perk {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="lfh-glow" />
      <div className="lfh-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="lfh-grid">
          <div className="lfh-content">
            <div className={`lfh-head ${inView ? "show" : ""}`}>
              <span className="lfh-eyebrow">Flexible Learning</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl lfh-heading leading-tight mb-6">
                Learn Hijama from Home <span>at Your Own Pace</span>
              </h2>
            </div>

            <p className={`lfh-p ${inView ? "show" : ""}`} style={{ animationDelay: "0.12s" }}>
              This online Hijama course is designed for students who need flexibility.
            </p>
            <p className={`lfh-p ${inView ? "show" : ""}`} style={{ animationDelay: "0.2s" }}>
              You can study around your family, work, business, or personal routine. This makes the
              course suitable for mothers, working students, adult learners, international students,
              and people who cannot easily attend regular in-person classes.
            </p>
            <p className={`lfh-p ${inView ? "show" : ""}`} style={{ animationDelay: "0.28s" }}>
              The flexible structure allows students to move through the learning pathway in a way
              that fits their life while still following an organised training programme.
            </p>

            <div className="lfh-perks">
              {perks.map((p, idx) => (
                <div
                  key={p.label}
                  className={`lfh-perk ${inView ? "show" : ""}`}
                  style={{ animationDelay: `${0.4 + idx * 0.12}s` }}
                >
                  <span className="lfh-perk-icon">{p.icon}</span>
                  <span className="lfh-perk-label">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`lfh-image-wrap ${inView ? "show" : ""}`}>
            <img src="/images/home.jpg" alt="Student learning Hijama from home" loading="lazy" />
            <span className="lfh-image-tag">Flexible Home Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}