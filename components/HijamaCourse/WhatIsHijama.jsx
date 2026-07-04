export default function WhatIsHijama({ inView }) {
  return (
    <section className="wih-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .wih-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 15% 25%, rgba(34,197,94,0.1) 0%, transparent 55%),
                      radial-gradient(circle at 90% 80%, rgba(34,197,94,0.07) 0%, transparent 50%),
                      linear-gradient(180deg, #0a0f1a 0%, #0c1422 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .wih-pulse {
          position: absolute;
          top: 50%;
          left: 28%;
          width: 22rem;
          height: 22rem;
          margin-top: -11rem;
          margin-left: -11rem;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
          opacity: 0;
        }

        .wih-pulse.show {
          animation: wihPulse 1.8s ease-out forwards;
        }

        @keyframes wihPulse {
          0% { opacity: 0; transform: scale(0.4); }
          40% { opacity: 0.9; }
          100% { opacity: 0.5; transform: scale(1); }
        }

        .wih-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: center;
        }

        @media (max-width: 860px) {
          .wih-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .wih-image-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(34,197,94,0.2);
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
          opacity: 0;
          transform: scale(0.7);
          filter: blur(14px);
          order: 1;
        }

        @media (max-width: 860px) {
          .wih-image-wrap { order: -1; }
        }

        .wih-image-wrap.show {
          animation: wihBlowout 0.95s cubic-bezier(0.16,1,0.3,1) forwards;
        }

        @keyframes wihBlowout {
          0% { opacity: 0; transform: scale(0.7); filter: blur(14px); }
          60% { opacity: 1; transform: scale(1.04); filter: blur(0px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0px); }
        }

        .wih-image-wrap:hover img {
          transform: scale(1.04);
        }

        .wih-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .wih-image-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(10,15,26,0.75);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(34,197,94,0.3);
          color: #86efac;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 14px;
          border-radius: 999px;
        }

        .wih-text {
          order: 2;
          opacity: 0;
          transform: translateY(24px);
        }

        @media (max-width: 860px) {
          .wih-text { order: 1; }
        }

        .wih-text.show {
          animation: wihTextIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: 0.25s;
        }

        @keyframes wihTextIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .wih-tag-row {
          opacity: 0;
        }

        .wih-tag-row.show {
          animation: wihTagFade 0.6s ease forwards;
          animation-delay: 0.6s;
        }

        @keyframes wihTagFade {
          to { opacity: 1; }
        }

        .wih-tag {
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
        }

        .wih-tag:hover {
          transform: translateY(-3px);
          border-color: rgba(34,197,94,0.6);
          background: rgba(34,197,94,0.18);
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

        .wih-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .wih-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #4ade80;
        }

        .wih-body {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 1.7;
        }

        .wih-body-muted {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
        }

        @media (prefers-reduced-motion: reduce) {
          .wih-image-wrap, .wih-text, .wih-tag-row, .wih-pulse {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>

      <div className={`wih-pulse ${inView ? "show" : ""}`} />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="wih-grid">
          <div className={`wih-image-wrap ${inView ? "show" : ""}`}>
            <img src="/images/whatishijama.jpg" alt="Hijama wet cupping practice" loading="lazy" />
            <span className="wih-image-tag">Traditional Hijama Practice</span>
          </div>

          <div className={`wih-text reveal ${inView ? "show" : ""}`}>
            <span className="eyebrow eyebrow--green">Understanding Hijama</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl wih-heading leading-tight mb-6">
              What Is <span>Hijama</span>?
            </h2>
            <p className="wih-body max-w-3xl">
              Hijama is commonly known as wet cupping. It is a traditional wellness practice connected
              with Islamic and natural health traditions.
            </p>
            <p className="wih-body-muted max-w-3xl mt-4">
              In this course, the main focus is Hijama / wet cupping. Students are also introduced to
              the basic differences between wet cupping, dry cupping, and other cupping methods so
              they can understand the wider field of cupping therapy.
            </p>
            <p className="wih-body-muted max-w-3xl mt-4">
              This helps students avoid confusion and understand where Hijama fits within cupping therapy.
            </p>
            <div className={`wih-tag-row mt-6 flex flex-wrap gap-3 ${inView ? "show" : ""}`}>
              <span className="wih-tag px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300">Focus: Wet Cupping</span>
              <span className="wih-tag px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300">Includes: Dry Cupping Overview</span>
              <span className="wih-tag px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-300">Traditional &amp; Islamic Practice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}