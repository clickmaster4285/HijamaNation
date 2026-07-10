// components/content/HijamaCourse/PracticalTrainingContent.jsx
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

// ─── Hero Section ──────────────────────────────────────────
function PracticalHero() {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I'd like to know more about practical training.");

  return (
    <section className="hero relative min-h-[80vh] flex items-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/hijamaCourse.png)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/40" />

      <div className="relative z-10 pt-48 pb-8 pl-8 pr-0 md:pl-16 lg:pl-20 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
            Practical Training · Est. 2011
          </span>
        </div>

        <h1 className="font-serif text-white leading-[1.05] mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            Practical Training
          </span>
          <br />
          <span className="text-white/90">& Assessment</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl italic font-light font-serif mb-3">
          Where Theory Becomes Skill.
        </p>

        <p className="text-white/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
          Theory tells you what to do. Practical training is where you learn how to actually do it  with steady hands, calm communication, and the instinct to notice when something isn't going quite right.
        </p>

        <div className="flex items-center gap-6 mb-8">
          <span className="flex items-center gap-1.5 text-white/70 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong className="text-white">5</strong> progressive stages</span>
          </span>
          <span className="w-px h-6 bg-white/10" />
          <span className="flex items-center gap-1.5 text-white/70 text-sm">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong className="text-white">100%</strong> supervised feedback</span>
          </span>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="font-serif text-2xl font-bold text-white">5</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Training Stages</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white">2</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Assessments</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-white">Real</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Client Readiness</div>
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
  return <div className={`rounded-2xl p-7 md:p-8 ${base} ${className}`}>{children}</div>;
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
// SECTION 1  Why Practical Training Comes First (DARK)
// ══════════════════════════════════════════════════════════
function WhyPracticalSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-16 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 via-transparent to-green-900/10" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="practical-pattern-1" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#practical-pattern-1)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-left"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="dark">Why It Matters</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-6">
            Why Practical Training <span className="text-green-400 italic font-medium">Comes First</span>
          </motion.h2>
          <motion.div variants={fadeLeft} className="space-y-4 max-w-2xl">
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              It's easy to underestimate how different cupping therapy feels in practice compared to in a textbook. Cup placement that looks straightforward in a diagram requires real judgment once you're working with an actual person  accounting for their skin, their comfort, their reactions, and the small adjustments that keep a session both effective and safe.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
              That's why we treat practical training as the true test of readiness. A student can memorize every contraindication and still not be prepared to practice  competence is built through repetition, correction, and supervised experience, not recall alone.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark">
            <div className="flex items-center gap-3 mb-6">
              <IconCircle tone="dark">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </IconCircle>
              <h3 className="font-serif text-lg text-white">Practical Training Builds</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Muscle memory for precise technique",
                "Real judgment for real clients",
                "Calm communication under pressure",
                "Confidence through repetition",
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
// SECTION 2  How Practical Training Is Structured (LIGHT)
// ══════════════════════════════════════════════════════════
function StructuredTrainingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white py-20 md:py-28 px-6 md:px-16 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(#16a34a_0.8px,transparent_1px)] [background-size:20px_20px] opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-10"
        >
          <Eyebrow tone="light">Structure</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-4">
            How Practical Training Is <span className="text-green-600 italic">Structured</span>
          </h2>
          <p className="text-green-700/70 text-base md:text-lg max-w-2xl">
            Practical training is delivered in progressive stages, so skill is built layer by layer rather than all at once.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {trainingStages.map((stage, i) => (
            <motion.div
              key={i}
              variants={fadeLeft}
              className="bg-white rounded-xl border border-green-200 p-6 hover:shadow-md transition-all text-left"
            >
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="font-semibold text-lg text-green-950 mb-2">{stage.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 3  What You'll Practice (DARK)
// ══════════════════════════════════════════════════════════
function WhatYouPracticeSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-16 lg:px-20">
      <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-left"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="dark">What You'll Practice</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8">
            What You'll <span className="text-green-400 italic font-medium">Practice</span>
          </motion.h2>
          <div className="space-y-3 max-w-2xl">
            {practiceItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeLeft}
                className="flex items-start gap-3 bg-white/[0.04] border border-green-500/15 p-4 rounded-xl"
              >
                <span className="text-green-400 text-lg mt-0.5 shrink-0">✓</span>
                <span className="text-white/75 text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark" className="lg:sticky lg:top-24 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-serif text-xl text-white mb-2">Full Session Training</p>
            <p className="text-white/60 text-sm leading-relaxed">
              From consultation to aftercare  every step of a real treatment.
            </p>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 4  Instructor Supervision (LIGHT)
// ══════════════════════════════════════════════════════════
function SupervisionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100 py-20 md:py-28 px-6 md:px-16 lg:px-20">
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-left"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="light">Supervision</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-6">
            Instructor Supervision &amp; <span className="text-green-600 italic">Feedback</span>
          </motion.h2>
          <motion.div variants={fadeLeft} className="space-y-4 max-w-2xl text-gray-700 leading-relaxed">
            <p>
              Every practical session includes direct instructor oversight. This isn't a passive presence  instructors actively watch for things students often can't feel themselves: subtle tension in hand positioning, rushed pacing, inconsistent suction timing, or gaps in client communication.
            </p>
            <p>
              Feedback is given in the moment wherever possible, so corrections happen while the movement is still fresh rather than being explained after the fact.
            </p>
            <p>
              This ongoing feedback loop means the final assessment isn't the first time anyone finds out whether a technique is solid. By the time a student reaches assessment, any weak points have already been identified and worked through.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="lg:sticky lg:top-24">
            <h3 className="font-serif text-lg text-green-950 mb-4">Feedback Loop</h3>
            <div className="space-y-4">
              {[
                "Instructor observes technique in real-time",
                "Corrections happen immediately",
                "Progress tracked across sessions",
                "Weak points identified early",
                "Final assessment confirms readiness",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-green-600 mt-0.5">▸</span>
                  <span className="text-gray-600 text-sm">{item}</span>
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
// SECTION 5  Final Assessment (DARK)
// ══════════════════════════════════════════════════════════
function FinalAssessmentSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] border-t border-b border-green-900/30 py-20 md:py-28 px-6 md:px-16 lg:px-20">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="practical-pattern-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#practical-pattern-2)" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-left"
        >
          <motion.div variants={fadeLeft}>
            <Eyebrow tone="dark">Final Assessment</Eyebrow>
          </motion.div>
          <motion.h2 variants={fadeLeft} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] mb-8">
            The <span className="text-green-400 italic font-medium">Final Assessment</span>
          </motion.h2>

          <div className="space-y-6 max-w-2xl">
            <motion.div variants={fadeLeft}>
              <h3 className="font-semibold text-lg text-white mb-2">Practical Component</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Students conduct a full treatment session, observed and scored against a standardized checklist covering consultation, hygiene setup, technique, client communication, and aftercare guidance.
              </p>
            </motion.div>
            <motion.div variants={fadeLeft}>
              <h3 className="font-semibold text-lg text-white mb-2">Theory Component</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                A written examination covers the knowledge that underpins safe practice: relevant anatomy, recognized contraindications, hygiene and sterilization standards, and appropriate aftercare guidance.
              </p>
            </motion.div>
            <motion.div variants={fadeLeft}>
              <h3 className="font-semibold text-lg text-white mb-2">What Happens If You Don't Pass</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                If a student doesn't meet the required standard on their first attempt, they're offered a structured resit  with specific, targeted feedback on which areas to focus on before trying again.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="dark" className="lg:sticky lg:top-24">
            <h3 className="font-serif text-lg text-white mb-6">Assessment Breakdown</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <IconCircle tone="dark">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="text-white text-sm font-semibold">Practical</p>
                  <p className="text-white/50 text-xs">Full session observed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconCircle tone="dark">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="text-white text-sm font-semibold">Theory</p>
                  <p className="text-white/50 text-xs">Written examination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconCircle tone="dark">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </IconCircle>
                <div>
                  <p className="text-white text-sm font-semibold">Resit Option</p>
                  <p className="text-white/50 text-xs">Structured support</p>
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
// SECTION 6  Why This Approach Works (LIGHT)
// ══════════════════════════════════════════════════════════
function WhyApproachSection() {
  const waNumber = "447547424623";
  const waMessage = encodeURIComponent("Hi, I have a question about practical training.");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white py-20 md:py-28 px-6 md:px-16 lg:px-20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <Eyebrow tone="light">Why It Works</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-950 leading-[1.15] mb-6">
            Why This Approach <span className="text-green-600 italic">Works</span>
          </h2>
          <div className="space-y-4 max-w-2xl text-gray-700 leading-relaxed">
            <p>
              Some courses treat practical training as a formality  a single session near the end, mostly for demonstration purposes. We take the opposite approach, because we've seen what the difference looks like in practice.
            </p>
            <p>
              Students who go through progressive, supervised, feedback-heavy training don't just perform better on assessment day  they carry that confidence and precision into their first real client sessions, which is ultimately what certification is meant to prepare them for.
            </p>
            <p className="text-green-700/70 italic">
              If you're considering enrolling and want to know more about what a typical practical session looks like day-to-day, our team is happy to walk you through it before you commit.
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <SideCard tone="light" className="text-center lg:sticky lg:top-24">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.9A8.86 8.86 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="font-serif text-lg text-green-950 mb-3">Have Questions?</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our team is happy to walk you through what practical training looks like day-to-day before you commit.
            </p>
            <a
              href={`https://wa.me/${waNumber}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Chat with Us →
            </a>
          </SideCard>
        </motion.div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════
// SECTION 7  Closing CTA (DARK, HIJAMA STYLE)
// ══════════════════════════════════════════════════════════
function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] py-20 md:py-28 px-6 md:px-16 lg:px-20">
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
          Ready to Get <span className="text-green-400 italic">Hands-On?</span>
        </h2>

        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          Practical training is where theory becomes skill. Enroll today and start building the confidence and competence you need to practice safely.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/hijama-course"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all duration-300 hover:scale-105"
          >
            Explore the Course →
          </Link>
          <Link
            href="/hijama-course/certification-details"
            className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-green-400 hover:text-green-400 hover:bg-green-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            View Certification
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Main Component ────────────────────────────────────────
export default function PracticalTrainingContent() {
  return (
    <>
      <PracticalHero />
      <WhyPracticalSection />
      <StructuredTrainingSection />
      <WhatYouPracticeSection />
      <SupervisionSection />
      <FinalAssessmentSection />
      <WhyApproachSection />
      <ClosingCta />
    </>
  );
}

// ─── Data ──────────────────────────────────────────────────

const trainingStages = [
  {
    title: "Equipment Familiarization",
    description: "Build comfort and muscle memory with cups, pumps, sterilization tools, and single-use items before any hands-on work.",
  },
  {
    title: "Guided Demonstration",
    description: "Instructors perform full treatment demonstrations, walking through each step aloud  from positioning to aftercare.",
  },
  {
    title: "Supervised Peer Practice",
    description: "Practice on models or peers under direct instructor supervision, with immediate correction of positioning and technique.",
  },
  {
    title: "Full Session Simulation",
    description: "Run complete treatment sessions from consultation to aftercare while being observed and given comprehensive feedback.",
  },
  {
    title: "Independent Supervised Sessions",
    description: "Perform sessions with minimal instructor involvement, mirroring independent practice while keeping a safety net in place.",
  },
];

const practiceItems = [
  "Client consultation and building rapport before treatment begins",
  "Reading a client's health history and confirming there are no contraindications",
  "Setting up a hygienic, organized treatment space",
  "Skin preparation and cup placement across standard treatment zones",
  "Suction control  knowing how much is enough, and recognizing when it's too much",
  "Managing session timing and monitoring the skin's response throughout",
  "For wet cupping specifically: safe, precise, and hygienic incision technique",
  "Safely removing cups and inspecting the treated area",
  "Explaining aftercare clearly, in language the client will remember and follow",
];