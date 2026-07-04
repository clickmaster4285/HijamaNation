"use client";

import { useState } from "react";

export default function Hero() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <>
      {/* Custom animation for blinking WhatsApp icon */}
      <style>{`
        @keyframes whatsappBlink {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { transform: scale(1.08); box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0.4); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
        }
        .whatsapp-blink {
          animation: whatsappBlink 1.5s ease-in-out infinite;
        }
      `}</style>

      <section className="about-hero relative overflow-hidden pt-36 md:pt-44 lg:pt-52 pb-14 md:pb-20 bg-green-950 px-6 md:px-12 lg:px-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/contact.png"
            alt="Contact background"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Dark overlay – 60% for better contrast */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        {/* Subtle pattern */}
        <svg className="absolute inset-0 z-10 w-full h-full opacity-[0.06]" preserveAspectRatio="none">
          <defs>
            <pattern id="starLattice" width="72" height="72" patternUnits="userSpaceOnUse">
              <path
                d="M36 4 L44 28 L68 28 L48 42 L56 66 L36 52 L16 66 L24 42 L4 28 L28 28 Z"
                fill="none"
                stroke="#4ADE80"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#starLattice)" />
        </svg>

        <div className="relative z-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Left content – more top padding now: pt-20 md:pt-24 */}
          <div className="pt-20 md:pt-24">
            <span className="inline-flex items-center gap-3 text-green-400 text-sm font-medium tracking-widest uppercase mb-4">
              <span className="w-10 h-px bg-green-400" />
              About Us
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 drop-shadow-lg">
              Reviving <span className="text-green-400 italic">Hijama</span>
              <br />
              with Knowledge &amp; Purpose
            </h1>

            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-sans drop-shadow-md">
              Founded in 2011, Hijama Nation is a UK‑based platform dedicated to restoring the
              Sunnah of Hijama Cupping Therapy through education, safe practice, and community.
            </p>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 pt-6 border-t border-white/10">
              {[
                { value: "2011", label: "Established" },
                { value: "GRCCT", label: "Recognized" },
                { value: "UK", label: "Based" },
              ].map((item) => (
                <div key={item.label} className="flex items-baseline gap-2">
                  <span className="text-white font-serif text-xl md:text-2xl drop-shadow">{item.value}</span>
                  <span className="text-white/60 text-xs uppercase tracking-wider font-sans">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact form – unchanged */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/25 rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <span className="block text-green-400 text-xs font-medium tracking-widest uppercase mb-2 drop-shadow">
              Get in touch
            </span>
            <h2 className="font-serif text-white text-2xl mb-6 drop-shadow">Ask us anything</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-white/70 text-xs uppercase tracking-wider mb-1.5 font-sans drop-shadow">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className="w-full bg-white/15 border border-white/25 rounded-lg px-4 py-2.5 text-white placeholder-white/50 text-sm outline-none focus:border-green-400/60 focus:bg-white/20 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-white/70 text-xs uppercase tracking-wider mb-1.5 font-sans drop-shadow">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="w-full bg-white/15 border border-white/25 rounded-lg px-4 py-2.5 text-white placeholder-white/50 text-sm outline-none focus:border-green-400/60 focus:bg-white/20 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-white/70 text-xs uppercase tracking-wider mb-1.5 font-sans drop-shadow">Phone (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+44 ..."
                  className="w-full bg-white/15 border border-white/25 rounded-lg px-4 py-2.5 text-white placeholder-white/50 text-sm outline-none focus:border-green-400/60 focus:bg-white/20 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-white/70 text-xs uppercase tracking-wider mb-1.5 font-sans drop-shadow">Message</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="How can we help?"
                  className="w-full bg-white/15 border border-white/25 rounded-lg px-4 py-2.5 text-white placeholder-white/50 text-sm outline-none focus:border-green-400/60 focus:bg-white/20 transition-colors resize-none font-sans"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                className="w-full bg-[#1c7c47] hover:bg-[#165f38] text-white font-medium text-sm uppercase tracking-wider rounded-lg py-3 mt-2 transition-colors disabled:opacity-60 font-sans shadow-lg shadow-[#1c7c47]/30"
              >
                {status === "sent" ? "Message sent" : status === "sending" ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp button with blinking animation */}
      <a
        href="https://wa.me/1234567890" // ← Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-colors duration-300 whatsapp-blink"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}