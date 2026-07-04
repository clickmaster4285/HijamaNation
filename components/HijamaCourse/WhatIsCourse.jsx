export default function WhatIsCourse({ inView }) {
  const features = [
    "Online Certification",
    "Beginner-Friendly",
    "Structured Learning",
    "Professional Standards",
  ];

  return (
    <section className="wic-section py-14 md:py-20">
      <style>{`
        .wic-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 12% 85%, rgba(34,197,94,0.07) 0%, transparent 55%),
                      linear-gradient(180deg, #0a0f1a 0%, #0d1726 100%);
        }

        .wic-glow {
          position: absolute;
          bottom: -15%;
          left: -10%;
          width: 28rem;
          height: 28rem;
          background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .wic-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .wic-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .wic-text {
          opacity: 0;
          transform: translateY(20px);
        }

        .wic-text.show {
          animation: wicFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes wicFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .wic-feature-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 460px;
        }

        @media (max-width: 480px) {
          .wic-feature-grid {
            grid-template-columns: 1fr;
          }
        }

        .wic-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: rgba(34,197,94,0.06);
          border: 1px solid rgba(34,197,94,0.22);
          border-radius: 10px;
          opacity: 0;
          transform: translateY(14px);
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .wic-feature.show {
          animation: wicFeatureIn 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes wicFeatureIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .wic-feature:hover {
          transform: translateY(-3px);
          border-color: rgba(34,197,94,0.5);
          background: rgba(34,197,94,0.1);
        }

        .wic-feature-icon {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: rgba(34,197,94,0.18);
          color: #4ade80;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wic-feature-label {
          color: #d1fae5;
          font-size: 13.5px;
          font-weight: 500;
        }

        .wic-image-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(34,197,94,0.2);
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
          opacity: 0;
          transform: translateY(24px) scale(0.98);
        }

        .wic-image-wrap.show {
          animation: wicImgIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.2s;
        }

        @keyframes wicImgIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .wic-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .wic-image-wrap:hover img {
          transform: scale(1.04);
        }

        .wic-image-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(10,15,26,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(34,197,94,0.3);
          color: #86efac;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 14px;
          border-radius: 999px;
        }

        @media (prefers-reduced-motion: reduce) {
          .wic-text, .wic-feature, .wic-image-wrap {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="wic-glow" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="wic-grid">
          <div className={`wic-text ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Overview</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
              What Is This <span className="text-green-500">Hijama Course</span>?
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
              This Online Hijama Certification Course teaches students the foundations of Hijama,
              also known as wet cupping, including safety, hygiene, client screening, practical
              understanding, aftercare, case studies, professional practice, and certification
              requirements.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mt-4">
              The course is designed for students who want to learn Hijama in a structured,
              supported, and responsible way.
            </p>

            <div className="wic-feature-grid">
              {features.map((f, i) => (
                <div
                  key={f}
                  className={`wic-feature ${inView ? "show" : ""}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <span className="wic-feature-icon">✓</span>
                  <span className="wic-feature-label">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`wic-image-wrap ${inView ? "show" : ""}`}>
            <img src="/images/hijama.png" alt="Hijama certification course training" loading="lazy" />
            <span className="wic-image-tag">Certified Training Program</span>
          </div>
        </div>
      </div>
    </section>
  );
}