// ─── Badge image imports (same as Practitioners) ──────────────────────
const badgeImports = {
  grcct: "/images/five.png",
  pwa: "/images/four.png",
  approved: "/images/Global-22-Winner-19.jpg",
  westminster: "/images/sixww.png",
  award2021: "/images/st1.png",
  corporate: "/images/three.png",
  education: "/images/two.png",
};

export default function Certification({ inView }) {
  const badges = [
    { id: "grcct" },
    { id: "pwa" },
    { id: "approved" },
    { id: "westminster" },
    { id: "award2021" },
    { id: "corporate" },
    { id: "education" },
  ];

  return (
    <section className="cert-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .cert-section {
          position: relative;
          overflow: hidden;
          background: #07090f;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .cert-pattern {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          background-image:
            linear-gradient(rgba(34,197,94,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.08) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(ellipse 75% 60% at 15% 20%, black 5%, transparent 75%);
          animation: certDrift 26s linear infinite;
        }

        @keyframes certDrift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: -42px 42px, 42px -42px; }
        }

        .cert-glow-a {
          position: absolute;
          top: -16%;
          right: -8%;
          width: 30rem;
          height: 30rem;
          background: radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .cert-glow-b {
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 24rem;
          height: 24rem;
          background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .cert-ring {
          position: absolute;
          top: 8%;
          right: 6%;
          width: 13rem;
          height: 13rem;
          border: 1.5px dashed rgba(74,222,128,0.22);
          border-radius: 999px;
          z-index: 0;
          opacity: 0;
        }

        .cert-ring.show {
          animation: certRingIn 1.2s ease forwards, certSpin 70s linear infinite;
          animation-delay: 0.3s, 0.3s;
        }

        @keyframes certRingIn {
          to { opacity: 1; }
        }

        @keyframes certSpin {
          to { transform: rotate(360deg); }
        }

        .cert-content {
          position: relative;
          z-index: 1;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 920px) {
          .cert-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .cert-head {
          opacity: 0;
          transform: translateY(20px);
        }

        .cert-head.show {
          animation: certFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes certFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .cert-p {
          opacity: 0;
          transform: translateY(16px);
        }

        .cert-p.show {
          animation: certFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
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

        .cert-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .cert-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .cert-body {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 1.7;
        }

        .cert-body-muted {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
        }

        .cert-note {
          position: relative;
          margin-top: 28px;
          padding: 1.5px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(74,222,128,0.5), rgba(34,197,94,0.05) 60%);
          opacity: 0;
          transform: translateY(22px);
          max-width: 720px;
        }

        .cert-note.show {
          animation: certFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.35s;
        }

        .cert-note-inner {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: rgba(9,13,21,0.9);
          backdrop-filter: blur(14px);
          border-radius: 18.5px;
          padding: 22px 26px;
          overflow: hidden;
        }

        .cert-note-glow {
          position: absolute;
          top: -50%;
          right: -10%;
          width: 12rem;
          height: 12rem;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 70%);
          pointer-events: none;
        }

        .cert-note-icon {
          position: relative;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(34,197,94,0.16);
          border: 1px solid rgba(74,222,128,0.35);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .cert-note-inner p {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
        }

        .cert-note-inner .highlight {
          font-weight: 600;
          color: #4ade80;
        }

        .cert-cta {
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

        .cert-cta.show {
          animation: certFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.5s;
        }

        .cert-cta:hover {
          border-color: #22c55e;
          background: #16a34a;
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* ─── Badge grid (right side) ─── */
        .cert-badge-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          opacity: 0;
          transform: translateY(24px) scale(0.96);
        }

        .cert-badge-grid.show {
          animation: certBadgeIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.2s;
        }

        @keyframes certBadgeIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 700px) {
          .cert-badge-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .cert-badge-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .cert-badge-item {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 12px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .cert-badge-item:hover {
          transform: scale(1.06);
          border-color: rgba(34,197,94,0.3);
        }

        .cert-badge-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: saturate(1.05);
        }

        @media (prefers-reduced-motion: reduce) {
          .cert-head, .cert-p, .cert-note, .cert-cta, .cert-ring, .cert-badge-grid {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="cert-pattern" />
      <div className="cert-glow-a" />
      <div className="cert-glow-b" />
      <div className={`cert-ring ${inView ? "show" : ""}`} />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="cert-content">
          <div className="cert-grid">
            {/* Left column – text */}
            <div>
              <div className={`cert-head ${inView ? "show" : ""}`}>
                <span className="eyebrow eyebrow--green">Certification</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl cert-heading leading-tight mb-6">
                  Certification After <span>Course Completion</span>
                </h2>
              </div>

              <p className={`cert-p cert-body max-w-3xl ${inView ? "show" : ""}`} style={{ animationDelay: "0.12s" }}>
                After completing the required course modules, learning activities, case studies, and
                assessment steps, students can receive certification after successful completion.
              </p>
              <p className={`cert-p cert-body-muted max-w-3xl mt-4 ${inView ? "show" : ""}`} style={{ animationDelay: "0.2s" }}>
                Certification helps show that you have completed structured Hijama training and
                understand the course standards.
              </p>

              <div className={`cert-note ${inView ? "show" : ""}`}>
                <div className="cert-note-inner">
                  <div className="cert-note-glow" />
                  <span className="cert-note-icon">!</span>
                  <p>
                    <span className="highlight">Important:</span> Before offering Hijama
                    professionally, students should always check local practice rules, insurance
                    requirements, and professional requirements in their own area.
                  </p>
                </div>
              </div>

              {/* ─── Non‑clickable CTA ─── */}
              <div
                role="button"
                className={`cert-cta ${inView ? "show" : ""}`}
                onClick={(e) => e.preventDefault()}
              >
                View Certification Details →
              </div>
            </div>

            {/* Right column – badges */}
            <div className={`cert-badge-grid ${inView ? "show" : ""}`}>
              {badges.map((badge, i) => (
                <div
                  key={badge.id}
                  className="cert-badge-item"
                  style={{ animationDelay: `${0.3 + i * 0.06}s` }}
                >
                  <img
                    src={badgeImports[badge.id]}
                    alt={`Accreditation badge ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}