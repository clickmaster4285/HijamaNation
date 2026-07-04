// src/components/Treatments/HijamaTherapy/TreatmentProcess.jsx
import { motion } from "framer-motion";

const steps = [
    {
        title: "Screening",
        desc: "Before treatment, the practitioner asks about health, medication, previous conditions, and any concerns. This helps check whether Hijama may be suitable.",
    },
    {
        title: "Preparation",
        desc: "The treatment area is prepared with hygiene in mind. The practitioner explains where cups may be placed and what you may feel.",
    },
    {
        title: "Cupping",
        desc: "Cups are placed on the skin to create suction. In wet cupping, small superficial scratches may be made, and a small amount of blood may be drawn under suction.",
    },
    {
        title: "Aftercare",
        desc: "After the session, you receive aftercare advice, including what to avoid and how to care for the skin.",
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const nodeVariant = {
    hidden: { opacity: 0, scale: 0.4, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 260, damping: 16 },
    },
};

export default function TreatmentProcess() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-[#0a0f1a] overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
                style={{ backgroundImage: `url(/process.png)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 via-[#0a0f1a]/50 to-[#0a0f1a]/70" />

            <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute top-10 right-10 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full"   // ← changed: full width, no max-width
            >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-green-500" />
                    <span className="text-green-400 text-sm font-medium tracking-widest uppercase">
                        Process
                    </span>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
                >
                    Treatment <span className="text-green-500 italic">Process</span>
                </motion.h2>

                <motion.p variants={fadeUp} className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
                    A Hijama session should be calm, clean, and clearly explained.
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting line   desktop */}
                    <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-white/10">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                            className="h-px bg-gradient-to-r from-green-500 via-green-400 to-green-500"
                        />
                    </div>
                    {/* Connecting line   mobile/tablet (vertical) */}
                    <div className="lg:hidden absolute top-0 bottom-0 left-7 w-px bg-white/10">
                        <motion.div
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
                            className="w-px bg-gradient-to-b from-green-500 via-green-400 to-green-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, idx) => (
                            <div key={step.title} className="relative flex lg:flex-col gap-5 lg:gap-0">
                                <motion.div
                                    variants={nodeVariant}
                                    className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-[#0a0f1a]/80 border-2 border-green-500 flex items-center justify-center font-serif text-xl text-green-400 lg:mb-6 backdrop-blur-sm"
                                >
                                    {idx + 1}
                                    <div className="absolute inset-0 rounded-full bg-green-500/20 blur-md -z-10" />
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                                    className="flex-1 p-6 bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-500/40 hover:bg-green-500/[0.08] transition-colors duration-300"
                                >
                                    <h3 className="text-lg font-serif text-white mb-2">{step.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}