// src/components/Treatments/HijamaTherapy/Cost.jsx
import { motion } from "framer-motion";
import Link from "next/link";

const factors = [
    { label: "Session Price", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m0-2c-1.11 0-2.08-.402-2.599-1" },
    { label: "What's Included", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Session Duration", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Screening Details", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
    { label: "Practitioner Availability", icon: "M12 4.5v15m7.5-7.5h-15" },
    { label: "Aftercare Guidance", icon: "M12 21c4.418 0 8-4.03 8-9 0-4.418-8-11-8-11S4 7.582 4 12c0 4.97 3.582 9 8 9z" },
    { label: "Booking Policy", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const chipVariant = {
    hidden: { opacity: 0, scale: 0.85, y: 12 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Cost() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-[#0a0f1a] overflow-hidden">
            {/* Ambient glow */}
            <motion.div
                animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute top-0 right-0 w-[420px] h-[420px] bg-green-500/[0.09] rounded-full blur-[130px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full"   // ← full width, no max‑width, no centering
            >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-green-500" />
                    <span className="text-green-400 text-sm font-medium tracking-widest uppercase">
                        Pricing
                    </span>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
                >
                    <span className="text-green-500 italic">Cost</span> of Hijama Cupping Therapy
                </motion.h2>

                <motion.p variants={fadeUp} className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl">
                    Hijama cupping therapy cost can depend on the practitioner, session type, treatment area,
                    consultation needs, and booking location.
                </motion.p>

                <motion.p variants={fadeUp} className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mt-4 mb-8">
                    Before booking, check the following:
                </motion.p>

                {/* Factor chips */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {factors.map((f) => (
                        <motion.div
                            key={f.label}
                            variants={chipVariant}
                            whileHover={{ y: -4, scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/10 hover:border-green-500/40 hover:bg-green-500/[0.07] rounded-full transition-colors duration-300"
                        >
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                            </svg>
                            <span className="text-white/80 text-sm font-medium">{f.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div variants={fadeUp}>
                    <Link href="/treatments/pricing" className="group relative inline-flex items-center gap-2 overflow-hidden">
                        <motion.span
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative inline-flex items-center gap-2 border border-green-500/40 group-hover:border-green-500 text-green-400 group-hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 overflow-hidden"
                        >
                            {/* Fill sweep */}
                            <span className="absolute inset-0 bg-green-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-out -z-10" />
                            <span className="relative z-10">View Treatment Pricing</span>
                            <motion.span
                                className="relative z-10"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                →
                            </motion.span>
                        </motion.span>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}