// src/components/Treatments/HijamaTherapy/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "What is Hijama cupping therapy?",
        a: "Hijama cupping therapy is a traditional wet cupping treatment where cups create suction on the skin. Small superficial scratches may be made, and a small amount of blood may be drawn under suction.",
    },
    {
        q: "Is Hijama wet cupping?",
        a: 'Yes. Hijama is commonly known as wet cupping therapy. "Cupping therapy" is a wider term, while "Hijama" usually refers to wet cupping.',
    },
    {
        q: "Is Hijama Sunnah-based?",
        a: "Yes. Hijama is valued by many Muslims because it is connected with Islamic and Sunnah-based practices.",
    },
    {
        q: "Where is Hijama Nation based?",
        a: "Hijama Nation is based in Birmingham, West Midlands, United Kingdom.",
    },
    {
        q: "Do you provide Hijama in Birmingham?",
        a: "Yes. Hijama Nation is based in Birmingham, West Midlands. You can check availability and booking details before treatment.",
    },
    {
        q: "Is Hijama available in the UK?",
        a: "Yes. Hijama Nation is a UK-based Hijama clinic and platform providing Hijama cupping therapy guidance, booking support, and practitioner support.",
    },
    {
        q: "Is Hijama painful?",
        a: "Hijama may feel different for each person. Some people feel suction pressure, mild scratching, or slight soreness after treatment.",
    },
    {
        q: "Is Hijama safe?",
        a: "Hijama should be carried out with screening, hygiene, clean tools, and aftercare advice. People with health concerns should seek advice before treatment.",
    },
    {
        q: "What are the side effects?",
        a: "Possible side effects may include temporary marks, redness, bruising, mild soreness, tiredness, or skin sensitivity.",
    },
    {
        q: "Who should avoid Hijama?",
        a: "People who are pregnant, taking blood thinners, or have bleeding disorders, severe anemia, serious heart conditions, skin infections, or other medical concerns should seek advice before treatment.",
    },
    {
        q: "How much does Hijama cost?",
        a: "The cost can depend on the session type, practitioner, treatment area, and booking location. Check treatment pricing before booking.",
    },
    {
        q: "How do I book?",
        a: "Click the Book Treatment button and follow the booking process.",
    },
];

const half = Math.ceil(faqs.length / 2);
const leftFaqs = faqs.slice(0, half).map((f, i) => ({ ...f, idx: i }));
const rightFaqs = faqs.slice(half).map((f, i) => ({ ...f, idx: i + half }));

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function FAQItem({ faq, openIndex, toggle }) {
    const isOpen = openIndex === faq.idx;
    return (
        <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl border border-green-200/70 overflow-hidden hover:border-green-400/60 transition-colors duration-300 shadow-sm shadow-green-900/5"
        >
            <button
                onClick={() => toggle(faq.idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-green-50/60"
            >
                <span className="text-gray-800 text-sm md:text-base font-medium pr-4">{faq.q}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-green-600 text-xl shrink-0 leading-none"
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed border-t border-green-100 pt-4">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    return (
        <section className="relative py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-green-50 via-green-50/50 to-white overflow-hidden">
            {/* Dot grid background pattern */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(22,163,74,0.18) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* Ambient floating glows */}
            <motion.div
                animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -top-16 -right-10 w-[380px] h-[380px] bg-green-300/25 rounded-full blur-[110px]"
            />
            <motion.div
                animate={{ x: [0, -20, 0], y: [0, 16, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] bg-emerald-200/30 rounded-full blur-[110px]"
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={container}
                className="relative w-full"   // ← full width, no max‑width, no centering
            >
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-green-600" />
                    <span className="text-green-600 text-sm font-medium tracking-widest uppercase">FAQ</span>
                </motion.div>

                <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-10"
                >
                    Frequently Asked <span className="text-green-600 italic">Questions</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    <motion.div variants={container} className="space-y-3">
                        {leftFaqs.map((faq) => (
                            <FAQItem key={faq.idx} faq={faq} openIndex={openIndex} toggle={toggle} />
                        ))}
                    </motion.div>
                    <motion.div variants={container} className="space-y-3">
                        {rightFaqs.map((faq) => (
                            <FAQItem key={faq.idx} faq={faq} openIndex={openIndex} toggle={toggle} />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}