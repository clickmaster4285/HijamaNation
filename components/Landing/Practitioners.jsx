import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const badgeImports = {
  grcct: "/images/five.png",
  pwa: "/images/four.png",
  approved: "/images/Global-22-Winner-19.jpg",
  westminster: "/images/sixww.png",
  award2021: "/images/st1.png",
  corporate: "/images/three.png",
  education: "/images/two.png",
};

/** @param {{ inView?: boolean, avatars?: string[][] }} props */
export default function PractitionersSection({ inView, avatars = /** @type {string[][]} */ ([]) }) {
  const badges = [
    { id: "grcct" },
    { id: "pwa" },
    { id: "approved" },
    { id: "westminster" },
    { id: "award2021" },
    { id: "corporate" },
    { id: "education" },
  ];

  const styles = `
    @keyframes fadeUp {
      0% { transform: translateY(24px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes stickerIn {
      0% { transform: translateY(14px) scale(0.9); opacity: 0; }
      100% { transform: translateY(0) scale(1); opacity: 1; }
    }

    @keyframes lineGrow {
      0% { width: 0; }
      100% { width: 48px; }
    }

    .pract-section {
      position: relative;
      overflow: hidden;
    }

    .pract-bg-glow {
      position: absolute;
      bottom: -15%;
      right: -10%;
      width: 30rem;
      height: 30rem;
      background: radial-gradient(circle, rgba(28,124,71,0.08) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    .pract-inner {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 0;
      align-items: stretch;
      background: #0f1c11;
      border: 1px solid rgba(28,124,71,0.25);
      opacity: 0;
    }

    .pract-inner.show {
      animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @media (max-width: 860px) {
      .pract-inner {
        grid-template-columns: 1fr;
      }
    }

    .pract-content {
      padding: 60px 56px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }

    @media (max-width: 860px) {
      .pract-content { padding: 48px 32px; }
    }

    .pract-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #52b788; /* lighter green for eyebrow */
    }

    .pract-rule {
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, #1c7c47, transparent);
      margin: 18px 0 22px;
    }

    .pract-inner.show .pract-rule {
      animation: lineGrow 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.25s;
    }

    .pract-heading {
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(28px, 3.2vw, 38px);
      font-weight: 500;
      color: #f4f1ea;
      line-height: 1.25;
      letter-spacing: 0.01em;
      margin: 0;
    }

    .pract-heading em {
      font-style: italic;
      color: #52b788; /* green accent for em */
    }

    .pract-body {
      font-size: 15px;
      line-height: 1.85;
      color: rgba(244,241,234,0.58);
      max-width: 440px;
      margin: 22px 0 0;
      font-weight: 300;
    }

    .pract-cta {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-top: 36px;
      background: transparent;
      color: #52b788; /* green CTA text */
      font-size: 12.5px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 16px 0;
      border-top: 1px solid rgba(28,124,71,0.3);
      border-bottom: 1px solid rgba(28,124,71,0.3);
      width: fit-content;
      transition: letter-spacing 0.35s ease, color 0.35s ease, border-color 0.35s ease;
    }

    .pract-cta:hover {
      letter-spacing: 0.18em;
      color: #6ee7a0; /* brighter green on hover */
      border-color: rgba(28,124,71,0.6);
    }

    .pract-visual {
      position: relative;
      background: #0a140c;
      border-left: 1px solid rgba(28,124,71,0.2);
      padding: 48px 32px 32px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media (max-width: 860px) {
      .pract-visual {
        border-left: none;
        border-top: 1px solid rgba(28,124,71,0.2);
        padding: 32px 24px 24px;
      }
    }

    .pract-visual-glow {
      position: absolute;
      top: -30%;
      right: -20%;
      width: 18rem;
      height: 18rem;
      background: radial-gradient(circle, rgba(28,124,71,0.12) 0%, transparent 70%);
      pointer-events: none;
    }

    .sticker-grid {
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 28px;
      margin: 0;
    }

    @media (max-width: 700px) {
      .sticker-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
    }

    @media (max-width: 480px) {
      .sticker-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }
    }

    .sticker-item {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      aspect-ratio: 1 / 1;
      width: 100%;
      background: transparent;
    }

    .sticker-item.show {
      animation: stickerIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    .sticker-item img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.25s ease;
      filter: saturate(1.05);
    }

    .sticker-item img:hover {
      transform: scale(1.08);
    }

    @media (prefers-reduced-motion: reduce) {
      .pract-inner, .sticker-item, .pract-rule, .pract-cta {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
        width: 48px !important;
      }
    }
  `;

  return (
    <section className="pract-section py-14 md:py-20">
      <style>{styles}</style>
      <div className="pract-bg-glow" />

      <div className="px-8 md:px-16 lg:px-20">
        <div className={`pract-inner ${inView ? "show" : ""}`}>
          <div className="pract-content">
            <span className="pract-eyebrow">
              <ShieldCheck size={13} strokeWidth={2} />
              Practitioner Network
            </span>
            <div className="pract-rule" />
            <h2 className="pract-heading">
              Certified Hijama <em>Practitioners</em>
            </h2>
            <p className="pract-body">
              Hijama Nation supports certified practitioners with recognition, directory listings, and registered member support.
              For clients, this creates trust connecting you with practitioners who are part of the Hijama Nation network.
            </p>
            <Link href="/practitioners/certified" className="pract-cta">
              Find Certified Practitioners →
            </Link>
          </div>

          <div className="pract-visual">
            <div className="pract-visual-glow" />
            <div className="sticker-grid">
              {badges.map((badge, i) => (
                <div
                  key={badge.id}
                  className={`sticker-item ${inView ? "show" : ""}`}
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