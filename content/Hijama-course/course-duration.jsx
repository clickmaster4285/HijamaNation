// components/content/HijamaCourse/CourseDurationContent.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
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

// "Bomb" / burst entrance  compressed and twisted, then snaps open
// with an over-rotating spring. Used on every card/checklist-item/
// content block across the page; headings keep the calmer fade.
const burstIn = {
  hidden: { opacity: 0, scale: 0.4, rotate: -8 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 17, mass: 0.7 },
  },
};

const stagger = (gap = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

// ─── Icon set (replaces emoji with consistent stroke icons) ──
const iconProps = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

function IconBookOpen(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 6.5c-1.6-1.3-3.7-2-6.5-2A1 1 0 004.5 5.5v12A1 1 0 005.5 18.5c2.8 0 4.9.7 6.5 2 1.6-1.3 3.7-2 6.5-2a1 1 0 001-1v-12a1 1 0 00-1-1c-2.8 0-4.9.7-6.5 2z" />
      <path d="M12 6.5v14" />
    </svg>
  );
}
function IconStethoscope(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M6 4v6a4 4 0 008 0V4M6 4H4.5M14 4h1.5" />
      <path d="M10 14v2a5 5 0 0010 0v-2.5" />
      <circle cx="20" cy="10.5" r="1.6" />
    </svg>
  );
}
function IconGraduationCap(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5 2.5 9z" />
      <path d="M6 11v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V11" />
      <path d="M21.5 9v5" />
    </svg>
  );
}
function IconMoon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M20.5 14.5A8.5 8.5 0 119.5 3.5a7 7 0 0011 11z" />
    </svg>
  );
}
function IconSunrise(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 18h16M6.5 15a5.5 5.5 0 0111 0" />
      <path d="M12 7V4M5 10l1.8 1.8M19 10l-1.8 1.8" />
      <path d="M2 21h20" />
    </svg>
  );
}
function IconLaptop(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="4" y="4.5" width="16" height="11" rx="1.2" />
      <path d="M2 19.5h20l-1.5-2.5h-17L2 19.5z" />
    </svg>
  );
}
function IconClipboardList(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a1 1 0 011-1h4a1 1 0 011 1v1H9V4zM9.5 12h5M9.5 15.5h5M9.5 8.5h5" />
    </svg>
  );
}
function IconPencilLine(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M13.5 5.5l5 5L8 21H3v-5L13.5 5.5z" />
      <path d="M11.5 7.5l5 5" />
    </svg>
  );
}
function IconCalendarDays(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
    </svg>
  );
}
function IconChatBubble(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.9A8.86 8.86 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}
function IconAlertTriangle(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 3.5L21.5 20h-19L12 3.5z" />
      <path d="M12 9.5v4.2M12 17h.01" />
    </svg>
  );
}

