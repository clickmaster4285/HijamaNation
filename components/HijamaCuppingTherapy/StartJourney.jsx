// src/components/Treatments/HijamaTherapy/StartJourney.jsx
import { motion } from "framer-motion";

export default function StartJourney() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-green-900/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-4xl mx-auto text-center"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-px bg-green-500" />
                    <span className="text-green-400 text-sm font-medium tracking-widest uppercase">Start Today</span>
                    <div className="w-10 h-px bg-green-500" />
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
                    Start Your <span className="text-green-500">Hijama Cupping Therapy</span> Journey
                </h2>

                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                    Book Hijama cupping therapy with clear guidance, trained practitioner support, safety screening,
                    hygiene care, and aftercare advice. Hijama Nation helps you understand what to expect before,
                    during, and after your session.
                </p>

                {/* Buttons – non‑clickable but with hover animation */}
                <div className="flex flex-wrap justify-center gap-4">
                    <div
                        role="button"
                        className="bg-green-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-105 hover:shadow-green-600/50 text-lg cursor-default"
                        onClick={(e) => e.preventDefault()}
                    >
                        Book Treatment
                    </div>
                    <div
                        role="button"
                        className="border border-white/30 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:border-green-400 hover:text-green-400 hover:bg-green-500/10 text-lg cursor-default"
                        onClick={(e) => e.preventDefault()}
                    >
                        Contact Us
                    </div>
                </div>
            </motion.div>
        </section>
    );
}