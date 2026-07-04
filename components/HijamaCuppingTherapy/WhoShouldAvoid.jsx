// src/components/Treatments/HijamaTherapy/WhoShouldAvoid.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allConditions = [
    "Are pregnant",
    "Take blood-thinning medication",
    "Have a bleeding disorder",
    "Have severe anaemia",
    "Have uncontrolled diabetes",
    "Have serious heart conditions",
    "Have active skin infections",
    "Have open wounds",
    "Have very low blood pressure",
    "Feel unwell on the day",
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 18, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function WhoShouldAvoid() {
    const [showAll, setShowAll] = useState(false);

    const visibleConditions = showAll ? allConditions : allConditions.slice(0, 6);
    const hasMore = allConditions.length > 6;

    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-green-50 via-green-50/60 to-white overflow-hidden">
            {/* Light ambient glows */}
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.06, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute top-0 right-0 w-[420px] h-[420px] bg-green-700/10 rounded-full blur-[130px]"
            />
            <div className="pointer-events-none absolute bottom-0 left-1/3 w-[320px] h-[320px] bg-green-600/10 rounded-full blur-[110px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full"
            >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-green-700" />
                    <span className="text-green-700 text-sm font-medium tracking-widest uppercase">
                        Contraindications
                    </span>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6"
                >
                    Who Should <span className="text-green-700 italic">Avoid Hijama</span>?
                </motion.h2>

                <motion.p variants={fadeUp} className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                    Hijama may not be suitable for everyone. You should seek advice before treatment if you:
                </motion.p>

                {/* Alert banner */}
                <motion.div
                    variants={fadeUp}
                    className="mb-8 flex items-center gap-3 px-5 py-3.5 bg-green-100/60 border border-green-300 rounded-xl max-w-3xl"
                >
                    <motion.span
                        animate={{ scale: [1, 1.12, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="shrink-0 w-7 h-7 rounded-full bg-green-200 border border-green-400 flex items-center justify-center text-green-700 text-sm font-bold"
                    >
                        !
                    </motion.span>
                    <span className="text-gray-700 text-sm md:text-base">
                        Please read carefully – seek professional medical advice if any of these apply to you.
                    </span>
                </motion.div>

                {/* Condition cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence>
                        {visibleConditions.map((item) => (
                            <motion.div
                                key={item}
                                variants={cardVariant}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ y: -4 }}
                                className="group relative flex items-center gap-3 px-4 py-4 bg-white/80 rounded-xl border border-green-200 hover:border-green-700/50 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
                            >
                                <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                    <span className="w-0 h-0 rounded-full bg-green-600/10 blur-2xl scale-0 group-hover:w-32 group-hover:h-32 group-hover:scale-100 transition-all duration-500 ease-out" />
                                </span>
                                <span className="relative shrink-0 w-8 h-8 rounded-full bg-green-100 border border-green-300 flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                                    <svg className="w-3.5 h-3.5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-8.99 3.75h.008v.008h-.008v-.008z" />
                                    </svg>
                                </span>
                                <span className="relative text-gray-800 group-hover:text-gray-900 text-sm md:text-base transition-colors duration-300">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Show Less button */}
                {hasMore && (
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex justify-end"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/40 hover:scale-105"
                        >
                            <span>{showAll ? "Show Less" : "Show More"}</span>
                            <motion.svg
                                animate={{ rotate: showAll ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </button>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}