// src/components/Treatments/HijamaTherapy/WhoMayConsider.jsx
import { motion } from "framer-motion";

const femaleTags = ["Privacy", "Cleanliness", "Comfort", "Trust"];
const maleTags = ["Fitness", "Discipline", "Recovery", "Self-Care"];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardVariant = (dir) => ({
    hidden: { opacity: 0, x: dir === "left" ? -60 : 60, rotate: dir === "left" ? -2 : 2 },
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
});

function GenderCard({ dir, label, text, tags, delay = 0 }) {
    return (
        <motion.div
            variants={cardVariant(dir)}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="relative group p-8 md:p-10 bg-white/[0.04] rounded-3xl border border-white/10 overflow-hidden"
        >
            <div className="pointer-events-none absolute -inset-24 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-500/20 to-transparent rounded-bl-[3rem] rounded-tr-3xl" />
            <div className="relative">
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-green-400/70 mb-3">
                    Aged 25+
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                    {label}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                    {text}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: delay + i * 0.08 }}
                            className="px-3 py-1.5 bg-green-500/10 border border-green-500/25 rounded-full text-green-300 text-xs font-medium"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function WhoMayConsider() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-black overflow-hidden">
            <motion.div
                animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -top-20 -left-20 w-[380px] h-[380px] bg-green-500/10 rounded-full blur-[110px]"
            />
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, -14, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] bg-green-500/[0.07] rounded-full blur-[120px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full"
            >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-green-500" />
                    <span className="text-green-400 text-sm font-medium tracking-widest uppercase">
                        Who May Consider
                    </span>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
                >
                    Who May Consider <span className="text-green-500 italic">Hijama</span>?
                </motion.h2>

                {/* Removed max-w-3xl so it spans full width */}
                <motion.p variants={fadeUp} className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
                    Hijama is considered by people aged 25 and above who want traditional wellness support,
                    Sunnah-based care, and clear guidance before treatment. It may be considered by people
                    who suffer from body tension, stiffness, back or neck discomfort, headaches, tiredness,
                    stress, muscle tightness, or general wellness concerns.
                </motion.p>

                {/* Removed max-w-3xl here too */}
                <motion.p variants={fadeUp} className="text-white/50 text-sm md:text-base leading-relaxed mb-12">
                    Hijama is not a cure for disease, and anyone with medical conditions should seek professional
                    advice before treatment.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    <GenderCard
                        dir="left"
                        label="Female"
                        text="Females aged 25+ may consider Hijama if they want a private, respectful, and faith-aligned wellness treatment. Common concerns include privacy, cleanliness, comfort, trust, and clear communication. Hijama Nation provides screening, hygiene care, trained practitioner support, and aftercare guidance."
                        tags={femaleTags}
                        delay={0.1}
                    />
                    <GenderCard
                        dir="right"
                        label="Male"
                        text="Males aged 25+ may consider Hijama if they value Sunnah-based wellness, fitness, discipline, recovery support, and long-term self-care. Common concerns include finding a reliable provider, understanding the process, and avoiding unsafe treatment. Hijama Nation provides clear treatment steps, safety screening, trained practitioner support, and aftercare advice."
                        tags={maleTags}
                        delay={0.2}
                    />
                </div>
            </motion.div>
        </section>
    );
}