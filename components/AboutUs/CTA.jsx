import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Full‑width card — outer border removed */}
      <div className="relative w-full rounded-3xl bg-white/[0.03] py-14 md:py-16 px-[24px] md:px-[48px] lg:px-[80px] overflow-hidden">
        {/* Soft radial glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-green-400/10 blur-3xl" />
        </div>

        {/* Faint geometric pattern */}
        <svg
          className="absolute inset-0 -z-10 w-full h-full opacity-[0.04]"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="ctaLattice" width="72" height="72" patternUnits="userSpaceOnUse">
              <path
                d="M36 4 L44 28 L68 28 L48 42 L56 66 L36 52 L16 66 L24 42 L4 28 L28 28 Z"
                fill="none"
                stroke="#4ADE80"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaLattice)" />
        </svg>

        {/* Content grid — full width, not center‑constrained */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center w-full">
          {/* Left: text + CTAs */}
          <div>
            <span className="inline-flex items-center gap-3 text-green-400 text-xs font-medium tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-green-400" />
              Get Started
              <span className="w-8 h-px bg-green-400" />
            </span>

            <h2 className="about-heading text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-4">
              Join the <em className="text-green-400 italic">Hijama Nation</em> Community
            </h2>

            <p className="about-body text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Whether you want to learn, book a treatment, or become a certified practitioner,
              we are here to guide you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/50"
              >
                Apply for Course
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 8h11M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="px-8 py-3 border border-white/30 hover:border-green-400 text-white hover:text-green-400 font-semibold rounded-full transition-all"
              >
                Book Treatment
              </Link>
            </div>
          </div>

          {/* Right: themed visual — stylized cupping-cup cluster + stat card */}
          <div className="relative hidden lg:flex items-center justify-center h-full min-h-[280px]">
            <svg
              viewBox="0 0 320 280"
              className="w-full h-full max-w-[320px]"
              fill="none"
            >
              {/* Cupping cups — overlapping circles evoking hijama cups */}
              <circle cx="120" cy="150" r="70" stroke="#4ADE80" strokeOpacity="0.25" strokeWidth="1.5" />
              <circle cx="120" cy="150" r="70" fill="#4ADE80" fillOpacity="0.05" />

              <circle cx="210" cy="100" r="46" stroke="#4ADE80" strokeOpacity="0.35" strokeWidth="1.5" />
              <circle cx="210" cy="100" r="46" fill="#4ADE80" fillOpacity="0.08" />

              <circle cx="230" cy="190" r="34" stroke="#4ADE80" strokeOpacity="0.4" strokeWidth="1.5" />
              <circle cx="230" cy="190" r="34" fill="#4ADE80" fillOpacity="0.1" />

              {/* rim highlight on largest cup */}
              <circle cx="120" cy="150" r="70" stroke="#4ADE80" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="2 6" />
            </svg>

            {/* Floating stat card */}
            <div className="absolute bottom-4 right-2 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-green-400 text-2xl font-serif font-semibold leading-none mb-1">500+</p>
              <p className="text-white/50 text-xs uppercase tracking-wide">Certified Practitioners</p>
            </div>

            <div className="absolute top-2 left-0 bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-green-400 text-2xl font-serif font-semibold leading-none mb-1">10k+</p>
              <p className="text-white/50 text-xs uppercase tracking-wide">Treatments Booked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}