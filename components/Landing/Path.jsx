import Link from "next/link";

/** @param {{ pathCards?: any[], inView?: boolean }} props */
export default function Path({ pathCards = /** @type {any[]} */ ([]), inView }) {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

    @keyframes fadeUp {
      0% { transform: translateY(28px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes glowFloat {
      0%, 100% { transform: translate(0,0) scale(1); }
      50% { transform: translate(-3%, 4%) scale(1.08); }
    }

    .path-section {
      position: relative;
      background: #f0f5f0;       /* light green base */
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      overflow: hidden;
    }

    /* ─── Decorative glow ─── */
    .path-glow {
      position: absolute;
      top: -20%;
      right: -10%;
      width: 30rem;
      height: 30rem;
      background: radial-gradient(circle, rgba(28,124,71,0.08) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
      animation: glowFloat 18s ease-in-out infinite;
    }

    .path-glow-2 {
      position: absolute;
      bottom: -10%;
      left: -5%;
      width: 20rem;
      height: 20rem;
      background: radial-gradient(circle, rgba(82,183,136,0.06) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
      animation: glowFloat 22s ease-in-out infinite reverse;
    }

    /* ─── Subtle pattern overlay ─── */
    .path-pattern {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: 0.4;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(28,124,71,0.04) 0.5px, transparent 0.5px),
        radial-gradient(circle at 80% 70%, rgba(82,183,136,0.04) 1px, transparent 1px);
      background-size: 30px 30px, 40px 40px;
      background-position: 0 0, 15px 15px;
    }

    .path-content {
      position: relative;
      z-index: 1;
    }

    .path-eyebrow {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #1c7c47;
      margin-bottom: 16px;
      display: block;
    }

    .path-heading {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(30px, 3.8vw, 44px);
      font-weight: 700;
      color: #1a2e1a;
      line-height: 1.15;
      margin: 0 0 12px;
    }

    .path-heading em {
      font-style: italic;
      color: #1c7c47;
      font-weight: 500;
    }

    .path-sub {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: #4a5568;
      line-height: 1.8;
      max-width: 540px;
      margin-bottom: 40px;
    }

    .path-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }

    @media (max-width: 768px) {
      .path-grid {
        grid-template-columns: 1fr;
      }
    }

    .path-card {
      border: 1px solid rgba(26,46,26,0.08);
      border-radius: 20px;
      padding: 40px 36px;
      position: relative;
      overflow: hidden;
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(26,46,26,0.03);
      transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
      opacity: 0;
      transform: translateY(28px);
    }

    .path-card.show {
      animation: fadeUp 0.65s ease forwards;
    }

    .path-card:hover {
      border-color: #1c7c47;
      box-shadow: 0 16px 48px rgba(28,124,71,0.1);
      transform: translateY(-3px);
    }

    .path-card-topbar {
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      background: #1c7c47;
      width: 0;
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 20px 0 0 0;
    }

    .path-card:hover .path-card-topbar {
      width: 100%;
    }

    .path-card-num {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 700;
      color: #b8d4c0;
      letter-spacing: 0.1em;
      margin-bottom: 16px;
      display: block;
    }

    .path-card-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      background: #e8f5ef;
      border: 1.5px solid #a8d5b8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-bottom: 20px;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .path-card:hover .path-card-icon {
      transform: translateY(-4px) scale(1.06);
      box-shadow: 0 8px 20px rgba(28,124,71,0.15);
    }

    .path-card-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 26px;
      font-weight: 700;
      color: #1a2e1a;
      margin-bottom: 12px;
      line-height: 1.2;
    }

    .path-card-body {
      font-family: 'Inter', sans-serif;
      font-size: 14.5px;
      font-weight: 400;
      color: #4a5568;
      line-height: 1.75;
      margin-bottom: 24px;
    }

    .path-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #1c7c47;
      text-decoration: none;
      transition: gap 0.2s;
    }

    .path-link:hover {
      gap: 10px;
    }

    @media (prefers-reduced-motion: reduce) {
      .path-card {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
      .path-card-topbar {
        transition: none !important;
      }
      .path-glow, .path-glow-2 {
        animation: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="path-section py-14 md:py-20">
        {/* ─── Decorative glow elements ─── */}
        <div className="path-glow" />
        <div className="path-glow-2" />
        <div className="path-pattern" />

        {/* ─── Content ─── */}
        <div className="path-content px-8 md:px-16 lg:px-20">
          <span className="path-eyebrow">Choose Your Path</span>
          <h2 className="path-heading">
            Start Your <em>Hijama</em> Journey Today
          </h2>
          <p className="path-sub">
            Whether you want to learn Hijama or book a treatment, we provide clear
            guidance and support every step of the way.
          </p>

          <div className="path-grid">
            {pathCards.map((card, i) => (
              <div
                key={i}
                className={`path-card ${inView ? "show" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="path-card-topbar" />
                <span className="path-card-num">{card.num}</span>
                <div className="path-card-icon">{card.icon}</div>
                <h3 className="path-card-title">{card.title}</h3>
                <p className="path-card-body">{card.body}</p>
                <Link href={card.to} className="path-link">
                  {card.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}