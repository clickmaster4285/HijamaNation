import Link from "next/link";

const Check = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <polyline points="1.5,6 4.5,9 10.5,3" stroke="#0f1a12" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const WhoIcon = ({ index }) => {
  const paths = [
    <path d="M2 7l9-4 9 4-9 4-9-4Z" />,
    <path d="M12 19s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 7 3.5C19 14.6 12 19 12 19Z" />,
    <path d="M4 8h16v10H4V8Zm4 0V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />,
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm2.5-12.5L13 13l-3.5 1.5L11 11l3.5-2.5Z" />,
  ];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[index % paths.length]}
    </svg>
  );
};

export default function LearnSection({ checklist, whoList, inView }) {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

    /* ─── Bomb-pop entrance family: punchy overshoot pops, shared
       rhythm with the rest of the site's sections ─── */
    @keyframes bombText {
      0% { transform: scale(0.85) translateY(24px); opacity: 0; }
      60% { transform: scale(1.03) translateY(-3px); opacity: 1; }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }

    @keyframes bombCard {
      0% { transform: translateX(38px) rotate(2deg) scale(0.94); opacity: 0; }
      55% { transform: translateX(-6px) rotate(-0.6deg) scale(1.015); opacity: 1; }
      100% { transform: translateX(0) rotate(0deg) scale(1); opacity: 1; }
    }

    @keyframes bombStep {
      0% { transform: scale(0.3) rotate(-16deg); opacity: 0; }
      55% { transform: scale(1.25) rotate(6deg); opacity: 1; }
      75% { transform: scale(0.92) rotate(-2deg); }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }

    @keyframes bombLine {
      0% { transform: scaleY(0); }
      100% { transform: scaleY(1); }
    }

    @keyframes bombIcon {
      0% { transform: scale(0.3) rotate(-18deg); opacity: 0; }
      55% { transform: scale(1.2) rotate(8deg); opacity: 1; }
      75% { transform: scale(0.94) rotate(-3deg); }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }

    @keyframes burstOut {
      0% { transform: scale(0.3); opacity: 0.9; }
      70% { opacity: 0.35; }
      100% { transform: scale(1.9); opacity: 0; }
    }

    @keyframes glowDrift {
      0%, 100% { transform: translate(0,0) scale(1); }
      50% { transform: translate(-3%, 4%) scale(1.08); }
    }

    .learn-section {
      --learn-bg: #17261b;
      --learn-panel: #1f3628;
      --learn-cream: #f4f0e6;
      --learn-muted: rgba(244,240,230,0.62);
      --learn-green: #3fa66c;
      --learn-green-soft: rgba(63,166,108,0.35);
      --learn-coral: #e0632e;
      --learn-line: rgba(244,240,230,0.13);

      position: relative;
      background: var(--learn-bg);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      overflow: hidden;
    }

    .learn-section .reveal { opacity: 0; }
    .learn-section .reveal.show {
      animation: bombText 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .learn-section .reveal-card { opacity: 0; }
    .learn-section .reveal-card.show {
      animation: bombCard 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .eyebrow-row {
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
    }

    /* One-time coral burst beside the eyebrow — the literal "bomb" flourish */
    .eyebrow-burst {
      position: relative;
      width: 8px;
      height: 8px;
      flex-shrink: 0;
    }

    .eyebrow-burst::before,
    .eyebrow-burst::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px solid var(--learn-coral);
    }

    .eyebrow-burst::before {
      background: var(--learn-coral);
    }

    .eyebrow-burst::after {
      animation: burstOut 1.3s ease-out 0.3s forwards;
    }

    .eyebrow--coral {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      display: inline-block;
      color: var(--learn-coral);
    }

    .learn-heading {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(28px, 3.6vw, 42px);
      font-weight: 700;
      color: var(--learn-cream);
      line-height: 1.15;
      margin: 12px 0 8px;
    }

    .learn-heading em {
      font-style: italic;
      color: var(--learn-green);
      font-weight: 500;
    }

    .learn-body {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      color: var(--learn-muted);
      line-height: 1.8;
      max-width: 480px;
      margin-bottom: 30px;
    }

    .learn-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 56px;
      align-items: start;
      margin-top: 32px;
    }

    @media (max-width: 768px) {
      .learn-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    /* ─── Pathway list ───
       A real sequence — the steps of the course — so a connecting
       line and step order are earned here, unlike a decorative list. */
    .pathway {
      position: relative;
      list-style: none;
      margin: 0 0 32px;
      padding: 0 0 0 6px;
    }

    .pathway-line {
      position: absolute;
      left: 15px;
      top: 16px;
      bottom: 16px;
      width: 1.5px;
      background: var(--learn-line);
      transform-origin: top;
      transform: scaleY(0);
    }

    .reveal.show .pathway-line {
      animation: bombLine 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards;
    }

    .pathway li {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 11px 0;
      opacity: 0;
    }

    .reveal.show .pathway li {
      animation: bombStep 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .pathway-step {
      position: relative;
      z-index: 1;
      flex-shrink: 0;
      width: 31px;
      height: 31px;
      border-radius: 50%;
      background: var(--learn-panel);
      border: 1.5px solid var(--learn-green-soft);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease;
    }

    .pathway li:hover .pathway-step {
      transform: scale(1.12);
      border-color: var(--learn-green);
    }

    .pathway-num {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 700;
      color: var(--learn-green);
      transition: opacity 0.2s ease;
    }

    .pathway li:hover .pathway-num {
      opacity: 0;
    }

    .check-icon {
      position: absolute;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 31px;
      height: 31px;
      border-radius: 50%;
      background: var(--learn-green);
      opacity: 0;
      transform: scale(0.6);
      transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
    }

    .pathway li:hover .check-icon {
      opacity: 1;
      transform: scale(1);
    }

    .pathway-text {
      font-family: 'Inter', sans-serif;
      font-size: 14.5px;
      font-weight: 500;
      color: rgba(244,240,230,0.85);
      line-height: 1.5;
      padding-top: 6px;
    }

    .btn-primary {
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--learn-green);
      color: #0f1a12;
      font-family: 'Inter', sans-serif;
      font-size: 14.5px;
      font-weight: 700;
      padding: 14px 28px;
      border-radius: 0;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, background 0.3s ease;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 26px -10px rgba(63,166,108,0.55);
      background: #4fc182;
    }

    .btn-primary:active {
      transform: translateY(0) scale(0.97);
    }

    /* ─── Eligibility pass ───
       Styled as an admission ticket, not a generic feature card:
       dashed seam + punched notches on the sides, like a stub you'd
       tear off to enroll. */
    .who-card {
      position: relative;
      background: var(--learn-panel);
      border: 1px solid var(--learn-green-soft);
      padding: 30px 30px 10px;
      box-shadow: 0 24px 50px -22px rgba(10,20,12,0.6);
      overflow: visible;
    }

    .who-card::before,
    .who-card::after {
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--learn-bg);
      top: 96px;
    }

    .who-card::before { left: -11px; }
    .who-card::after { right: -11px; }

    .who-card-seam {
      position: absolute;
      left: 22px;
      right: 22px;
      top: 107px;
      border-top: 1.5px dashed rgba(244,240,230,0.22);
    }

    .who-card-glow {
      position: absolute;
      top: -30%;
      right: -25%;
      width: 14rem;
      height: 14rem;
      background: radial-gradient(circle, rgba(63,166,108,0.28) 0%, transparent 70%);
      pointer-events: none;
      animation: glowDrift 10s ease-in-out infinite;
    }

    .who-card-eyebrow {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--learn-coral);
      margin: 0 0 8px;
    }

    .who-card-title {
      position: relative;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 22px;
      font-weight: 700;
      color: var(--learn-cream);
      margin: 0 0 28px;
      line-height: 1.25;
    }

    .who-list {
      position: relative;
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    .who-row {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 15px 4px;
      opacity: 0;
      transition: transform 0.25s ease;
    }

    .who-card.show .who-row {
      animation: bombStep 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .who-row:hover {
      transform: translateX(4px);
    }

    .who-row + .who-row {
      border-top: 1px solid rgba(244,240,230,0.08);
    }

    .who-icon-wrap {
      position: relative;
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: rgba(63,166,108,0.14);
      color: var(--learn-green);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
    }

    .who-card.show .who-icon-wrap {
      animation: bombIcon 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .who-row:hover .who-icon-wrap {
      background: rgba(63,166,108,0.24);
    }

    .who-row-text strong {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 14.5px;
      font-weight: 700;
      color: var(--learn-cream);
      margin-bottom: 3px;
    }

    .who-row-text span {
      font-family: 'Inter', sans-serif;
      font-size: 13.5px;
      line-height: 1.55;
      color: var(--learn-muted);
    }

    @media (prefers-reduced-motion: reduce) {
      .learn-section .reveal,
      .learn-section .reveal-card,
      .pathway-line,
      .pathway li,
      .who-card,
      .who-row,
      .who-icon-wrap,
      .who-card-glow,
      .eyebrow-burst::after,
      .check-icon,
      .btn-primary {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
        transform: none !important;
      }
      .pathway-line { transform: scaleY(1) !important; }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="learn-section py-14 md:py-20">
        <div className="px-8 md:px-16 lg:px-20">
          <div className={`eyebrow-row reveal ${inView ? "show" : ""}`}>
            <span className="eyebrow-burst" aria-hidden="true" />
            <span className="eyebrow--coral">Course Pathway</span>
          </div>
          <h2 className={`learn-heading reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.08s" }}>
            Learn Hijama with <em>Guidance &amp; Confidence</em>
          </h2>

          <div className="learn-grid">
            {/* Left column – stepped pathway */}
            <div className={`reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.15s" }}>
              <p className="learn-body">
                Our Hijama course gives students a clear learning path – from understanding the Sunnah to mastering clinical
                standards so you build confidence step by step with the right support.
              </p>

              <ul className="pathway">
                <span className="pathway-line" aria-hidden="true" />
                {checklist.map((item, i) => (
                  <li key={i} style={{ animationDelay: `${0.35 + i * 0.09}s` }}>
                    <span className="pathway-step">
                      <span className="pathway-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="check-icon"><Check /></span>
                    </span>
                    <span className="pathway-text">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/courses/hijama" className="btn-primary">Explore the Hijama Course →</Link>
            </div>

            {/* Right column – eligibility pass */}
            <div className={`reveal-card ${inView ? "show" : ""}`} style={{ animationDelay: "0.22s" }}>
              <div className={`who-card ${inView ? "show" : ""}`}>
                <div className="who-card-glow" />
                <span className="who-card-eyebrow">Eligibility</span>
                <h3 className="who-card-title">Who Can Join?</h3>
                <span className="who-card-seam" aria-hidden="true" />
                <ul className="who-list">
                  {whoList.map(([label, desc], i) => (
                    <li
                      key={i}
                      className="who-row"
                      style={{ animationDelay: `${0.55 + i * 0.09}s` }}
                    >
                      <span className="who-icon-wrap" style={{ animationDelay: `${0.6 + i * 0.09}s` }}>
                        <WhoIcon index={i} />
                      </span>
                      <span className="who-row-text">
                        <strong>{label}</strong>
                        <span>{desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}