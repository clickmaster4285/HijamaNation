// src/components/Treatments/HijamaTherapy/Safety.jsx
import { motion } from "framer-motion";

const checklist = [
    "Take medication",
    "Are pregnant",
    "Have blood pressure issues, diabetes, anemia, or heart conditions",
    "Have skin problems or bleeding disorders",
    "Take blood-thinning medication",
];

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const rowVariant = {
    hidden: { opacity: 0, x: -24, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

// Darker pulse – less aggressive scaling
const pulseIcon = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.06, 1],
        transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export default function Safety() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-green-50 via-green-100/70 to-green-50 overflow-hidden">
            {/* Darker, more subtle decorative elements */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute top-20 -right-20 w-[500px] h-[500px] bg-green-800/10 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-800/15 rounded-full blur-[130px]"
            />
            <motion.div
                animate={{
                    x: [0, 20, 0],
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-700/5 rounded-full blur-[150px]"
            />

            {/* Pattern dots – lighter and less obtrusive */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[radial-gradient(#166534_1px,transparent_1px)] [background-size:20px_20px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full"
            >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="h-px bg-green-700"
                    />
                    <span className="text-green-700 text-sm font-medium tracking-widest uppercase">
                        Safety First
                    </span>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6"
                >
                    Safety Is Very Important in{" "}
                    <span className="text-green-700 italic">
                        Hijama Cupping Therapy
                    </span>
                </motion.h2>

                <motion.p
                    variants={fadeUp}
                    className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl"
                >
                    A responsible Hijama treatment should include screening, clean tools, hygiene care,
                    safe practice, and aftercare guidance.
                </motion.p>

                {/* Checklist card – softer shadows and darker accents */}
                <motion.div
                    variants={fadeUp}
                    whileHover={{
                        y: -4,
                        boxShadow: "0 12px 40px rgba(21,94,62,0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mt-8 p-6 md:p-8 bg-white rounded-3xl border border-green-200 shadow-lg shadow-green-900/5"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <motion.div
                            variants={pulseIcon}
                            initial="initial"
                            animate="animate"
                            className="w-9 h-9 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center shrink-0"
                        >
                            <svg className="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-8.99 3.75h.008v.008h-.008v-.008z" />
                            </svg>
                        </motion.div>
                        <span className="text-gray-800 font-serif text-lg">
                            Before booking, mention if you:
                        </span>
                    </div>

                    <motion.ul variants={container} className="space-y-3">
                        {checklist.map((point, idx) => (
                            <motion.li
                                key={point}
                                variants={rowVariant}
                                whileHover={{
                                    x: 4,
                                    backgroundColor: "rgba(21,94,62,0.05)",
                                    borderRadius: "12px",
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 cursor-default group"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.08, rotate: 6 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    className="mt-0.5 w-5 h-5 rounded-full bg-green-200 text-green-700 text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-green-300 transition-colors duration-300"
                                >
                                    {idx + 1}
                                </motion.span>
                                <span className="text-gray-700 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                    {point}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        variants={fadeUp}
                        className="mt-6 pt-5 border-t-2 border-green-200 flex items-start gap-3"
                    >
                        <motion.div
                            whileHover={{ scale: 1.06, rotate: 6 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="mt-0.5 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center shrink-0"
                        >
                            ⚕
                        </motion.div>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            <span className="font-medium text-gray-800">Important:</span>{" "}
                            People with medical concerns should seek professional medical advice before treatment.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Decorative badge – more muted */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    className="absolute -bottom-6 -right-6 md:block hidden"
                >
                    <div className="bg-green-700 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg shadow-green-700/20">
                        ✓ Safety Assured
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}