// ─── Hero Section ──────────────────────────────────────────
function CourseDurationHero() {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I'd like to know more about course duration and schedule.");

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
            Course Duration · Est. 2011
          </span>
        </div>

        <h1 className="font-serif text-white leading-[1.05] mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            Course Duration
          </span>
          <br />
          <span className="text-white/90">& Schedule</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl italic font-light font-serif mb-3">
          A Clear Timeline for Your Training Journey.
        </p>

        <p className="text-white/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
          One of the most common questions we get before enrollment is simple: how long does this actually take? You're planning around work, family, and other commitments  you deserve a clear answer.
        </p>

        <div className="flex items-center gap-6 mb-8">
          <span className="flex items-center gap-1.5 text-white/70 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong className="text-white">8</strong> modules</span>
          </span>
          <span className="w-px h-6 bg-white/10" />
          <span className="flex items-center gap-1.5 text-white/70 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong className="text-white">3</strong> format options</span>
          </span>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="font-serif text-2xl font-bold text-white">[X]</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Total Weeks</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white">3</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Format Options</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white">Flexible</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Schedule</div>
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

// ─── Reusable components ──────────────────────────────────
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

function SideCard({ tone = "dark", children, className = "" }) {
  const base =
    tone === "dark"
      ? "bg-white/[0.04] border border-green-500/20 backdrop-blur-sm"
      : "bg-white border border-green-200 shadow-lg shadow-green-900/5";
  return (
    <motion.div
      variants={burstIn}
      className={`rounded-2xl p-7 md:p-8 transition-all duration-300 hover:shadow-xl ${
        tone === "dark" ? "hover:border-green-400/40" : "hover:border-green-300"
      } ${base} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function IconCircle({ tone = "dark", children }) {
  const base = tone === "dark" ? "bg-green-500/15 text-green-400" : "bg-green-100 text-green-600";
  return (
    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${base}`}>
      {children}
    </div>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 1  Total Course Length (LIGHT)
// ══════════════════════════════════════════════════════════
function TotalLengthSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(#16a34a_0.8px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger()}
          className="text-left"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="light">Overview</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-6">
            Total <span className="text-green-600 italic">Course Length</span>
          </motion.h2>
          <motion.p variants={fadeLeft} className="text-green-700/70 text-base md:text-lg leading-relaxed mb-6">
            The course is designed to be completed in <strong>[X weeks/months  insert your actual duration]</strong>, covering all 8 curriculum modules, supervised practical sessions, and final assessment.
          </motion.p>
          <motion.div variants={fadeLeft} className="space-y-4 max-w-2xl text-gray-700 leading-relaxed">
            <p>
              This timeline reflects what it genuinely takes to build real competency  not the minimum time needed to sit through some lectures and collect a certificate.
            </p>
            <p>
              We'd rather be upfront: a properly structured cupping therapy course cannot be rushed into a weekend. Between theory, hands-on practice, and repetition of technique under supervision, the timeline reflects what safe, confident practice actually requires.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="lg:sticky lg:top-24">
            <div className="text-center mb-4">
              <span className="font-serif text-5xl font-bold text-green-600">[X]</span>
              <p className="text-green-800 font-semibold text-sm mt-1">Total Weeks</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0">8</span>
                <span className="text-gray-600 text-sm">Curriculum Modules</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-gray-600 text-sm">Supervised Practical Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-gray-600 text-sm">Final Assessment & Certification</span>
              </div>
            </div>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 2  How the Schedule Is Structured (DARK)
// ══════════════════════════════════════════════════════════
function StructureSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 via-transparent to-green-900/10" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="duration-pattern-1" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#duration-pattern-1)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10"
        >
          <Eyebrow tone="dark">Structure</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-4">
            How the Schedule Is <span className="text-green-400 italic font-medium">Structured</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {structureItems.map((item, i) => (
            <motion.div
              key={i}
              variants={burstIn}
              whileHover={{ y: -6 }}
              className="bg-white/[0.04] border border-green-500/20 rounded-2xl p-8 transition-colors hover:border-green-400/40 hover:bg-white/[0.06]"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mb-5 text-green-400">
                <item.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 3  Class Format Options (LIGHT)
// ══════════════════════════════════════════════════════════
function FormatOptionsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <div className="text-left">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger()}>
            <motion.div variants={fadeLeft}>
              <Eyebrow tone="light">Format Options</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-6">
              Class <span className="text-green-600 italic">Format Options</span>
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-green-700/70 text-base md:text-lg leading-relaxed mb-6">
              We understand that not everyone can commit to the same schedule, which is why we offer a few different formats:
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4 max-w-2xl"
          >
            {formatOptions.map((option, i) => (
              <motion.div
                key={i}
                variants={burstIn}
                className="flex items-start gap-3 bg-white p-4 rounded-xl border border-green-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all"
              >
                <span className="shrink-0 w-9 h-9 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                  <option.Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                </span>
                <div>
                  <h3 className="font-semibold text-green-950">{option.title}</h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle tone="light">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </IconCircle>
              <h3 className="font-serif text-lg text-green-950">Choose What Fits</h3>
            </div>
            <ul className="space-y-3">
              {["Weekday evening classes", "Weekend intensive format", "Self-paced theory + fixed practicals"].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-green-700/60 text-xs mt-4">
              We can talk through which option suits you best before you enroll.
            </p>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 4  What Affects Your Personal Timeline (DARK)
// ══════════════════════════════════════════════════════════
function TimelineFactorsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="duration-pattern-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#duration-pattern-2)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10"
        >
          <Eyebrow tone="dark">Factors</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-4">
            What Affects Your <span className="text-green-400 italic font-medium">Personal Timeline</span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {timelineFactors.map((factor, i) => (
            <motion.div
              key={i}
              variants={burstIn}
              whileHover={{ y: -6 }}
              className="bg-white/[0.04] border border-green-500/20 rounded-2xl p-8 transition-colors hover:border-green-400/40 hover:bg-white/[0.06]"
            >
              <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mb-5 text-green-400">
                <factor.Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{factor.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{factor.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 5  Why No Fast-Track (LIGHT)
// ══════════════════════════════════════════════════════════
function NoFastTrackSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger()}
          className="text-left"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="light">Why No Fast-Track</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-6">
            Why We Don't Offer a <span className="text-green-600 italic">"Fast-Track"</span> Shortcut
          </motion.h2>
          <motion.div variants={fadeLeft} className="space-y-4 max-w-2xl text-gray-700 leading-relaxed">
            <p>
              You may come across other providers offering same-day or single-weekend Hijama certification. We intentionally don't offer this, and it's worth explaining why.
            </p>
            <p>
              Genuine competency in cupping therapy requires repetition  of hygiene protocols, of cup placement, of reading client responses, of handling the incision process safely for wet cupping. This isn't something that can be reliably built in a few compressed hours, no matter how good the instructor is.
            </p>
            <p className="text-green-700/70 italic">
              A rushed course might produce a certificate, but it won't reliably produce a practitioner who's actually ready to work safely with real clients.
            </p>
            <p>
              Our course length exists because we'd rather graduate practitioners who are genuinely prepared than practitioners who simply attended for the minimum time required to receive a document.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="text-center lg:sticky lg:top-24">
            <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-5 text-amber-600">
              <IconAlertTriangle className="w-7 h-7" strokeWidth={1.7} />
            </div>
            <h3 className="font-serif text-xl text-green-950 mb-3">Quality Over Speed</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Genuine competency requires repetition, supervision, and time to develop the muscle memory and judgment needed for safe practice.
            </p>
            <div className="inline-block bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <span className="text-green-700 text-xs font-semibold">No Shortcuts to Safety</span>
            </div>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 6  What a Typical Week Looks Like (DARK)
// ══════════════════════════════════════════════════════════
function TypicalWeekSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <div className="text-left">
          <motion.div variants={stagger()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeLeft}>
              <Eyebrow tone="dark">Typical Week</Eyebrow>
            </motion.div>
            <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-6">
              What a <span className="text-green-400 italic font-medium">Typical Week</span> Looks Like
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4 max-w-2xl"
          >
            {typicalWeekItems.map((item, i) => (
              <motion.div
                key={i}
                variants={burstIn}
                className="flex items-start gap-3 bg-white/[0.04] border border-green-500/15 p-4 rounded-xl hover:border-green-400/35 transition-colors"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-green-500/15 text-green-400 flex items-center justify-center mt-0.5">
                  <item.Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                </span>
                <span className="text-white/75 text-sm md:text-base">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark" className="lg:sticky lg:top-24">
            <h3 className="font-serif text-lg text-white mb-4">Weekly Rhythm</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-sm font-bold">1-2</span>
                <div>
                  <p className="text-white text-sm font-semibold">Theory Sessions</p>
                  <p className="text-white/50 text-xs">Module content with Q&A</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-sm font-bold">1</span>
                <div>
                  <p className="text-white text-sm font-semibold">Practical Session</p>
                  <p className="text-white/50 text-xs">Build on previous techniques</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">Independent Review</p>
                  <p className="text-white/50 text-xs">Prepare for assessments</p>
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
// SECTION 7  FAQ (DARK)  smooth height-auto accordion
// ══════════════════════════════════════════════════════════
function FaqSection({ expandedFaq, toggleFaq }) {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I have a question about course duration and schedule.");

  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="duration-pattern-3" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#duration-pattern-3)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <div>
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
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4"
          >
            {durationFaqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <motion.div
                  key={index}
                  variants={burstIn}
                  className={`bg-white/[0.04] border rounded-xl overflow-hidden transition-colors ${
                    isOpen ? "border-green-400/50" : "border-green-500/20 hover:border-green-400/40"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-white/[0.03] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-inset"
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-green-400 text-2xl flex-shrink-0 leading-none"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-white/60">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark" className="text-center lg:sticky lg:top-24">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-5">
              <IconChatBubble className="w-7 h-7 text-green-400" strokeWidth={1.5} />
            </div>
            <p className="font-serif text-xl text-white mb-2">Still Deciding on a Schedule?</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              If you're unsure which format fits your availability, our team is happy to talk through the options and help you map out a realistic timeline.
            </p>
            <a
              href={`https://wa.me/${waNumber}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-400 text-white text-sm font-semibold px-5 py-3 rounded-full transition-opacity hover:opacity-90"
            >
              Chat with Us
              <span>→</span>
            </a>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 8  Closing CTA (rebuilt in the Hijama FinalCTA style)
// ══════════════════════════════════════════════════════════
const ctaBenefits = [
  "Three flexible formats to fit your schedule",
  "A clear, structured weekly rhythm",
  "No rushed shortcuts  real competency takes time",
  "Instructor support between every session",
];

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] w-full py-[70px] md:py-[100px] px-6 md:px-12 lg:px-20">
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
        .ccta-check-item { transition: border-color 0.3s ease, background 0.3s ease; }
        .ccta-check-item:hover { border-color: rgba(34,197,94,0.35); background: rgba(34,197,94,0.06); }
        .ccta-btn-primary { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease; }
        .ccta-btn-primary:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 16px 40px rgba(34,197,94,0.48); }
        .ccta-btn-primary:hover svg { transform: translateX(3px); }
        .ccta-btn-primary svg { transition: transform 0.3s ease; }
        .ccta-btn-secondary { transition: all 0.3s ease; }
        .ccta-btn-secondary:hover { border-color: rgba(74,222,128,0.6); color: #4ade80; background: rgba(34,197,94,0.08); }
      `}</style>

      <div className="ccta-grid-pattern" />
      <div className="ccta-glow" />

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full"
      >
        <motion.div variants={fadeLeft} className="flex items-center gap-2.5 mb-5 justify-center w-full">
          <span className="w-9 h-px bg-gradient-to-r from-transparent to-green-500" />
          <span className="text-green-400 text-xs font-semibold tracking-[0.14em] uppercase">Find Your Schedule</span>
          <span className="w-9 h-px bg-gradient-to-l from-transparent to-green-500" />
        </motion.div>

        <motion.h2
          variants={fadeLeft}
          className="font-serif text-white leading-[1.15] mb-5 text-left"
          style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
        >
          Ready to Find Your <span className="text-green-500 italic">Schedule?</span>
        </motion.h2>

        <motion.p variants={fadeLeft} className="text-white/70 text-base leading-[1.7] mb-8 text-left max-w-2xl">
          Not sure which format works best for you? We'll help you map out a realistic timeline that fits
          your availability before you commit to anything.
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

        <motion.p variants={fadeLeft} className="text-green-400 font-semibold text-sm mb-8 text-left">
          Tell us your availability  we'll tell you which format fits.
        </motion.p>

        <motion.div variants={burstIn} className="flex flex-wrap gap-4 mb-7 justify-start">
          <Link
            href="/hijama-course"
            className="ccta-btn-primary inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-full"
            style={{ background: "linear-gradient(135deg, #22c55e, #15803d)", boxShadow: "0 12px 30px rgba(34,197,94,0.32)" }}
          >
            Explore the Course
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link
            href="/hijama-course/course-fees"
            className="ccta-btn-secondary inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-full border border-white/25"
          >
            View Course Fees
          </Link>
        </motion.div>

        <motion.div variants={fadeLeft} className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/10 w-full">
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
            3 Format Options
          </span>
          <span className="flex items-center gap-1.5 text-white/50 text-[13px]">
            <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12.5 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
            4,000+ Trained
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Main Component ────────────────────────────────────────
export default function CourseDurationContent() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const toggleFaq = (index) => setExpandedFaq(expandedFaq === index ? null : index);

  return (
    <>
      <CourseDurationHero />
      <TotalLengthSection />
      <StructureSection />
      <FormatOptionsSection />
      <TimelineFactorsSection />
      <NoFastTrackSection />
      <TypicalWeekSection />
      <FaqSection expandedFaq={expandedFaq} toggleFaq={toggleFaq} />
      <ClosingCta />
    </>
  );
}

// ─── Data ──────────────────────────────────────────────────

const structureItems = [
  {
    Icon: IconBookOpen,
    title: "Theory Modules",
    description: "The first portion covers 5 foundational modules  history, anatomy, hygiene, treatment points, and client consultation, delivered over [X sessions/weeks].",
  },
  {
    Icon: IconStethoscope,
    title: "Practical Training",
    description: "Runs in parallel with or immediately following theory modules. This stage includes multiple supervised sessions, each building on the last.",
  },
  {
    Icon: IconGraduationCap,
    title: "Assessment & Certification",
    description: "Once training is complete, the final assessment  practical evaluation and theory examination  takes place over [X day(s)].",
  },
];

const formatOptions = [
  {
    Icon: IconMoon,
    title: "Weekday Evening Classes",
    description: "Sessions held after standard working hours, spread across several weeks, ideal for students balancing a full-time job.",
  },
  {
    Icon: IconSunrise,
    title: "Weekend Intensive",
    description: "A more condensed format for students who prefer to complete training in fewer, longer sessions over consecutive weekends.",
  },
  {
    Icon: IconLaptop,
    title: "Flexible/Self-Paced Theory",
    description: "Theory modules can be worked through at your own pace online, with practical sessions scheduled separately at fixed times.",
  },
];

const timelineFactors = [
  {
    Icon: IconClipboardList,
    title: "Attendance Consistency",
    description: "Missing sessions can extend your timeline  makeup sessions need to be scheduled before you can move forward safely.",
  },
  {
    Icon: IconPencilLine,
    title: "Assessment Readiness",
    description: "If you need additional practice before the final assessment or a resit, this can add a short amount of time to the process.",
  },
  {
    Icon: IconCalendarDays,
    title: "Chosen Format",
    description: "A weekend intensive compresses the same content into a shorter calendar window compared to spread-out weekday evening classes.",
  },
];

const typicalWeekItems = [
  { Icon: IconBookOpen, text: "1–2 theory sessions, covering a module's worth of content with time for questions and discussion" },
  { Icon: IconStethoscope, text: "1 practical session, building on techniques introduced in the previous week" },
  { Icon: IconPencilLine, text: "Independent review time, going over materials and preparing for upcoming assessments" },
  { Icon: IconChatBubble, text: "Ongoing access to instructors for questions between sessions, so you're never stuck waiting" },
];

const durationFaqs = [
  {
    question: "Can I complete the course faster than the standard timeline?",
    answer: "The practical training portion is paced around supervised repetition, so it generally can't be significantly compressed  but the theory portion may allow some flexibility depending on the format you choose.",
  },
  {
    question: "What happens if I fall behind schedule?",
    answer: "We'll work with you to arrange makeup sessions or shift you to a later point in a future intake's practical schedule, so you're not rushed through content you haven't fully absorbed.",
  },
  {
    question: "Is the course length the same for everyone?",
    answer: "The core structure and total training hours are consistent for all students; the calendar length can vary slightly depending on the class format you choose.",
  },
  {
    question: "How soon after finishing can I start practicing?",
    answer: "Once you've passed both assessments and certification is issued, you're able to begin practicing right away  there's no additional waiting period built into the process.",
  },
];