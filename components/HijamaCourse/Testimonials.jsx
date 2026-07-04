export default function StudentTestimonials({ testimonials, inView, bgImage }) {
  // Use custom image if provided, otherwise fallback to default
  const backgroundImage = bgImage || "/images/testimonials.png";

  return (
    <section className="st-section py-14 md:py-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .st-section {
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .st-bg {
          position: absolute;
          inset: 0;
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          z-index: 0;
        }

        .st-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(6,10,8,0.75) 0%, rgba(6,10,8,0.45) 35%, rgba(6,10,8,0.75) 100%),
            radial-gradient(circle at 85% 20%, rgba(34,197,94,0.18) 0%, transparent 55%);
          z-index: 0;
        }

        .st-content {
          position: relative;
          z-index: 1;
        }

        .st-header {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .st-header.active {
          opacity: 1;
          transform: translateY(0);
        }

        .st-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          display: inline-block;
          color: #16a34a;
          margin-bottom: 8px;
        }

        .st-heading {
          font-family: 'Playfair Display', Georgia, serif;
          color: #ffffff;
        }

        .st-heading span {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: #22c55e;
        }

        .st-sub {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.7;
          max-width: 640px;
        }

        .st-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          margin-top: 44px;
        }

        @media (max-width: 1024px) {
          .st-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .st-grid { grid-template-columns: 1fr; }
        }

        .st-card {
          position: relative;
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 30px 26px;
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(40px) scale(0.96);
          transition: opacity 0.7s ease,
                      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease,
                      background 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .st-card.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .st-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(34,197,94,0.4);
          background: rgba(255,255,255,0.1);
          box-shadow: 0 24px 48px rgba(0,0,0,0.4);
        }

        .st-quote-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(34,197,94,0.18);
          border: 1px solid rgba(34,197,94,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4ade80;
          font-size: 22px;
          font-family: Georgia, serif;
          margin-bottom: 18px;
        }

        .st-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 14px;
        }

        .st-stars svg {
          width: 14px;
          height: 14px;
          fill: #4ade80;
        }

        .st-quote {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.92);
          font-size: 15px;
          line-height: 1.7;
          flex: 1;
        }

        .st-footer {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.12);
        }

        .st-avatar {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
        }

        .st-author {
          font-family: 'Inter', sans-serif;
          color: #fff;
          font-weight: 500;
          font-size: 14.5px;
          margin: 0;
        }

        .st-role {
          font-family: 'Inter', sans-serif;
          color: rgba(255,255,255,0.55);
          font-size: 13px;
          margin: 2px 0 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .st-header, .st-card {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="st-bg" />
      <div className="st-bg-overlay" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className="st-content">
          <div className={`st-header ${inView ? "active" : ""}`}>
            <span className="st-eyebrow">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl st-heading leading-tight mb-4">
              What Our <span>Students Say</span>
            </h2>
            <p className="st-sub">
              Real feedback from students who completed their Hijama training with us.
            </p>
          </div>

          <div className="st-grid">
            {testimonials.map((item, idx) => {
              const initials = item.author
                ? item.author
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()
                : "?";

              return (
                <div
                  key={idx}
                  className={`st-card ${inView ? "active" : ""}`}
                  style={{ transitionDelay: `${0.12 * idx}s` }}
                >
                  <span className="st-quote-icon">“</span>

                  <div className="st-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24">
                        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 6.9L12 17.3 5.7 20.8l1.7-6.9L2 9.2l7.1-.6L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="st-quote">{item.quote}</p>

                  <div className="st-footer">
                    <div className="st-avatar">{initials}</div>
                    <div>
                      <p className="st-author">{item.author}</p>
                      <p className="st-role">{item.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}