// src/components/Treatments/HijamaTherapy/WhatIsHijama.jsx
import { motion } from "framer-motion";

const features = [
    { title: "Traditional Wet Cupping", desc: "An authentic wet cupping method using controlled suction." },
    { title: "Sunnah-Based", desc: "Rooted in Islamic tradition and Prophetic medicine." },
    { title: "Safety & Hygiene", desc: "Strict screening, sterile tools, and clean practice." },
    { title: "Trained Practitioners", desc: "Delivered by experienced, certified professionals." },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhatIsHijama() {
    return (
        <section className="relative py-14 md:py-20 px-8 md:px-16 lg:px-20 bg-[#0a0f1a] overflow-hidden">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute top-10 right-0 w-[420px] h-[420px] bg-green-500/10 rounded-full blur-[110px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
                className="relative w-full"
            >
                {/* Two‑column layout: left text, right image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left column – text */}
                    <div>
                        <motion.div variants={item} className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-px bg-green-500" />
                            <span className="text-green-400 text-sm font-medium tracking-widest uppercase">
                                Understanding Hijama
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={item}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
                        >
                            What Is <span className="text-green-500 italic">Hijama Cupping Therapy</span>?
                        </motion.h2>

                        <motion.p variants={item} className="text-white/80 text-base md:text-lg leading-relaxed">
                            Hijama cupping therapy is a traditional wet cupping treatment and a type of cupping therapy
                            where cups create suction on the skin. It is also a Sunnah-based treatment valued by many
                            Muslims because of its connection with Islamic tradition.
                        </motion.p>

                        <motion.p variants={item} className="text-white/70 text-base md:text-lg leading-relaxed mt-4">
                            During Hijama treatment, a trained practitioner may use cups, suction, small superficial
                            scratches, and controlled blood removal. Safe hijama should include screening, hygiene,
                            clean tools, and aftercare guidance.
                        </motion.p>
                    </div>

                    {/* Right column – image */}
                    <motion.div
                        variants={item}
                        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10"
                    >
                        <img
                            src="/images/cuppinf.jpg"
                            alt="Hijama cupping therapy session"
                            className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto lg:max-h-[420px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </div>

                {/* Feature grid – below both columns */}
                <motion.div
                    variants={container}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={item}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-green-500/40 hover:bg-green-500/[0.06] transition-colors duration-300"
                        >
                            <div className="w-8 h-8 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4">
                                <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-white font-serif text-base mb-1.5">{f.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}