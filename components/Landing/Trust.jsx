import { ShieldCheck } from "lucide-react";

/**
 * @param {{ inView?: boolean, badges?: string[] }} props
 */
export default function TrustSection({ inView = true, badges = /** @type {string[]} */ ([]) }) {
  const styles = `
    @keyframes fadeUp {
      0% { transform: translateY(18px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }

    @keyframes drift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(3%, -4%) scale(1.06); }
    }

    @keyframes drift2 {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(-4%, 3%) scale(1.08); }
    }

    @keyframes shimmer {
      0% { background-position: -150% 0; }
      100% { background-position: 250% 0; }
    }

    .trust-fade {
      animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      opacity: 0;
    }

    .trust-blob-a {
      animation: drift 14s ease-in-out infinite;
    }

    .trust-blob-b {
      animation: drift2 17s ease-in-out infinite;
    }

    .trust-divider {
      position: relative;
      overflow: hidden;
    }

    .trust-divider::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.65) 50%,
        transparent 100%
      );
      background-size: 200% 100%;
      animation: shimmer 2.4s ease-in-out infinite;
      animation-delay: 1s;
    }

    .eyebrow-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgba(255, 138, 101, 0.15);
      flex-shrink: 0;
      transition: background 0.3s ease, transform 0.3s ease;
    }

    .eyebrow-icon svg {
      width: 14px;
      height: 14px;
      stroke: #ff8a65;
      stroke-width: 2.5;
    }

    .eyebrow:hover .eyebrow-icon {
      background: rgba(255, 138, 101, 0.25);
      transform: scale(1.05);
    }

    @media (prefers-reduced-motion: reduce) {
      .trust-fade, .trust-blob-a, .trust-blob-b, .trust-divider::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      {/* ─── Removed 'hn-section' and added vertical padding ─── */}
      <section className="trust-section relative overflow-hidden py-14 md:py-20">
        {/* Ambient background field */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="trust-blob-a absolute -top-24 -right-16 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
          <div className="trust-blob-b absolute -bottom-24 -left-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-emerald-400/[0.04] rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
        </div>

        {/* ─── Inner container with same padding as CTASection ─── */}
        <div className="relative z-10 px-8 md:px-16 lg:px-20">
          <div className="trust-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left – text */}
            <div
              className={`trust-fade ${inView ? "show" : ""}`}
              style={{ animationDelay: inView ? "0s" : undefined }}
            >
              <span className="eyebrow eyebrow--coral inline-flex items-center gap-2 mb-2">
                <span className="eyebrow-icon">
                  <ShieldCheck />
                </span>
                <span>Trusted &amp; Recognised</span>
              </span>
              <h2 className="trust-heading text-3xl md:text-4xl font-bold leading-tight">
                Professional <em className="text-green-600 not-italic">Recognition</em> You Can Rely On
              </h2>
              <div className="trust-divider w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-3 mb-5" />
              <p className="trust-body text-base leading-relaxed max-w-lg">
                Hijama Nation is an organised platform with professional recognition, training provider approval pathways,
                practitioner membership options, insurance connections, and award recognition in the complementary therapy field.
              </p>
              {badges && badges.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {badges.map((b) => (
                    <span key={b} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/6 text-gray-100">
                      {b}
                    </span>
                  ))}
                </div>
              )}
              <p className="trust-note text-sm italic mt-4 border-l-2 border-green-400/40 pl-4">
                We do not present Hijama as government-certified medical treatment. Our focus is professional training,
                safe practice, responsible treatment, and trusted practitioner support.
              </p>
            </div>

            {/* Right – image with increased width */}
            <div
              className={`trust-fade ${inView ? "show" : ""} flex justify-center`}
              style={{ animationDelay: inView ? "0.12s" : undefined }}
            >
              <img
                src="/images/Homemakers & Housewives.png"
                alt="Hijama Nation community – homemakers and practitioners"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-2xl shadow-2xl object-contain border border-white/10 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}