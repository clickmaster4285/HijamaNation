// src/components/Treatments/HijamaTherapy/WhyChoose.jsx
import { motion } from "framer-motion";

const reasons = [
    {
        title: "Clear Guidance",
        desc: "We explain the treatment before you book, so you understand the process.",
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s4.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
        title: "Safety First",
        desc: "We take screening seriously because Hijama may not be suitable for everyone.",
        icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
    {
        title: "Sunnah-Aware",
        desc: "We respect Hijama as a Sunnah-based treatment while keeping the service professional and safe.",
        icon: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-14v4l3 3",
    },
    {
        title: "Practitioner Support",
        desc: "Hijama Nation supports trained practitioners, registered members, and a wider Hijama community.",
        icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function FlipCard({ title, desc, icon, delay }) {
    return (
        <motion.div
            variants={fadeUp}
            custom={delay}
            className="group [perspective:1200px] h-48"
        >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front – dark card with light text */}
                <div className="absolute inset-0 [backface-visibility:hidden] p-6 bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-green-500/30 shadow-md shadow-green-900/20 flex flex-col justify-center items-start">
                    <div className="w-11 h-11 rounded-full bg-green-500/20 border border-green-400/40 flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                        </svg>
                    </div>
                    <h3 className="text-lg font-serif text-white">{title}</h3>
                    <span className="mt-2 text-green-400/70 text-xs uppercase tracking-wider">Hover to read more</span>
                </div>

                {/* Back – green with white text */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 bg-green-800 rounded-2xl shadow-lg shadow-green-900/40 flex items-center">
                    <p className="text-white text-sm md:text-base leading-relaxed">{desc}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function WhyChoose() {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-gray-900 overflow-hidden">
            {/* Dark ambient blobs (subtle green) */}
            <div className="pointer-events-none absolute -top-10 right-0 w-[420px] h-[420px] bg-green-600/20 rounded-full blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-green-700/15 rounded-full blur-[110px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container}
                className="relative w-full"
            >
                {/* Top: text + image */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center mb-14">
                    <div>
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-px bg-green-400" />
                            <span className="text-green-400 text-sm font-medium tracking-widest uppercase">
                                Why Choose Us
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-6"
                        >
                            Why Choose <span className="text-green-400 italic">Hijama Nation</span>?
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                            Many people feel unsure before booking Hijama because they do not know which clinic to trust,
                            what safety steps are followed, or whether the treatment will be explained properly.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-gray-400 text-sm md:text-base leading-relaxed">
                            We are professionally recognized and supported through complementary therapy bodies,
                            training provider approval pathways, practitioner membership options, insurance connections,
                            and award recognition in the alternative medicine and complementary therapy field.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={fadeUp}
                        className="relative rounded-3xl overflow-hidden shadow-xl shadow-green-900/30 border border-green-500/20"
                    >
                        <img
                            src="/images/choose.png"
                            alt="Hijama Nation practitioner support"
                            className="w-full h-auto object-cover aspect-[4/3]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                </div>

                {/* Flip cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((item, idx) => (
                        <FlipCard key={item.title} {...item} delay={idx} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}