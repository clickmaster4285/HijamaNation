export default function LearnOnline({ inView }) {
  return (
    <section className="lon-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .lon-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 85% 20%, rgba(34,197,94,0.08) 0%, transparent 55%),
                      linear-gradient(180deg, #0a0f1a 0%, #0c1422 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .lon-glow {
          position: absolute;
          bottom: -16%;
          left: -8%;
          width: 26rem;
          height: 26rem;
          background: radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .lon-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 920px) {
          .lon-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .lon-text {
          opacity: 0;
          transform: translateY(20px);
        }

        .lon-text.show {
          animation: lonFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes lonFadeUp {
          to { opacity: 1; transform: translateY(0); }
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

        .lon-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .lon-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .lon-body {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 1.7;
        }

        .lon-body-muted {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
        }

        .lon-cta {
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
          cursor: default;       /* ← non‑clickable cursor */
        }

        .lon-cta:hover {
          border-color: #22c55e;
          background: #16a34a;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .lon-visual {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 920px) {
          .lon-visual {
            height: 360px;
            max-width: 420px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .lon-visual { height: 300px; }
        }

        .lon-img-main {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(34,197,94,0.22);
          box-shadow: 0 24px 50px rgba(0,0,0,0.5);
          opacity: 0;
          transform: translateY(28px) scale(0.95);
        }

        .lon-img-main.show {
          animation: lonImgIn 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.15s;
        }

        @keyframes lonImgIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .lon-img-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .lon-img-main:hover img {
          transform: scale(1.06);
        }

        @media (prefers-reduced-motion: reduce) {
          .lon-text, .lon-img-main {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="lon-glow" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="lon-grid">
          <div className={`lon-text reveal ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Online Learning</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl lon-heading leading-tight mb-6">
              Can You Learn Hijama <span>Online</span>?
            </h2>
            <p className="lon-body max-w-3xl">
              Yes, students can study the theory, foundations, safety, hygiene, client care, case studies,
              and professional practice online.
            </p>
            <p className="lon-body-muted max-w-3xl mt-4">
              However, Hijama is a practical skill, so practical understanding is very important. This
              course is designed to help students build theory first and then understand the practical
              side through guided learning, case studies, demonstrations, and assessment preparation.
            </p>
            <p className="lon-body-muted max-w-3xl mt-4">
              The goal is not just to complete lessons. The goal is to help students understand how
              Hijama should be approached safely and responsibly.
            </p>

            {/* ─── Non‑clickable CTA ─── */}
            <div
              role="button"
              className="lon-cta"
              onClick={(e) => e.preventDefault()}
            >
              Learn About Practical Training →
            </div>
          </div>

          <div className="lon-visual">
            <div className={`lon-img-main ${inView ? "show" : ""}`}>
              <img src="/images/onlineLearn.png" alt="Online Hijama theory learning" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}