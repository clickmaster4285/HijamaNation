// src/components/Treatments/HijamaTherapy/SideEffects.jsx
import { motion } from "framer-motion";

const effects = [
    { label: "Temporary marks", icon: "M12 4v16m8-8H4" },
    { label: "Redness", icon: "M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" },
    { label: "Light soreness", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Bruising", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Tiredness", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Mild skin sensitivity", icon: "M12 21c4.418 0 8-4.03 8-9 0-4.418-8-11-8-11S4 7.582 4 12c0 4.97 3.582 9 8 9z" },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function SideEffects() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-[#0a0f1a] overflow-hidden">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute top-1/3 -left-20 w-[380px] h-[380px] bg-green-500/[0.08] rounded-full blur-[120px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full"
            >
                {/* Two‑column grid: left content, right image */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                    {/* Left column – takes 3/5 of the space */}
                    <div className="lg:col-span-3">
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-px bg-green-500" />
                            <span className="text-green-400 text-sm font-medium tracking-widest uppercase">
                                Side Effects
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
                        >
                            Possible <span className="text-green-500 italic">Side Effects</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                            Some mild effects can happen after Hijama. These may include:
                        </motion.p>

                        {/* Effect cards – now full width of left column */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {effects.map((effect) => (
                                <motion.div
                                    key={effect.label}
                                    variants={cardVariant}
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                                    className="group relative px-5 py-6 bg-white/[0.04] rounded-2xl border border-white/10 hover:border-green-500/40 text-center overflow-hidden transition-colors duration-300"
                                >
                                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                        <span className="w-0 h-0 rounded-full bg-green-500/25 blur-2xl scale-0 group-hover:w-40 group-hover:h-40 group-hover:scale-100 transition-all duration-500 ease-out" />
                                    </span>
                                    <div className="relative">
                                        <div className="mx-auto mb-3 w-10 h-10 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                                            <svg className="w-4.5 h-4.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d={effect.icon} />
                                            </svg>
                                        </div>
                                        <span className="relative text-white/80 group-hover:text-white text-sm md:text-base font-medium transition-colors duration-300">
                                            {effect.label}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p variants={fadeUp} className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mt-8">
                            These effects can be normal after cupping, but every person is different. A trained
                            practitioner should explain what to expect and when to ask for further advice.
                        </motion.p>
                    </div>

                    {/* Right column – image */}
                    <motion.div
                        variants={fadeUp}
                        className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10"
                    >
                        <img
                            src="/images/effects.png"
                            alt="Hijama cupping therapy session"
                            className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto lg:max-h-[450px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}