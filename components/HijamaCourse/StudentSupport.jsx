export default function StudentSupport({ inView }) {
  const journey = [
    { label: "Understand the Lessons", sub: "Clear guidance every step" },
    { label: "Complete Learning Steps", sub: "Stay on track, stay supported" },
    { label: "Prepare for Assessment", sub: "Build real confidence" },
    { label: "Move Forward Certified", sub: "Ready, supported, responsible" },
  ];

  return (
    <section className="ss-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .ss-section {
          position: relative;
          overflow: hidden;
          background: #07090f;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .ss-glow-a {
          position: absolute;
          top: -18%;
          left: -10%;
          width: 30rem;
          height: 30rem;
          background: radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          animation: ssDrift 10s ease-in-out infinite;
        }

        .ss-glow-b {
          position: absolute;
          bottom: -16%;
          right: -8%;
          width: 26rem;
          height: 26rem;
          background: radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          animation: ssDrift 12s ease-in-out infinite reverse;
        }

        @keyframes ssDrift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px, -16px) scale(1.07); }
        }

        .ss-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 920px) {
          .ss-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }

        .ss-head {
          opacity: 0;
          transform: translateY(24px) scale(0.97);
        }

        .ss-head.show {
          animation: ssPopUp 0.75s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        @keyframes ssPopUp {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .ss-p {
          opacity: 0;
          transform: translateY(16px);
        }

        .ss-p.show {
          animation: ssFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes ssFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .ss-quote {
          position: relative;
          margin-top: 30px;
          padding: 1.5px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(74,222,128,0.6), rgba(34,197,94,0.05) 55%, rgba(74,222,128,0.25));
          opacity: 0;
          transform: translateY(20px) scale(0.96);
          max-width: 560px;
        }

        .ss-quote.show {
          animation: ssPopUp 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
          animation-delay: 0.35s;
        }

        .ss-quote-inner {
          position: relative;
          background: rgba(9,13,21,0.92);
          backdrop-filter: blur(14px);
          border-radius: 18.5px;
          padding: 22px 26px;
          overflow: hidden;
        }

        .ss-quote-mark {
          position: absolute;
          top: -14px;
          left: 14px;
          font-family: Georgia, serif;
          font-size: 70px;
          color: rgba(74,222,128,0.16);
          pointer-events: none;
        }

        .ss-quote-inner p {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
        }

        .ss-cta {
          display: inline-block;
          margin-top: 32px;
          border: 1px solid rgba(34,197,94,0.4);
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          padding: 13px 30px;
          border-radius: 999px;
          font-weight: 500;
          font-size: 14.5px;
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(16px);
          cursor: default;       /* ← non‑clickable cursor */
        }

        .ss-cta.show {
          animation: ssFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.55s;
        }

        .ss-cta:hover {
          border-color: #22c55e;
          background: #16a34a;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .ss-path {
          position: relative;
          padding-left: 6px;
        }

        .ss-path-line {
          position: absolute;
          top: 18px;
          bottom: 18px;
          left: 23px;
          width: 2px;
          background: rgba(255,255,255,0.08);
          z-index: 0;
        }

        .ss-path-line-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background: linear-gradient(180deg, #4ade80, rgba(74,222,128,0.2));
          box-shadow: 0 0 14px rgba(74,222,128,0.6);
        }

        .ss-path.show .ss-path-line-fill {
          animation: ssLineGrow 1.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.2s;
        }

        @keyframes ssLineGrow {
          to { height: 100%; }
        }

        .ss-node {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 14px 0;
          opacity: 0;
          transform: translateX(-16px);
        }

        .ss-node.show {
          animation: ssNodeIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes ssNodeIn {
          to { opacity: 1; transform: translateX(0); }
        }

        .ss-node-dot {
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: rgba(7,9,15,0.9);
          border: 2px solid rgba(74,222,128,0.4);
          color: #4ade80;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .ss-node.show .ss-node-dot {
          animation: ssDotPulse 2.6s ease-in-out infinite;
          animation-delay: 1.2s;
        }

        @keyframes ssDotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.35); }
          50% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
        }

        .ss-node:hover .ss-node-dot {
          transform: scale(1.15);
          border-color: #4ade80;
        }

        .ss-node-label {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.9);
          font-size: 15px;
          font-weight: 600;
        }

        .ss-node-sub {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.5);
          font-size: 12.5px;
          margin-top: 2px;
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

        .ss-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .ss-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .ss-body {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
        }

        @media (prefers-reduced-motion: reduce) {
          .ss-head, .ss-p, .ss-quote, .ss-cta, .ss-node, .ss-path-line-fill, .ss-glow-a, .ss-glow-b, .ss-node-dot {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="ss-glow-a" />
      <div className="ss-glow-b" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="ss-grid">
          <div>
            <div className={`ss-head ${inView ? "show" : ""}`}>
              <span className="eyebrow eyebrow--green">Support</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl ss-heading leading-tight mb-6">
                Student Support During Your <span>Learning Journey</span>
              </h2>
            </div>

            <p className={`ss-p ss-body max-w-3xl ${inView ? "show" : ""}`} style={{ animationDelay: "0.12s" }}>
              Learning Hijama can feel overwhelming at first, especially if you are new to anatomy,
              safety, practical techniques, or client care.
            </p>
            <p className={`ss-p ss-body max-w-3xl mt-4 ${inView ? "show" : ""}`} style={{ animationDelay: "0.18s" }}>
              That is why support is an important part of the course.
            </p>
            <p className={`ss-p ss-body max-w-3xl mt-4 ${inView ? "show" : ""}`} style={{ animationDelay: "0.24s" }}>
              Students receive guidance to help them understand the lessons, complete learning steps,
              prepare for assessments, and stay confident throughout the process.
            </p>

            <div className={`ss-quote ${inView ? "show" : ""}`}>
              <div className="ss-quote-inner">
                <span className="ss-quote-mark">"</span>
                <p>
                  You are not just buying information. You are following a structured learning
                  pathway with support.
                </p>
              </div>
            </div>

            {/* ─── Non‑clickable CTA ─── */}
            <div
              role="button"
              className={`ss-cta ${inView ? "show" : ""}`}
              onClick={(e) => e.preventDefault()}
            >
              View Student Support →
            </div>
          </div>

          <div className={`ss-path ${inView ? "show" : ""}`}>
            <div className="ss-path-line">
              <div className="ss-path-line-fill" />
            </div>
            {journey.map((step, idx) => (
              <div
                key={step.label}
                className={`ss-node ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.4 + idx * 0.18}s` }}
              >
                <span className="ss-node-dot">{String(idx + 1).padStart(2, "0")}</span>
                <div>
                  <div className="ss-node-label">{step.label}</div>
                  <div className="ss-node-sub">{step.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}