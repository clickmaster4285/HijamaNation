export default function UmmAmaar() {
  return (
    <>
      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.12; }
        }
        .pattern-overlay {
          animation: dotPulse 4s ease-in-out infinite;
        }
        @keyframes imageFloat {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }
        .image-float {
          animation: imageFloat 4s ease-in-out infinite;
        }
      `}</style>

      <section className="about-section relative overflow-hidden py-14 md:py-20 px-6 md:px-12 lg:px-20">
        {/* Animated dark green dot pattern */}
        <div className="absolute inset-0 pointer-events-none pattern-overlay">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="dark-green-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#166534" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dark-green-dots)" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Left column now wider, gap reduced */}
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8 items-center">
            {/* Left – text content */}
            <div className="relative order-2 lg:order-1">
              <span
                aria-hidden="true"
                className="absolute -top-14 -left-2 font-serif text-green-400/15 text-[10rem] leading-none select-none pointer-events-none"
              >
                &ldquo;
              </span>

              <span className="relative inline-flex items-center gap-3 text-green-400 text-sm font-medium tracking-widest uppercase mb-4">
                <span className="w-10 h-px bg-green-400" />
                Meet Our Co‑Founder
              </span>

              {/* Removed max-w-xl so text fills the space */}
              <h2 className="about-heading relative text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6">
                Umm Amaar
              </h2>

              <p className="about-body relative text-white/70 text-base md:text-lg leading-relaxed mb-8">
                <span className="text-green-400 font-medium">Co‑Founder &amp; COO</span> – Certified
                Hijama Practitioner, Holistic Therapy Practitioner and Public Speaker. Her passion for
                Traditional Islamic Medicine, Complementary and Alternative Natural Medicine has been
                a driving force behind the growth and establishment of Hijama Cupping Therapy in the UK.
                She is strongly motivated to educate and empower women in all aspects of mind, body and
                soul. She has trained hundreds of women globally to become successful Certified Hijama
                Practitioners and Businesswomen.
              </p>

              {/* Removed max-w-xl from the footer as well */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-sm font-serif">UA</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Umm Amaar</p>
                  <p className="text-white/50 text-xs">Co‑Founder &amp; COO · Hijama Nation</p>
                </div>
              </div>
            </div>

            {/* Right – image with 5:4 aspect ratio (matches AboutSection) */}
            <div className="relative order-1 lg:order-2 image-float">
              <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-white/5">
                <img
                  src="/images/ummAmaar.png"
                  alt="Umm Amaar - Co-Founder of Hijama Nation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-center lg:text-left">
                <p className="text-white font-serif text-lg">Umm Amaar</p>
                <p className="text-green-400 text-xs uppercase tracking-widest mt-1">
                  Co‑Founder &amp; COO · Hijama Nation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}