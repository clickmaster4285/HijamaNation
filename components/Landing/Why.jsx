import {
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
  HeartHandshake,
  ClipboardCheck,
  Compass,
  BookOpen,
  Stethoscope,
} from "lucide-react";

const ICONS = [
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
  HeartHandshake,
  ClipboardCheck,
  Compass,
  BookOpen,
  Stethoscope,
];

export default function WhySection({ whyItems, inView, bgImage = undefined }) {
  // Default background image – replace with your own or keep null to show only color
  const backgroundImage =
    bgImage ||
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80";

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700;800&display=swap');

    @keyframes fadeUp {
      0% { transform: translateY(22px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes cardIn {
      0% { transform: translateY(24px) scale(0.97); opacity: 0; }
      100% { transform: translateY(0) scale(1); opacity: 1; }
    }

    .why-section {
      position: relative;
      overflow: hidden;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* ─── Background image ─── */
    .why-bg-image {
      position: absolute;
      inset: 0;
      background-image: url("${backgroundImage}");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 0;
      filter: saturate(1.05) brightness(0.95);
    }

    /* ─── Lighter overlay – makes image visible ─── */
    .why-bg-overlay {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.55); /* ← lighter: 55% opacity white */
      z-index: 1;
    }

    .why-bg-glow {
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translateX(-50%);
      width: 40rem;
      height: 40rem;
      background: radial-gradient(circle, rgba(28,124,71,0.05) 0%, transparent 70%);
      pointer-events: none;
      z-index: 2;
    }

    .why-section .reveal {
      opacity: 0;
    }
    .why-section .reveal.show {
      animation: fadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    /* ─── Eyebrow (coral) ─── */
    .eyebrow--coral {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      display: inline-block;
      color: #e05c2a;
      margin-bottom: 8px;
    }

    .why-heading {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(30px, 3.8vw, 46px);
      font-weight: 700;
      color: #1a2e1a;
      line-height: 1.15;
      margin: 10px 0 0;
      max-width: 620px;
    }

    .why-heading em {
      font-style: italic;
      color: #1c7c47;
      font-weight: 500;
    }

    .why-body {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.7;
      color: rgba(26,46,26,0.72);
      max-width: 560px;
      margin: 14px 0 0;
    }

    .why-grid {
      position: relative;
      z-index: 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
      margin-top: 40px;
    }

    @media (max-width: 880px) {
      .why-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 520px) {
      .why-grid {
        grid-template-columns: 1fr;
      }
    }

    .why-card {
      opacity: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 18px;
      background: rgba(255,255,255,0.85); /* slightly transparent so the bg shows through subtly */
      backdrop-filter: blur(4px);
      border: 1px solid rgba(26,46,26,0.08);
      padding: 28px 24px;
      transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                  box-shadow 0.4s ease,
                  border-color 0.4s ease;
    }

    .why-card.show {
      animation: cardIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .why-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 0%;
      background: linear-gradient(180deg, #1c7c47, #2fa86a);
      transition: height 0.45s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .why-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px -18px rgba(26,46,26,0.2);
      border-color: rgba(28,124,71,0.22);
    }

    .why-card:hover::before {
      height: 100%;
    }

    .why-card-icon {
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(28,124,71,0.2);
      color: #1c7c47;
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1),
                  background 0.3s ease,
                  border-color 0.3s ease;
    }

    .why-card-icon svg {
      width: 22px;
      height: 22px;
      stroke: currentColor;
      fill: none;
      stroke-width: 1.7;
    }

    .why-card:hover .why-card-icon {
      transform: scale(1.08) rotate(-4deg);
      background: rgba(28,124,71,0.08);
      border-color: rgba(28,124,71,0.4);
    }

    .why-card-label {
      font-family: 'Inter', sans-serif;
      font-size: 15.5px;
      font-weight: 600;
      color: #1a2e1a;
      line-height: 1.45;
    }

    /* ─── Content wrapper stays above everything ─── */
    .why-content {
      position: relative;
      z-index: 4;
    }

    @media (prefers-reduced-motion: reduce) {
      .why-section .reveal,
      .why-card,
      .why-card-icon,
      .why-card::before {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="why-section py-14 md:py-20">
        {/* ─── Background image ─── */}
        <div className="why-bg-image" />
        <div className="why-bg-overlay" />
        <div className="why-bg-glow" />

        {/* ─── Content ─── */}
        <div className="why-content px-8 md:px-16 lg:px-20">
          <span className={`eyebrow eyebrow--coral reveal ${inView ? "show" : ""}`}>Why Hijama Nation</span>
          <h2 className={`why-heading reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.08s" }}>
            Why People Choose <em>Hijama Nation</em>
          </h2>
          <p className={`why-body reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.16s" }}>
            For students, a structured course. For clients, treatment guidance and care. For practitioners, recognition and community.
          </p>

          <div className="why-grid">
            {whyItems.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={i}
                  className={`why-card ${inView ? "show" : ""}`}
                  style={{ animationDelay: `${0.22 + i * 0.07}s` }}
                >
                  <span className="why-card-icon">
                    <Icon strokeWidth={1.7} />
                  </span>
                  <span className="why-card-label">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}