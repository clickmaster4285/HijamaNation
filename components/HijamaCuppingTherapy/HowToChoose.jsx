// src/components/Treatments/HijamaTherapy/HowToChoose.jsx
import { motion } from "framer-motion";

const points = [
    "What Hijama is",
    "How wet cupping works",
    "What happens during treatment",
    "How screening works",
    "What aftercare is needed",
    "Who should avoid Hijama",
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const rowContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const rowVariant = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function AnimatedCheck() {
    return (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <motion.path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            />
        </svg>
    );
}

export default function HowToChoose() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-black overflow-hidden">
            {/* Ambient glow */}
            <motion.div
                animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute top-10 -left-16 w-[380px] h-[380px] bg-green-500/10 rounded-full blur-[120px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start"
            >
                {/* Left: intro */}
                <div>
                    <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-px bg-green-500" />
                        <span className="text-green-400 text-sm font-medium tracking-widest uppercase">
                            How to Choose
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
                    >
                        How to Choose a <span className="text-green-500 italic">Hijama Clinic</span>
                    </motion.h2>

                    <motion.p variants={fadeUp} className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                        Before booking Hijama cupping therapy, check whether the provider explains the process,
                        offers screening, follows hygiene steps, and gives aftercare advice.
                    </motion.p>

                    <motion.p variants={fadeUp} className="text-white/50 text-sm md:text-base leading-relaxed">
                        A good Hijama clinic should explain the following:
                    </motion.p>
                </div>

                {/* Right: animated checklist card */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="p-6 md:p-8 bg-white/[0.04] rounded-3xl border border-white/10"
                >
                    <motion.div variants={rowContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="space-y-2">
                        {points.map((item) => (
                            <motion.div
                                key={item}
                                variants={rowVariant}
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-transparent hover:border-green-500/30 hover:bg-green-500/[0.06] transition-colors duration-300"
                            >
                                <span className="shrink-0 w-6 h-6 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 flex items-center justify-center">
                                    <AnimatedCheck />
                                </span>
                                <span className="text-white/80 text-sm md:text-base">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}