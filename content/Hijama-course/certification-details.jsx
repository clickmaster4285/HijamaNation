// components/content/HijamaCourse/CertificationContent.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// ─── Shared animation variants ─────────────────────────────
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
};

// ─── Helper: split N cards into rows ──────────────────────
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

function CardRows({ items, renderItem, itemVariants = popIn, className = "" }) {
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
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`space-y-4 ${className}`}
    >
      {rows.map((row, ri) => (
        <div key={ri} className={`grid gap-4 ${colClass(row.length)}`}>
          {row.map((item, ii) => (
            <motion.div key={ri * 10 + ii} variants={itemVariants} className="h-full">
              {renderItem(item)}
            </motion.div>
          ))}
        </div>
      ))}
    </motion.div>
  );
}

// ─── Hero Section ──────────────────────────────────────────
function CertificationHero() {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I'd like to know more about Hijama certification.");

  return (
    <section className="hero relative min-h-[80vh] flex items-start overflow-hidden px-6 md:px-12 lg:px-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/hijamaCourse.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/40" />

      <div className="relative z-10 pt-48 pb-8 max-w-4xl w-full">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
            Certification · Est. 2011
          </span>
        </div>

        <h1 className="font-serif text-white leading-[1.05] mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            Certification
          </span>
          <br />
          <span className="text-white/90">Details & Requirements</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl italic font-light font-serif mb-3">
          Your Pathway to Becoming a Certified Hijama Practitioner.
        </p>

        <p className="text-white/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
          At Hijama Nation, certification is a formal recognition that a practitioner has met a rigorous standard of knowledge, skill, hygiene practice, and client care.
        </p>

        <div className="flex items-center gap-6 mb-8">
          <span className="flex items-center gap-1.5 text-white/70 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong className="text-white">8</strong> certification steps</span>
          </span>
          <span className="w-px h-6 bg-white/10" />
          <span className="flex items-center gap-1.5 text-white/70 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong className="text-white">100%</strong> competency-based</span>
          </span>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="font-serif text-2xl font-bold text-white">6</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Requirements</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white">2</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Assessments</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white">Lifetime</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Alumni Access</div>
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

// ─── Reusable eyebrow ───────────────────────────────────────
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

// ─── Reusable side-card – now stretches and centers content ──
function SideCard({ tone = "dark", children, className = "" }) {
  const base =
    tone === "dark"
      ? "bg-white/[0.04] border border-green-500/20 backdrop-blur-sm"
      : "bg-white border border-green-200 shadow-lg shadow-green-900/5";
  return (
    <div className={`rounded-2xl p-8 md:p-10 flex flex-col justify-center h-full ${base} ${className}`}>
      {children}
    </div>
  );
}

// Small icon wrapper
function IconCircle({ tone = "dark", children }) {
  const base = tone === "dark" ? "bg-green-500/15 text-green-400" : "bg-green-100 text-green-600";
  return (
    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${base}`}>
      {children}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 1 — Why Certification Matters (DARK)
// ══════════════════════════════════════════════════════════
function WhyMattersSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 via-transparent to-green-900/10" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cert-pattern-1" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cert-pattern-1)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-left flex flex-col justify-center"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="dark">Why It Matters</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-6">
            Why <span className="text-green-400 italic font-medium">Certification</span> Matters
          </motion.h2>
          <motion.div variants={fadeLeft} className="space-y-4 max-w-2xl">
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              Hijama cupping therapy involves direct contact with skin, controlled use of cupping equipment, and in the case of wet cupping, minor skin incisions. Because of this, proper training and certification are not optional extras — they are the foundation of safe, ethical, and effective practice.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              A recognized certification demonstrates to clients, employers, and regulatory bodies that a practitioner has met a genuine standard — not just attended a class.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              For clients, certification offers peace of mind. For practitioners, it offers legitimacy, protection, and a pathway to build a trusted, sustainable practice.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle tone="dark">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </IconCircle>
              <h3 className="font-serif text-lg text-white">A Certification Confirms</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Structured training from qualified instructors",
                "Supervised hands-on practice before independent work",
                "Formal assessment of theory and technique",
                "Ongoing commitment to hygiene and conduct standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 2 — Certification Pathway (LIGHT)
// ══════════════════════════════════════════════════════════
function PathwaySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(#16a34a_0.8px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8"
          >
            <Eyebrow tone="light">Pathway</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-4">
              The <span className="text-green-600 italic">Certification Pathway</span>
            </h2>
            <p className="text-green-700/70 text-base md:text-lg max-w-2xl">
              Our certification process follows a clear, structured pathway so you always know where you stand and what comes next.
            </p>
          </motion.div>

          <CardRows
            items={pathwaySteps}
            renderItem={(step) => (
              <div className="h-full bg-white p-5 rounded-xl border border-green-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all text-left">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                  {pathwaySteps.indexOf(step) + 1}
                </div>
                <h3 className="font-semibold text-green-950">{step.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{step.description}</p>
              </div>
            )}
          />
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="lg:sticky lg:top-24">
            <div className="text-center mb-2">
              <span className="font-serif text-6xl font-bold text-green-600">6</span>
            </div>
            <p className="text-center text-green-800 font-semibold mb-6">Steps to Certification</p>
            <div className="space-y-3">
              {pathwaySteps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-600 text-xs">{step.title}</span>
                </div>
              ))}
            </div>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 3 — What You'll Receive (DARK)
// ══════════════════════════════════════════════════════════
function ReceiveSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <div className="flex flex-col justify-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-left mb-8"
          >
            <motion.div variants={fadeLeft}>
              <Eyebrow tone="dark">What You'll Receive</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
              Upon <span className="text-green-400 italic font-medium">Certification</span>
            </motion.h2>
          </motion.div>

          <CardRows
            items={receivedItems}
            renderItem={(item) => (
              <div className="h-full flex items-start gap-3 bg-white/[0.04] border border-green-500/15 p-4 rounded-xl">
                <span className="text-green-400 text-lg mt-0.5 shrink-0">✓</span>
                <span className="text-white/75 text-sm md:text-base">{item}</span>
              </div>
            )}
          />
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0f1a12] to-[#0a0f1a] border-2 border-green-500/30 p-8 md:p-10 flex flex-col justify-center h-full">
            <div className="absolute inset-3 border border-green-400/20 rounded-xl pointer-events-none" />
            <div className="relative text-center">
              <p className="text-green-400/70 text-[10px] tracking-[0.3em] uppercase mb-4">Certificate of Completion</p>
              <div className="w-14 h-14 mx-auto rounded-full border-2 border-green-400/60 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-serif italic text-white/90 text-lg mb-1">Hijama Cupping Therapy</p>
              <div className="w-16 h-px bg-green-400/40 mx-auto my-4" />
              <p className="text-white/40 text-xs tracking-widest uppercase">Awarded to</p>
              <div className="h-px bg-white/10 my-3 w-3/4 mx-auto" />
              <p className="text-white/40 text-[11px] mt-6">Hijama Nation · Birmingham, UK</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 4 — Requirements (LIGHT)
// ══════════════════════════════════════════════════════════
function RequirementsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10 max-w-3xl"
        >
          <Eyebrow tone="light">Requirements</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-4">
            Certification <span className="text-green-600 italic">Requirements</span>
          </h2>
          <p className="text-green-700/70 text-base md:text-lg">
            To be awarded certification, students must meet each of the following requirements — non-negotiable minimums designed to protect both practitioner and client.
          </p>
        </motion.div>

        <CardRows
          items={requirements}
          renderItem={(req) => (
            <div className="h-full bg-white rounded-xl border border-green-200 p-6 hover:border-green-300 hover:shadow-md transition-all text-left">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center mb-4">
                {requirements.indexOf(req) + 1}
              </div>
              <h3 className="font-semibold text-lg text-green-950 mb-2">{req.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{req.description}</p>
            </div>
          )}
        />
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 5 — Assessment Method (DARK)
// ══════════════════════════════════════════════════════════
function AssessmentSection() {
  const blocks = [
    {
      title: "Practical Assessment",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      intro: "Conducted in person, observed and scored by a qualified instructor using a standardized checklist:",
      items: [
        "Client consultation and informed consent",
        "Skin preparation and hygiene setup",
        "Correct cup selection and placement",
        "Suction technique and duration management",
        "Client comfort checks throughout the session",
        "Safe removal of cups and aftercare explanation",
      ],
    },
    {
      title: "Theory Examination",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      intro: "The written exam covers:",
      items: [
        "Anatomy and physiology relevant to cupping placement",
        "Recognized contraindications and when to decline treatment",
        "Infection control and sterilization standards",
        "Aftercare instructions and how to communicate them",
        "Recognizing adverse reactions and response steps",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cert-pattern-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cert-pattern-2)" />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-left flex flex-col justify-center"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="dark">Assessment</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8">
            How You're <span className="text-green-400 italic font-medium">Evaluated</span>
          </motion.h2>

          <div className="space-y-8 max-w-2xl">
            {blocks.map((block) => (
              <motion.div key={block.title} variants={fadeLeft}>
                <h3 className="font-semibold text-lg text-white mb-2">{block.title}</h3>
                <p className="text-white/60 text-sm mb-3">{block.intro}</p>
                <ul className="space-y-1.5">
                  {block.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="text-green-400 mt-0.5">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div variants={fadeLeft}>
              <h3 className="font-semibold text-lg text-white mb-2">Ongoing Assessment</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Instructors track student progress throughout the course. This continuous feedback loop means the final assessment is a confirmation of demonstrated competence, not a single high-stakes test.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark" className="lg:sticky lg:top-24">
            <h3 className="font-serif text-lg text-white mb-6">Assessment Breakdown</h3>
            <div className="space-y-5">
              {blocks.map((block) => (
                <div key={block.title} className="flex items-start gap-3">
                  <IconCircle tone="dark">{block.icon}</IconCircle>
                  <div>
                    <p className="text-white text-sm font-semibold">{block.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{block.items.length} evaluated areas</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <IconCircle tone="dark">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="text-white text-sm font-semibold">Ongoing Assessment</p>
                  <p className="text-white/50 text-xs mt-0.5">Tracked across the full course</p>
                </div>
              </div>
            </div>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 6 — Validity & Renewal (LIGHT)
// ══════════════════════════════════════════════════════════
function ValiditySection() {
  const facts = [
    { label: "Validity period", value: "1–3 years (per policy)" },
    { label: "Renewal process", value: "Refresher + safety briefing" },
    { label: "Continuing education", value: "Periodic refresher workshops" },
    { label: "Lapse policy", value: "Reassessment may be required" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left flex flex-col justify-center"
        >
          <Eyebrow tone="light">Validity &amp; Renewal</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-6">
            Validity &amp; <span className="text-green-600 italic">Renewal</span>
          </h2>
          <div className="space-y-4 max-w-2xl text-gray-700 leading-relaxed">
            <p>
              Certification is issued with a defined validity period, after which renewal is required to remain listed as an actively certified practitioner. This is standard practice across most therapy and bodywork certifications.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong className="text-green-950">Validity period:</strong> [Insert your specific policy — commonly 1–3 years]</li>
              <li><strong className="text-green-950">Renewal process:</strong> A shorter refresher session, updated hygiene briefing, and confirmation of continued practice</li>
              <li><strong className="text-green-950">Continuing education:</strong> Practitioners are encouraged to attend periodic refresher workshops</li>
              <li><strong className="text-green-950">Lapse policy:</strong> A lapsed certification may require a comprehensive refresher or reassessment</li>
            </ul>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="lg:sticky lg:top-24">
            <h3 className="font-serif text-lg text-green-950 mb-6">At a Glance</h3>
            <div className="space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="pb-3 border-b border-green-100 last:border-0 last:pb-0">
                  <p className="text-green-700/60 text-xs uppercase tracking-wide">{f.label}</p>
                  <p className="text-green-950 font-medium text-sm mt-1">{f.value}</p>
                </div>
              ))}
            </div>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 7 — After You're Certified (DARK)
// ══════════════════════════════════════════════════════════
function AfterSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <div className="flex flex-col justify-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-left mb-8"
          >
            <motion.div variants={fadeLeft}>
              <Eyebrow tone="dark">After Certification</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
              After You're <span className="text-green-400 italic font-medium">Certified</span>
            </motion.h2>
          </motion.div>

          <CardRows
            items={afterCertification}
            renderItem={(item) => (
              <div className="h-full flex items-start gap-3 bg-white/[0.04] border border-green-500/15 p-4 rounded-xl">
                <span className="text-green-400 text-lg mt-0.5 shrink-0">✓</span>
                <span className="text-white/75 text-sm md:text-base">{item}</span>
              </div>
            )}
          />
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark" className="text-center lg:sticky lg:top-24">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a4 4 0 11-8 0" />
              </svg>
            </div>
            <p className="font-serif text-2xl text-white mb-1">Alumni Network</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Join a growing community of certified practitioners for peer support, referrals, and shared learning.
            </p>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 8 — Compliance (LIGHT)
// ══════════════════════════════════════════════════════════
function ComplianceSection() {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I have a question about certification compliance.");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8"
          >
            <Eyebrow tone="light">Compliance</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15]">
              Compliance &amp; Professional <span className="text-green-600 italic">Considerations</span>
            </h2>
          </motion.div>

          <CardRows
            items={complianceItems}
            renderItem={(item) => (
              <div className="h-full bg-white rounded-xl border border-green-200 p-6 hover:shadow-md transition-all text-left">
                <h3 className="font-semibold text-lg text-green-950 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            )}
          />
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="lg:sticky lg:top-24">
            <h3 className="font-serif text-lg text-green-950 mb-3">Need Help With Compliance?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our team can walk you through insurance, local registration, and documentation requirements before you start practicing.
            </p>
            <a
              href={`https://wa.me/${waNumber}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Ask on WhatsApp
              <span>→</span>
            </a>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 9 — FAQ (DARK)
// Kept as a full-width accordion list — Q&A reads better at full
// width than squeezed into 1/3-width cards
// ══════════════════════════════════════════════════════════
function FaqSection({ expandedFaq, toggleFaq }) {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I have a question about Hijama certification.");

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cert-pattern-3" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cert-pattern-3)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-stretch">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-left mb-8"
          >
            <Eyebrow tone="dark">FAQ</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
              Frequently Asked <span className="text-green-400 italic">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4"
          >
            {certFaqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeLeft}
                className="bg-white/[0.04] border border-green-500/20 backdrop-blur-sm rounded-xl overflow-hidden hover:border-green-400/40 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-white/[0.03] transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <span className="text-green-400 text-2xl flex-shrink-0">
                    {expandedFaq === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-white/60">{faq.answer}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark" className="text-center lg:sticky lg:top-24">
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
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 10 — Closing CTA (DARK, HIJAMA STYLE)
// ══════════════════════════════════════════════════════════
function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(74,222,128,0.15)_0.8px,transparent_1px)] bg-[length:24px_24px] [mask-image:radial-gradient(circle_at_50%_40%,black_0%,transparent_70%)]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(circle,rgba(34,197,94,0.16)_0%,transparent_65%)] pointer-events-none animate-pulse-slow" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full text-left"
      >
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-green-400" />
          <span className="text-green-400 text-xs font-semibold tracking-[0.2em] uppercase">Start Your Journey</span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-green-400" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-6">
          Ready to Begin Your <span className="text-green-400 italic">Certification</span> Journey?
        </h2>

        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          Our certification requirements exist to make sure every practitioner who completes our program
          is genuinely ready to practice safely, hygienically, and with confidence.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/hijama-course"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-300 hover:scale-105"
          >
            Explore the Course →
          </Link>
          <Link
            href="/hijama-course/course-curriculum"
            className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-green-400 hover:text-green-400 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            View Curriculum
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Main Component ────────────────────────────────────────
export default function CertificationContent() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const toggleFaq = (index) => setExpandedFaq(expandedFaq === index ? null : index);

  return (
    <>
      <CertificationHero />
      <WhyMattersSection />
      <PathwaySection />
      <ReceiveSection />
      <RequirementsSection />
      <AssessmentSection />
      <ValiditySection />
      <AfterSection />
      <ComplianceSection />
      <FaqSection expandedFaq={expandedFaq} toggleFaq={toggleFaq} />
      <ClosingCta />
    </>
  );
}

// ─── Data ──────────────────────────────────────────────────

const pathwaySteps = [
  {
    title: "Enrollment & Orientation",
    description: "After enrolling, you'll receive an orientation covering course structure, expectations, required materials, and a breakdown of how certification is earned.",
  },
  {
    title: "Core Theory Modules",
    description: "Work through structured theory content covering the history of Hijama, anatomy, physiology, contraindications, hygiene, and client consultation practices.",
  },
  {
    title: "Practical Training",
    description: "Hands-on sessions under direct instructor supervision, building technique from equipment handling to full treatment simulation.",
  },
  {
    title: "Supervised Practice Sessions",
    description: "Complete a set number of supervised practice sessions on models or through structured peer practice, with instructor feedback after each session.",
  },
  {
    title: "Final Assessment",
    description: "Combines a practical evaluation and a written theory examination to confirm competence in all areas.",
  },
  {
    title: "Certification Issuance",
    description: "Once all requirements are met and assessments are passed, your certificate is issued along with supporting documentation.",
  },
];

const receivedItems = [
  "An official Certificate of Completion, clearly stating the course name, training hours completed, and date of certification",
  "A digital copy (PDF) and a printed copy for your records",
  "A unique certificate reference number for verification",
  "A skills and competency summary outlining techniques and knowledge areas assessed",
  "Guidance on professional listing and presenting your qualification",
  "Access to an alumni support channel for ongoing questions and updates",
];

const requirements = [
  {
    title: "Full Attendance of Core Training",
    description: "All theory and practical modules must be completed. Where a student misses a session due to unavoidable circumstances, a makeup session must be arranged before progressing.",
  },
  {
    title: "Successful Completion of the Practical Assessment",
    description: "Students must demonstrate correct technique across the full treatment process, including communication with the client throughout.",
  },
  {
    title: "A Passing Score on the Theory Examination",
    description: "The written examination tests understanding of anatomy, contraindications, hygiene standards, and aftercare. A structured resit opportunity is available for those who don't pass first time.",
  },
  {
    title: "Demonstrated Understanding of Hygiene, Safety, and Aftercare Protocols",
    description: "Instructors evaluate hygiene practice throughout all supervised sessions, including equipment sterilization and safe handling of biological material.",
  },
  {
    title: "Completion of Supervised Hands-On Practice",
    description: "A minimum number of supervised sessions must be completed and signed off by an instructor before a student is eligible to sit the final assessment.",
  },
  {
    title: "Professional Conduct Standards",
    description: "Throughout training, students are expected to maintain professionalism, respect client boundaries, and follow instructor guidance on safe practice.",
  },
];

const afterCertification = [
  "A recognized qualification you can confidently present to clients, employers, or insurers",
  "Ongoing access to support resources, including updated guidance documents and protocol refreshers",
  "A community of fellow practitioners through our alumni network",
  "Guidance on setting up practice, whether in a clinic, independently, or as a mobile service",
  "Support with compliance considerations, including insurance and informed consent documentation",
];

const complianceItems = [
  {
    title: "Insurance",
    description: "Most practitioners will need professional liability insurance before practicing independently. Certification is often a prerequisite insurers require before issuing cover.",
  },
  {
    title: "Local Authority Registration",
    description: "Depending on your local council area, practices involving skin-piercing procedures may require special treatment licensing. It's the practitioner's responsibility to check local requirements.",
  },
  {
    title: "Informed Consent Documentation",
    description: "Certified practitioners are expected to use proper consent forms and maintain accurate client records, particularly around contraindications and health history.",
  },
  {
    title: "Hygiene Compliance",
    description: "Ongoing adherence to sterilization and single-use equipment standards is expected as a condition of maintaining active certification status.",
  },
];

const certFaqs = [
  {
    question: "Do I need any prior experience before starting the course?",
    answer: "No prior experience is required. The course is structured to take students from foundational knowledge through to full practical competency.",
  },
  {
    question: "What happens if I don't pass the theory exam on my first attempt?",
    answer: "You'll be offered a structured resit opportunity, along with guidance on which areas to focus on before retaking the exam.",
  },
  {
    question: "Is the practical assessment done on real clients or models?",
    answer: "Supervised practice sessions are conducted under controlled, instructor-supervised conditions. The specific format is outlined during orientation.",
  },
  {
    question: "Can I list my certification on professional directories or insurance applications?",
    answer: "Yes. Your certificate includes a unique reference number specifically so it can be verified by third parties such as insurers, employers, or directory listings.",
  },
  {
    question: "What if my certification lapses?",
    answer: "A lapsed certification typically requires a refresher session or reassessment before reinstatement, rather than starting the full course over.",
  },
];