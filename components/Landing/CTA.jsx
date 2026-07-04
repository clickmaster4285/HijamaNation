const CONTACT = {
  email: "info@thehijamaacademy.com",
  phone: "+44 7547424623",
  whatsapp: "447547424623",
};

const waMessage = encodeURIComponent("Hi, I'd like to know more about Hijama Nation courses.");

const trustItems = ["UK-certified training", "4,000+ trained", "Est. 2011"];

const variants = {
  booking: {
    eyebrow: "Start your journey",
    headingLayout: (
      <>
        Start your{" "}
        <em style={{ fontStyle: "italic", color: "#5aad78" }}>Hijama</em>
        <br />journey today
      </>
    ),
    sub: "Get certified with the UK's leading Hijama training provider and serve your community with confidence.",
    showTrust: true,
  },
  enroll: {
    eyebrow: "Become certified",
    headingLayout: (
      <>
        Become a{" "}
        <em style={{ fontStyle: "italic", color: "#5aad78" }}>Certified</em>
        <br />Practitioner
      </>
    ),
    sub: "Gain the skills and confidence to serve your community with professional Hijama care.",
    showTrust: false,
  },
  community: {
    eyebrow: "Join us",
    headingLayout: (
      <>
        Join our{" "}
        <em style={{ fontStyle: "italic", color: "#5aad78" }}>Global</em>
        <br />Community
      </>
    ),
    sub: "Connect with thousands of practitioners worldwide and grow together.",
    showTrust: false,
  },
};

function ContactRow() {
  return (
    <div className="flex flex-col gap-3 mt-6">

      {/* Email */}
      <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/8 border border-white/12 shrink-0 group-hover:bg-white/15 transition-colors">
          <svg className="w-4 h-4 text-[#a8c4b0]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-[#7aaa8a] uppercase tracking-widest mb-0.5">Email us</p>
          <p className="text-[13px] text-[#e0f0e8] font-medium">{CONTACT.email}</p>
        </div>
      </a>

      {/* Phone */}
      <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/8 border border-white/12 shrink-0 group-hover:bg-white/15 transition-colors">
          <svg className="w-4 h-4 text-[#a8c4b0]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] text-[#7aaa8a] uppercase tracking-widest mb-0.5">Call us</p>
          <p className="text-[13px] text-[#e0f0e8] font-medium">{CONTACT.phone}</p>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=${waMessage}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 group"
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center border border-[#25d366]/40 bg-[#25d366]/15 shrink-0"
          style={{ animation: "waPulse 1.8s ease-in-out infinite" }}
        >
          <svg className="w-4 h-4" fill="#25d366" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
        <div>
          <p className="text-[13px] text-[#e0f0e8] font-medium">Chat with us instantly</p>
        </div>
      </a>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="bg-white/5 border border-white/10 rounded-2xl p-7">
      <p className="text-[15px] font-semibold text-[#f5ede0] mb-5 font-sans">
        Send us a message
      </p>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-[10px] text-[#7aaa8a] uppercase tracking-wider mb-1.5">First name</label>
          <input
            name="firstName"
            autoComplete="given-name"
            type="text"
            placeholder="Your first name"
            className="w-full bg-white/7 border border-white/12 rounded-lg px-3 py-2 text-[13px] text-[#f0ede8] placeholder-[#6b8a78] outline-none focus:border-[#5aad78]/50 transition-colors font-sans"
          />
        </div>
        <div>
          <label className="block text-[10px] text-[#7aaa8a] uppercase tracking-wider mb-1.5">Last name</label>
          <input
            name="lastName"
            autoComplete="family-name"
            type="text"
            placeholder="Your last name"
            className="w-full bg-white/7 border border-white/12 rounded-lg px-3 py-2 text-[13px] text-[#f0ede8] placeholder-[#6b8a78] outline-none focus:border-[#5aad78]/50 transition-colors font-sans"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="block text-[10px] text-[#7aaa8a] uppercase tracking-wider mb-1.5">Email</label>
        <input
          name="email"
          autoComplete="email"
          type="email"
          placeholder="your@email.com"
          className="w-full bg-white/7 border border-white/12 rounded-lg px-3 py-2 text-[13px] text-[#f0ede8] placeholder-[#6b8a78] outline-none focus:border-[#5aad78]/50 transition-colors font-sans"
        />
      </div>

      <div className="mb-3">
        <label className="block text-[10px] text-[#7aaa8a] uppercase tracking-wider mb-1.5">Phone</label>
        <input
          name="phone"
          autoComplete="tel"
          type="tel"
          placeholder="+44 7700..."
          className="w-full bg-white/7 border border-white/12 rounded-lg px-3 py-2 text-[13px] text-[#f0ede8] placeholder-[#6b8a78] outline-none focus:border-[#5aad78]/50 transition-colors font-sans"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[10px] text-[#7aaa8a] uppercase tracking-wider mb-1.5">Message</label>
        <textarea
          name="message"
          rows={3}
          placeholder="How can we help you?"
          className="w-full bg-white/7 border border-white/12 rounded-lg px-3 py-2 text-[13px] text-[#f0ede8] placeholder-[#6b8a78] outline-none focus:border-[#5aad78]/50 transition-colors resize-none font-sans"
        />
      </div>

      <button type="submit" className="w-full bg-[#1c7c47] hover:bg-[#165f38] text-white font-sans font-bold text-sm py-3 rounded-full transition-colors duration-200">
        Send message
      </button>
    </form>
  );
}

/**
 * @param {{ variant?: string, headline?: any, subtext?: any, buttonText?: any, buttonLink?: any }} props
 */
export default function CTASection({ variant = "booking", headline, subtext, buttonText, buttonLink }) {
  const v = variants[variant] || variants.booking;
  const headingVal = headline ?? v.headingLayout;
  const subVal = subtext ?? v.sub;

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          50%       { box-shadow: 0 0 0 8px rgba(37,211,102,0); }
        }
      `}</style>

      {/* ─── Removed my-10, added py-14 md:py-20 directly ─── */}
      <section className="bg-[#1c3a2a] relative overflow-hidden py-14 md:py-20">
        <div
          className="bg-[#2d5a3f] absolute inset-0 opacity-30"
          style={{ clipPath: "ellipse(60% 40% at 50% 0%)" }}
        />

        <div className="relative z-10 px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.13em] uppercase text-[#e07a5f] mb-4">
                {v.eyebrow}
              </p>

              <h2
                className="font-serif font-bold text-[#f5ede0] leading-tight mb-4"
                style={{ fontSize: "clamp(30px, 3.5vw, 44px)" }}
              >
                {headingVal}
              </h2>

              <p className="text-[#a8c4b0] font-sans text-base leading-relaxed">
                {subVal}
              </p>

              <div className="border-t border-white/10 my-6" />

              <ContactRow />

              {v.showTrust && (
                <div className="flex flex-wrap gap-4 mt-6">
                  {trustItems.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[11px] text-[#7aaa8a] font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4a85a] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}