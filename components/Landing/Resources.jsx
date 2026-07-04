import Link from "next/link";

export default function ResourcesSection({ resources, inView }) {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

    @keyframes bombText {
      0% { transform: scale(0.85) translateY(24px); opacity: 0; }
      60% { transform: scale(1.03) translateY(-3px); opacity: 1; }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }

    @keyframes rowSlide {
      0% { transform: translateX(-14px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }

    @keyframes arrowSlide {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }

    @keyframes ringPulse {
      0%, 100% { transform: scale(0.55); opacity: 0; }
      50% { transform: scale(1.5); opacity: 0.5; }
    }

    .res-section {
      --res-bg: #17261b;
      --res-cream: #f4f0e6;
      --res-muted: rgba(244,240,230,0.6);
      --res-green: #3fa66c;
      --res-green-soft: rgba(63,166,108,0.35);
      --res-red: #e74c3c;               /* ← red eyebrow */
      --res-line: rgba(244,240,230,0.13);

      position: relative;
      overflow: hidden;
      background: var(--res-bg);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .res-bg-glow {
      position: absolute;
      top: -20%;
      right: -8%;
      width: 32rem;
      height: 32rem;
      background: radial-gradient(circle, rgba(63,166,108,0.10) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .res-bg-texture {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      opacity: 0.55;
      background-image:
        radial-gradient(circle, transparent 0 10px, rgba(244,240,230,0.05) 10px 11.5px, transparent 11.5px 70px),
        radial-gradient(circle, transparent 0 5px, rgba(63,166,108,0.09) 5px 6px, transparent 6px 70px);
      background-size: 74px 74px, 74px 74px;
      background-position: 0 0, 37px 42px;
      mask-image: radial-gradient(ellipse 65% 55% at 25% 15%, black, transparent 78%);
    }

    .res-section .reveal { opacity: 0; }
    .res-section .reveal.show {
      animation: bombText 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    /* ─── Eyebrow (red) ─── */
    .eyebrow--red {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      display: inline-block;
      color: var(--res-red);
      margin-bottom: 8px;
    }

    .res-heading {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(30px, 3.8vw, 46px);
      font-weight: 700;
      color: var(--res-cream);
      line-height: 1.15;
      margin: 10px 0 0;
    }

    .res-heading em {
      font-style: italic;
      color: var(--res-green);
      font-weight: 500;
    }

    .res-body {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
      color: var(--res-muted);
      max-width: 540px;
      margin: 14px 0 0;
    }

    /* ─── Resource list (static, non‑clickable) ─── */
    .res-list {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 48px;
      margin-top: 40px;
      border-top: 1px solid var(--res-line);
    }

    @media (max-width: 720px) {
      .res-list {
        grid-template-columns: 1fr;
      }
    }

    .res-row {
      opacity: 0;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 19px 2px;
      border-bottom: 1px solid var(--res-line);
      color: var(--res-cream);
      cursor: default;                    /* ← not clickable */
      transition: padding-left 0.3s ease, border-color 0.3s ease;
    }

    .res-row.show {
      animation: rowSlide 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .res-row:hover {
      padding-left: 10px;
      border-color: var(--res-green-soft);
    }

    .res-row-mark {
      position: relative;
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1.5px solid rgba(244,240,230,0.32);
      background: radial-gradient(circle at 34% 32%, rgba(244,240,230,0.14), transparent 68%);
      transition: background 0.35s ease, border-color 0.35s ease,
                  transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
    }

    .res-row-mark::after {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: 50%;
      border: 1px solid var(--res-green-soft);
      opacity: 0;
      animation: ringPulse 5s ease-in-out infinite;
      animation-delay: var(--ripple-delay, 0s);
    }

    .res-row:hover .res-row-mark {
      border-color: var(--res-green);
      background: var(--res-green);
      transform: scale(0.8);
    }

    .res-row-label {
      flex: 1;
      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-size: 15.5px;
      letter-spacing: 0.01em;
      line-height: 1.4;
    }

    .res-row-arrow {
      flex-shrink: 0;
      color: var(--res-green);
      font-weight: 700;
      opacity: 0;
      transform: translateX(-6px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .res-row:hover .res-row-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    .res-foot {
      margin-top: 36px;
      opacity: 0;
    }
    .res-foot.show {
      animation: bombText 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .res-foot-link {
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: 'Inter', sans-serif;
      font-size: 14.5px;
      font-weight: 700;
      letter-spacing: 0.01em;
      color: var(--res-cream);
      text-decoration: none;
      padding: 14px 26px;
      border: 1.5px solid var(--res-green-soft);
      transition: color 0.4s ease, border-color 0.4s ease;
    }

    .res-foot-link::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--res-green);
      transform: translateX(-101%);
      transition: transform 0.45s cubic-bezier(0.65,0,0.35,1);
      z-index: 0;
    }

    .res-foot-link:hover::before {
      transform: translateX(0);
    }

    .res-foot-link:hover {
      color: #102015;
      border-color: var(--res-green);
    }

    .res-foot-link span {
      position: relative;
      z-index: 1;
      display: inline-block;
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    }

    .res-foot-link:hover span {
      animation: arrowSlide 0.7s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .res-section .reveal,
      .res-row,
      .res-row-mark,
      .res-row-mark::after,
      .res-foot,
      .res-foot-link::before,
      .res-foot-link span {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
      }
      .res-foot-link::before {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="res-section py-14 md:py-20">
        <div className="res-bg-texture" />
        <div className="res-bg-glow" />

        <div className="px-8 md:px-16 lg:px-20" style={{ position: "relative", zIndex: 1 }}>
          {/* ─── Red eyebrow ─── */}
          <span className={`eyebrow eyebrow--red reveal ${inView ? "show" : ""}`}>
            Knowledge Hub
          </span>
          <h2 className={`res-heading reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.08s" }}>
            Helpful <em>Resources</em>
          </h2>
          <p className={`res-body reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.16s" }}>
            Good decisions start with clear information. Explore our resources for students, clients, and practitioners.
          </p>

          {/* ─── Static resource list (no links) ─── */}
          <div className="res-list">
            {resources.map((r, i) => (
              <div
                key={i}
                className={`res-row ${inView ? "show" : ""}`}
                style={{
                  animationDelay: `${0.24 + i * 0.05}s`,
                  "--ripple-delay": `${(i % 5) * 0.7}s`,
                }}
              >
                <span className="res-row-mark" aria-hidden="true" />
                <span className="res-row-label">{r.label}</span>
                <span className="res-row-arrow" aria-hidden="true">→</span>
              </div>
            ))}
          </div>

          {/* ─── "Explore all" button (still a link) ─── */}
          <div
            className={`res-foot reveal ${inView ? "show" : ""}`}
            style={{ animationDelay: `${0.3 + resources.length * 0.05}s` }}
          >
            <Link href="/resources" className="res-foot-link">
              <span>Explore all Resources</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}