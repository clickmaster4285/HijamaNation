import Link from "next/link";

export default function BookSection({ dotList, inView, bgImage = null }) {
  const backgroundImage =
    bgImage ||
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80";

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

    @keyframes fadeUp {
      0% { transform: translateY(22px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes cardReveal {
      0% { transform: translateX(34px) rotate(1.5deg); opacity: 0; }
      60% { transform: translateX(-4px) rotate(-0.3deg); opacity: 1; }
      100% { transform: translateX(0) rotate(0deg); opacity: 1; }
    }

    @keyframes dotIn {
      0% { transform: translateX(-12px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }

    @keyframes bgPan {
      0% { transform: scale(1.08) translate(0, 0); }
      100% { transform: scale(1.14) translate(-1.5%, -1.5%); }
    }

    .book-section {
      position: relative;
      overflow: hidden;
      border-radius: 0;
      isolation: isolate;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .book-bg-img {
      position: absolute;
      top: -2%;
      left: -2%;
      right: -2%;
      bottom: -2%;
      width: 104%;
      height: 104%;
      background-image: url("${backgroundImage}");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: -2;
      animation: bgPan 20s ease-in-out infinite alternate;
      filter: saturate(0.9);
      border-radius: 0;
    }

    .book-bg-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(115deg, rgba(15,28,17,0.96) 0%, rgba(15,28,17,0.88) 32%, rgba(15,28,17,0.62) 58%, rgba(15,28,17,0.38) 100%);
      z-index: -1;
      border-radius: 0;
    }

    .book-section .reveal { opacity: 0; }
    .book-section .reveal.show {
      animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .book-section .reveal-l { opacity: 0; }
    .book-section .reveal-l.show {
      animation: cardReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    /* ─── Eyebrow (red) ─── */
    .eyebrow--red {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      display: inline-block;
      color: #e74c3c;
      margin-bottom: 8px;
    }

    /* ─── Heading (Playfair Display) ─── */
    .book-heading {
      font-family: 'Playfair Display', Georgia, serif;
      color: #ffffff;
      font-size: clamp(30px, 3.8vw, 46px);
      font-weight: 700;
      line-height: 1.15;
      margin: 10px 0 0;
      max-width: 620px;
    }

    .book-heading em {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      color: #6ee7a0;
    }

    .book-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 52px;
      align-items: start;
      margin-top: 0;
    }

    @media (max-width: 880px) {
      .book-grid { grid-template-columns: 1fr; }
    }

    .book-body {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.75;
      color: rgba(255,255,255,0.78);
      max-width: 480px;
      margin: 0 0 18px;
    }

    .book-note {
      font-family: 'Inter', sans-serif;
      font-size: 13.5px;
      font-weight: 400;
      line-height: 1.6;
      color: rgba(255,255,255,0.55);
      font-style: italic;
      border-left: 2px solid rgba(110,231,160,0.4);
      padding-left: 14px;
      margin: 0 0 28px;
      max-width: 460px;
    }

    /* ─── Button (Hijama green + white text) ─── */
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      background: linear-gradient(135deg, #1c7c47, #2fa86a);
      color: #ffffff !important;
      font-family: 'Inter', sans-serif;
      font-size: 14.5px;
      font-weight: 700;
      letter-spacing: 0.01em;
      padding: 14px 27px;
      border-radius: 0;
      text-decoration: none;
      box-shadow: 0 14px 28px -10px rgba(28,124,71,0.6);
      transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, filter 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 34px -10px rgba(28,124,71,0.65);
      filter: brightness(1.06);
    }

    .book-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 0;
      margin-top: 38px;
      padding-top: 28px;
      border-top: 1px solid rgba(255,255,255,0.14);
    }

    .book-strip-item {
      flex: 1 1 140px;
      padding-right: 24px;
      opacity: 0;
    }

    .reveal.show .book-strip-item {
      animation: dotIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .book-strip-item + .book-strip-item {
      border-left: 1px solid rgba(255,255,255,0.12);
      padding-left: 24px;
    }

    .book-strip-num {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 26px;
      font-weight: 800;
      color: #6ee7a0;
      line-height: 1;
      margin-bottom: 6px;
    }

    .book-strip-label {
      font-family: 'Inter', sans-serif;
      font-size: 12.5px;
      font-weight: 400;
      line-height: 1.5;
      color: rgba(255,255,255,0.6);
      max-width: 150px;
    }

    .reveal-l {
      display: flex;
      flex-direction: column;
    }

    .book-card {
      position: relative;
      background: rgba(255,255,255,0.07);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(255,255,255,0.16);
      border-radius: 0;
      padding: 0 28px 28px;
      box-shadow: 0 24px 48px -22px rgba(0,0,0,0.5);
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease;
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
      margin-top: 0;
    }

    .book-card:hover {
      transform: translateY(-5px);
      border-color: rgba(110,231,160,0.4);
    }

    .book-card-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 19px;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255,255,255,0.14);
    }

    .dot-list {
      list-style: none;
      margin: 0 0 22px;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 13px;
      flex: 1;
    }

    .dot-list li {
      position: relative;
      padding-left: 22px;
      font-family: 'Inter', sans-serif;
      font-size: 14.5px;
      font-weight: 400;
      line-height: 1.6;
      color: rgba(255,255,255,0.85);
      opacity: 0;
    }

    .book-card.show .dot-list li,
    .reveal-l.show .dot-list li {
      animation: dotIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .dot-list li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 7px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #6ee7a0;
      box-shadow: 0 0 0 4px rgba(110,231,160,0.18);
    }

    .book-disclaimer {
      font-family: 'Inter', sans-serif;
      font-size: 12.5px;
      font-weight: 400;
      line-height: 1.6;
      color: rgba(255,255,255,0.5);
      margin: 0;
      padding-top: 18px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    @media (prefers-reduced-motion: reduce) {
      .book-section .reveal,
      .book-section .reveal-l,
      .dot-list li,
      .btn-primary,
      .book-card,
      .book-bg-img {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="book-section py-14 md:py-20">
        <div className="book-bg-img" />
        <div className="book-bg-overlay" />

        <div className="relative z-10 px-8 md:px-16 lg:px-20">
          {/* ─── Red eyebrow ─── */}
          <span className={`eyebrow eyebrow--red reveal ${inView ? "show" : ""}`}>
            Treatment Pathway
          </span>

          <h2 className={`book-heading reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.08s" }}>
            Book Hijama Cupping Therapy <em>with Care</em>
          </h2>

          <div className="book-grid">
            {/* Left column */}
            <div className={`reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.15s" }}>
              <p className="book-body">
                Hijama cupping therapy should be done with care, safety, respect, and proper guidance. Our treatment pathway
                helps clients understand what Hijama is, what to expect, and why screening and aftercare are important.
              </p>
              <p className="book-note">
                Hijama is not presented as a guaranteed cure. Clients with health concerns should seek professional medical advice where needed.
              </p>

              <Link href="/treatments/hijama" className="btn-primary">
                View Hijama Treatment →
              </Link>

              <div className="book-strip">
                <div className="book-strip-item" style={{ animationDelay: "0.45s" }}>
                  <span className="book-strip-num">Step 1</span>
                  <span className="book-strip-label">Screening &amp; consultation before treatment</span>
                </div>
                <div className="book-strip-item" style={{ animationDelay: "0.53s" }}>
                  <span className="book-strip-num">Step 2</span>
                  <span className="book-strip-label">Guided cupping with trained practitioners</span>
                </div>
                <div className="book-strip-item" style={{ animationDelay: "0.61s" }}>
                  <span className="book-strip-num">Step 3</span>
                  <span className="book-strip-label">Aftercare guidance &amp; follow-up support</span>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className={`reveal-l ${inView ? "show" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="book-card">
                <h3 className="book-card-title">Who May Need Hijama?</h3>
                <ul className="dot-list">
                  {dotList.map((item, i) => (
                    <li key={i} style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="book-disclaimer">
                  Clients with pregnancy, medication use, blood pressure issues, diabetes, anaemia, heart conditions,
                  or blood‑thinning medication should seek professional advice before treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}