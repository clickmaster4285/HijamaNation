// src/components/Treatments/HijamaTherapy/StartJourney.jsx
import { motion } from "framer-motion";

export default function StartJourney() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-[#0a0f1a] overflow-hidden border-t border-b border-green-900/30">
            {/* ── Background layers ───────────────────────────── */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/5 via-transparent to-green-900/10" />

            {/* Decorative geometric pattern (CSS overlay) */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="hijama-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M40 0 L40 80 M0 40 L80 40 M20 20 L60 60 M20 60 L60 20" stroke="#22c55e" strokeWidth="0.5" fill="none"/>
                        <circle cx="40" cy="40" r="10" fill="none" stroke="#22c55e" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hijama-pattern)" />
                </svg>
            </div>

            {/* Glow orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">

                {/* ── LEFT: main content ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-left"
                >
                    {/* Tag line */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-400" />
                        <span className="text-green-400 text-xs font-semibold tracking-[0.2em] uppercase">Begin Your Path</span>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-400" />
                    </div>

                    {/* Heading – now all on one line with "Journey" directly after the therapy span */}
                    <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                        Start Your{" "}
                        <span className="text-green-600 italic font-medium">Hijama Cupping Therapy</span>{" "}
                        Journey
                    </h2>

                    <p className="text-white/75 text-base md:text-lg font-light leading-relaxed max-w-xl mb-10">
                        Book Hijama cupping therapy with clear guidance, trained practitioner support, safety screening,
                        hygiene care, and aftercare advice. Hijama Nation helps you understand what to expect before,
                        during, and after your session.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            role="button"
                            className="relative overflow-hidden group cursor-default"
                            onClick={(e) => e.preventDefault()}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-full opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                            <span className="relative block px-10 py-4 text-white font-semibold text-lg tracking-wide">
                                Book Treatment
                                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            role="button"
                            className="relative overflow-hidden group cursor-default"
                            onClick={(e) => e.preventDefault()}
                        >
                            <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-green-400 transition-colors duration-300" />
                            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-300 rounded-full" />
                            <span className="relative block px-10 py-4 text-white font-semibold text-lg tracking-wide group-hover:text-green-400 transition-colors duration-300">
                                Contact Us
                            </span>
                        </motion.div>
                    </div>

                    {/* Decorative separator */}
                    <div className="mt-12 pt-6 border-t border-white/5 flex items-center gap-4">
                        <span className="text-white/20 text-xs tracking-[0.15em] uppercase">Certified • Safe • Sunnah‑Based</span>
                        <span className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent" />
                    </div>
                </motion.div>

                {/* ── RIGHT: testimonial card with enhanced animations ── */}
                <motion.div
                    initial={{ opacity: 0, x: 30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.15,
                    }}
                    whileHover={{
                        scale: 1.02,
                        y: -4,
                        transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                    className="relative"
                >
                    <div className="relative rounded-2xl border border-green-500/20 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-8 md:p-10 shadow-2xl shadow-black/40">
                        {/* Gold-ish corner accents */}
                        <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-green-400/50 rounded-tl-2xl" />
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-green-400/50 rounded-br-2xl" />

                        {/* Quote mark */}
                        <span className="font-serif text-6xl text-green-500/40 leading-none block mb-2">&ldquo;</span>

                        {/* Quote text – with fade-up stagger for inner elements */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="font-serif italic text-white/90 text-lg md:text-xl leading-relaxed mb-6"
                        >
                            From the first consultation to aftercare, everything was explained clearly.
                            I felt safe, respected, and genuinely cared for throughout my session.
                        </motion.p>

                        {/* Stars – staggered */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
                                },
                            }}
                            className="flex gap-1 mb-5"
                        >
                            {[...Array(5)].map((_, i) => (
                                <motion.svg
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.5 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                    className="w-4 h-4 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                                </motion.svg>
                            ))}
                        </motion.div>

                        {/* Author */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.45 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center text-white font-serif font-semibold text-sm">
                                A.R.
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">Amina R.</p>
                                <p className="text-white/40 text-xs tracking-wide">Birmingham, UK</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}