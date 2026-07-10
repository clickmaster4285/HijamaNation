// components/content/HijamaCourse/CurriculumContent.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// ─── Shared animation variants ─────────────────────────────
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};
const clipReveal = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  show: { opacity: 1, clipPath: "inset(0 0% 0 0)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// "Bomb" / burst entrance — small, twisted, and compressed, then
// snaps open with an over-rotating spring.
const burstIn = {
  hidden: { opacity: 0, scale: 0.35, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 320, damping: 16, mass: 0.7 },
  },
};

const stagger = (gap = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

// ─── Helper: split N cards into rows of 3, or 2+2 for four, etc ──
function chunkSizes(n) {
  const sizes = [];
  let remaining = n;
  while (remaining > 0) {
    if (remaining === 4) {
      sizes.push(2, 2);
      remaining = 0;
    } else if (remaining >= 3) {
      sizes.push(3);
      remaining -= 3;
    } else {
      sizes.push(remaining);
      remaining = 0;
    }
  }
  return sizes;
}

function CardRows({ items, renderItem, rowVariants = stagger(), itemVariants = burstIn, className = "" }) {
  const sizes = chunkSizes(items.length);
  let cursor = 0;
  const rows = sizes.map((size) => {
    const chunk = items.slice(cursor, cursor + size);
    cursor += size;
    return chunk;
  });

  const colClass = (size) =>
    size === 1 ? "grid-cols-1" : size === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`space-y-4 ${className}`}
    >
      {rows.map((row, ri) => (
        <div key={ri} className={`grid gap-4 ${colClass(row.length)}`}>
          {row.map((item, ii) => (
            <motion.div key={ri * 10 + ii} variants={itemVariants}>
              {renderItem(item)}
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

// ─── Hero Section ──────────────────────────────────────────
function CurriculumHero() {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I'd like to know more about the Hijama course curriculum.");

  return (
    <section className="hero relative min-h-screen flex items-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/hijamaCourse.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/40" />

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-20">
        <div className="pt-64 pb-8 max-w-4xl w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
              Comprehensive Curriculum · Est. 2011
            </span>
          </div>

          <h1 className="font-serif text-white leading-[1.05] mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Hijama Course
            </span>
            <br />
            <span className="text-white/90">Curriculum</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl lg:text-2xl italic font-light font-serif mb-3">
            A Complete Guide to Structured Training.
          </p>

          <p className="text-white/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
            Explore our comprehensive hijama course curriculum – from foundations and anatomy to
            hands-on training, safety protocols, and certification.
          </p>

          <div className="flex items-center gap-6 mb-8">
            <span className="flex items-center gap-1.5 text-white/70 text-sm">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong className="text-white">8</strong> comprehensive modules</span>
            </span>
            <span className="w-px h-6 bg-white/10" />
            <span className="flex items-center gap-1.5 text-white/70 text-sm">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span><strong className="text-white">100+</strong> topics covered</span>
            </span>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="font-serif text-2xl font-bold text-white">8</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Modules</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Topics</div>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-white">Lifetime</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href={`https://wa.me/${waNumber}?text=${waMessage}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 group animate-float"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 animate-ping opacity-75"></span>
      </a>
    </section>
  );
}

// ─── Section eyebrow label ─────────────────────────────────
function Eyebrow({ children, tone = "dark" }) {
  const line = tone === "dark" ? "bg-green-400/60" : "bg-green-600";
  const text = tone === "dark" ? "text-green-400" : "text-green-600";
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`w-10 h-px ${line}`} />
      <span className={`${text} text-xs md:text-sm font-semibold tracking-[0.2em] uppercase`}>
        {children}
      </span>
    </div>
  );
}

// ─── SECTION 1: Overview (dark) ──────────────────────────
function OverviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 via-transparent to-green-900/10" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="curriculum-pattern-1" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#curriculum-pattern-1)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-left"
          >
            <motion.div variants={fadeLeft} transition={{ duration: 0.6 }}>
              <Eyebrow tone="dark">Overview</Eyebrow>
            </motion.div>
            <motion.h2
              variants={clipReveal}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-6"
            >
              Why the Right Hijama Course{" "}
              <span className="text-green-400 italic font-medium">Curriculum Matters</span>
            </motion.h2>
            <motion.div variants={fadeLeft} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4 max-w-2xl">
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                Before diving into the modules, it's worth understanding why curriculum structure matters so much in hijama training. Cupping therapy involves direct contact with skin, controlled micro-incisions, and blood — meaning safety, hygiene, and precision are non-negotiable. A poorly structured course might teach you where to place cups, but skip over critical topics like contraindications, infection control, or how to handle client reactions during a session.
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                Our curriculum was built to avoid these gaps entirely. Every module builds on the previous one, ensuring you understand not just the "how" but the "why" behind every technique.
              </p>
            </motion.div>
          </motion.div>

          {/* Right-side emblem */}
          <motion.div
            variants={burstIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border border-green-500/25 bg-white/[0.03] flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-green-500/15" />
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-green-400/80" fill="none" stroke="currentColor" strokeWidth="1.4">
                <ellipse cx="50" cy="58" rx="28" ry="22" />
                <path d="M50 36 C 44 28, 44 18, 50 10 C 56 18, 56 28, 50 36 Z" opacity="0.6" />
                <path d="M30 58 a20 20 0 0040 0" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: Curriculum Modules (light) ──────────────
function ModulesSection({ expanded, toggle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(#16a34a_0.8px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left mb-14"
        >
          <Eyebrow tone="light">Curriculum Modules</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15]">
            Eight Modules,{" "}
            <span className="text-green-600 italic">One Clear Path</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, i) => {
            // Only this card is open if expanded === i
            const isOpen = expanded === i;
            const isPast = expanded !== null && i <= expanded;

            return (
              <motion.div
                key={i}
                variants={burstIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 18, mass: 0.7, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className={`relative bg-white rounded-2xl border shadow-lg shadow-green-900/5 overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-green-400 shadow-xl shadow-green-900/10"
                    : "border-green-200 hover:border-green-300 hover:shadow-xl"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{
                        backgroundColor: isPast ? "#16a34a" : "#dcfce7",
                        color: isPast ? "#ffffff" : "#166534",
                        scale: isOpen ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.35 }}
                      className="relative shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg font-bold ring-4 ring-white"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl md:text-2xl text-green-800 mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {mod.description}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-medium">
                        <span>{isOpen ? "Hide topics" : "Show topics"}</span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[4.5rem]">
                        <div className="bg-green-50 rounded-xl p-4">
                          <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-2">
                            Topics covered
                          </p>
                          <ul className="space-y-1.5 text-gray-700 text-sm md:text-base">
                            {mod.topics.map((topic, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: idx * 0.04 }}
                                className="flex items-start gap-2"
                              >
                                <span className="text-green-500 mt-0.5">▸</span>
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: What Makes Us Different (dark) ──────────
function DifferentSection() {
  const points = [
    "Balanced theory and practice — Ours is deliberately balanced so you graduate with real, tested skill.",
    "Safety-first design — Hygiene and contraindication training are core modules, not afterthoughts.",
    "Real-world business preparation — We prepare you to build a client base and run a sustainable practice.",
    "Ongoing support — Graduates get continued access to resources and updates through our blog.",
    "Instructor-led supervision — Every practical module includes direct instructor feedback.",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />
      <div className="absolute -top-20 left-1/3 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10"
        >
          <Eyebrow tone="dark">Why Choose Us</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
            What Makes Our Curriculum{" "}
            <span className="text-green-400 italic font-medium">Different</span>
          </h2>
        </motion.div>

        <CardRows
          items={points}
          itemVariants={burstIn}
          renderItem={(item) => (
            <div className="h-full flex items-start gap-3 bg-white/[0.04] border border-green-500/20 backdrop-blur-sm p-5 rounded-xl text-left hover:border-green-400/40 transition-colors">
              <span className="text-green-400 text-xl mt-0.5 shrink-0">✓</span>
              <span className="text-white/75 text-sm md:text-base leading-relaxed">{item}</span>
            </div>
          )}
        />
      </div>
    </section>
  );
}

// ─── SECTION 4: Who This Is For (light) ──────────────────
function AudienceSection() {
  const audience = [
    "Complete beginners with no prior medical or therapy experience",
    "Healthcare professionals looking to expand their service offerings",
    "Existing cupping practitioners wanting formal certification",
    "Entrepreneurs planning to open a hijama or wellness clinic",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100 py-20 md:py-28">
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10"
        >
          <Eyebrow tone="light">Audience</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15]">
            Who This Curriculum Is <span className="text-green-600 italic">For</span>
          </h2>
        </motion.div>

        <CardRows
          items={audience}
          itemVariants={burstIn}
          renderItem={(item) => (
            <div className="h-full flex items-center gap-3 bg-white p-5 rounded-xl border border-green-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all text-left">
              <span className="text-green-600 text-xl shrink-0">🎯</span>
              <span className="text-gray-700 text-sm md:text-base">{item}</span>
            </div>
          )}
        />
      </div>
    </section>
  );
}

// ─── SECTION 5: FAQ (dark) ──────────────────────────────
function FaqSection() {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I have a question about the hijama course curriculum.");

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="curriculum-pattern-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#curriculum-pattern-2)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-left mb-10"
            >
              <Eyebrow tone="dark">FAQ</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
                Frequently Asked <span className="text-green-400 italic">Questions</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4"
            >
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={burstIn}
                  className="bg-white/[0.04] border border-green-500/20 backdrop-blur-sm rounded-xl p-6 hover:border-green-400/40 transition-colors text-left"
                >
                  <h3 className="font-semibold text-lg text-white mb-2 flex items-start gap-3">
                    <span className="text-green-400">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-white/60 pl-8 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={burstIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="rounded-2xl bg-white/[0.04] border border-green-500/20 backdrop-blur-sm p-7 md:p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.9A8.86 8.86 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="font-serif text-xl text-white mb-2">Still Have Questions?</p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Message us directly and we'll walk you through anything not covered here.
              </p>
              <a
                href={`https://wa.me/${waNumber}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-400 text-white text-sm font-semibold px-5 py-3 rounded-full transition-opacity hover:opacity-90"
              >
                Chat on WhatsApp
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 6: Final CTA ────────────────────────────────
const ctaBenefits = [
  "Complete a structured, 8-module curriculum",
  "Practice hands-on under expert supervision",
  "Learn safety, hygiene & contraindication protocols",
  "Graduate ready for certification",
];

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] w-full py-[70px] md:py-[100px]">
      <style>{`
        .ccta-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(74,222,128,0.15) 0.8px, transparent 1px);
          background-size: 24px 24px;
          mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 70%);
          z-index: 0;
        }
        .ccta-glow {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 700px;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 65%);
          z-index: 0;
          pointer-events: none;
          animation: ccta-pulse 6s ease-in-out infinite;
        }
        @keyframes ccta-pulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.08); }
        }
        .ccta-check-item {
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .ccta-check-item:hover {
          border-color: rgba(34,197,94,0.35);
          background: rgba(34,197,94,0.06);
        }
        .ccta-btn-primary {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .ccta-btn-primary:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 16px 40px rgba(34,197,94,0.48);
        }
        .ccta-btn-primary:hover svg { transform: translateX(3px); }
        .ccta-btn-primary svg { transition: transform 0.3s ease; }
        .ccta-btn-secondary { transition: all 0.3s ease; }
        .ccta-btn-secondary:hover {
          border-color: rgba(74,222,128,0.6);
          color: #4ade80;
          background: rgba(34,197,94,0.08);
        }
      `}</style>

      <div className="ccta-grid-pattern" />
      <div className="ccta-glow" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 lg:gap-12 items-center"
        >
          {/* Left side content */}
          <div>
            <motion.div variants={fadeLeft} transition={{ duration: 0.6 }} className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-px bg-gradient-to-r from-transparent to-green-500" />
              <span className="text-green-400 text-xs font-semibold tracking-[0.14em] uppercase">Start Today</span>
              <span className="w-9 h-px bg-gradient-to-l from-transparent to-green-500" />
            </motion.div>

            <motion.h2
              variants={clipReveal}
              className="font-serif text-white leading-[1.15] mb-5 text-left"
              style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
            >
              Ready to Master the Full <span className="text-green-500 italic">Curriculum?</span>
            </motion.h2>

            <motion.p variants={fadeLeft} transition={{ duration: 0.6 }} className="text-white/70 text-base leading-[1.7] mb-8 text-left max-w-2xl">
              From foundational history to hands-on clinical practice to business setup, every module
              in this Online Hijama Certification Course has a clear purpose in your development.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left w-full">
              {ctaBenefits.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={burstIn}
                  className="ccta-check-item flex items-start gap-2.5 py-2.5 px-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mt-px">
                    <svg className="w-[11px] h-[11px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/85 text-sm leading-snug">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeLeft} transition={{ duration: 0.6 }} className="text-green-400 font-semibold text-sm mb-8 text-left">
              Enroll today and take your first step toward certification.
            </motion.p>

            <motion.div variants={burstIn} className="flex flex-wrap gap-4 mb-7 justify-start">
              <Link
                href="/hijama-course"
                className="ccta-btn-primary inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-full"
                style={{ background: "linear-gradient(135deg, #22c55e, #15803d)", boxShadow: "0 12px 30px rgba(34,197,94,0.32)" }}
              >
                Enroll Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/hijama-certification"
                className="ccta-btn-secondary inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-full border border-white/25"
              >
                View Certification
              </Link>
            </motion.div>

            <motion.div variants={fadeLeft} transition={{ duration: 0.6 }} className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/10 w-full">
              <span className="flex items-center gap-1.5 text-white/50 text-[13px]">
                <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
                Since 2011
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-[13px]">
                <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                8 Structured Modules
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-[13px]">
                <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12.5 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
                4,000+ Trained
              </span>
            </motion.div>
          </div>

          {/* Right side decorative element */}
          <motion.div
            variants={burstIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border border-green-500/25 bg-white/[0.03] flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-green-500/15" />
              <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28 text-green-400/80" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="18" y="25" width="64" height="50" rx="4" />
                <path d="M30 35 L70 35 M30 45 L65 45 M30 55 L60 55" />
                <circle cx="50" cy="70" r="4" fill="currentColor" opacity="0.5" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Component ────────────────────────────────────────
export default function CurriculumContent() {
  const [expanded, setExpanded] = useState(null);
  const toggle = (i) => setExpanded(expanded === i ? null : i);

  return (
    <>
      <CurriculumHero />
      <OverviewSection />
      <ModulesSection expanded={expanded} toggle={toggle} />
      <DifferentSection />
      <AudienceSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

// ─── Module Data ──────────────────────────────────────────
const modules = [
  {
    title: "Foundations of Hijama and Cupping Therapy",
    topics: [
      "The history and origins of cupping therapy across civilizations",
      "Hijama in Islamic tradition and Prophetic medicine (Tibb-e-Nabawi)",
      "The physiological mechanism of wet cupping",
      "Differences between wet cupping, dry cupping, and massage cupping",
      "Overview of modern scientific research supporting cupping therapy",
    ],
    description:
      "This module ensures every student starts with the same solid foundation before moving into more technical content.",
  },
  {
    title: "Anatomy and Physiology for Cupping Practitioners",
    topics: [
      "Skin structure and layers relevant to cupping incisions",
      "Circulatory system basics: arteries, veins, and capillaries",
      "Major muscle groups and safe cupping zones",
      "Nerve pathways and areas requiring extra caution",
      "Lymphatic system and its role in detoxification through hijama",
    ],
    description:
      "This module is taught with direct application in mind, connecting every anatomical concept to a practical question.",
  },
  {
    title: "Hygiene, Sterilization, and Infection Control",
    topics: [
      "Single-use equipment standards and disposal protocols",
      "Sterilization techniques for reusable tools",
      "Personal protective equipment (PPE) requirements",
      "Bloodborne pathogen awareness and prevention",
      "Setting up a compliant, hygienic treatment space",
      "Legal and regulatory hygiene standards by region",
    ],
    description:
      "Improper hygiene is the single biggest risk factor in cupping therapy – this module treats it with the seriousness it deserves.",
  },
  {
    title: "Hijama Points and Treatment Protocols",
    topics: [
      "Standard hijama points used in traditional and clinical practice",
      "Condition-specific cupping protocols",
      "Point selection based on client intake and presenting symptoms",
      "Combining hijama with complementary techniques",
      "Session sequencing and frequency recommendations",
    ],
    description:
      "Learn how much nuance is involved in point selection and how to think critically about each case.",
  },
  {
    title: "Client Consultation, Contraindications, and Safety Screening",
    topics: [
      "Conducting a thorough client health history and consultation",
      "Absolute and relative contraindications",
      "Recognizing red flags that require medical referral",
      "Informed consent procedures and documentation",
      "Managing client expectations and aftercare guidance",
    ],
    description:
      "Many practitioners underestimate how much of successful hijama practice happens before a single cup is placed.",
  },
  {
    title: "Practical Training and Supervised Hands-On Sessions",
    topics: [
      "Step-by-step live demonstrations of the full hijama procedure",
      "Supervised practice sessions on models under instructor guidance",
      "Technique refinement: cup placement, suction control, and incision technique",
      "Managing client comfort and communication during treatment",
      "Troubleshooting common issues",
    ],
    description:
      "This is consistently the module students describe as most transformative – where theory 'clicks' into physical skill.",
  },
  {
    title: "Aftercare, Client Follow-Up, and Building a Hijama Practice",
    topics: [
      "Proper wound care and aftercare instructions for clients",
      "Scheduling follow-up sessions and long-term treatment plans",
      "Record-keeping and client management systems",
      "Basic business setup: pricing, marketing, and client acquisition",
      "Building trust and long-term client relationships",
    ],
    description:
      "This module addresses the gap between clinical skill and building a sustainable practice.",
  },
  {
    title: "Certification Assessment and Final Evaluation",
    topics: [
      "Written examination covering all theoretical modules",
      "Practical skills assessment with a live or simulated session",
      "Case study submission and review",
      "Final feedback and personalized improvement recommendations",
    ],
    description:
      "The final stage ensures every graduate meets a consistent, high standard before receiving certification.",
  },
];

// ─── FAQ Data ──────────────────────────────────────────────
const faqs = [
  {
    question: "Do I need a medical background to enroll?",
    answer:
      "No. Our curriculum is structured to be accessible to beginners while still meeting the standards expected by healthcare professionals.",
  },
  {
    question: "Is certification recognized internationally?",
    answer:
      "Certification standards vary by country and regulatory body. We recommend checking your local requirements alongside our hijama certification page for details.",
  },
  {
    question: "Will I get to practice on real clients during training?",
    answer:
      "Yes — supervised hands-on practice is a core, non-negotiable part of Module 6, ensuring you're client-ready by graduation.",
  },
  {
    question: "What happens after I complete the course?",
    answer:
      "Graduates receive certification, aftercare and business-building guidance, and ongoing access to updated resources through our blog and practitioner community.",
  },
];