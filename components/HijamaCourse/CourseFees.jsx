import { motion } from "framer-motion";

// Variants for staggered list items
const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function CourseFees({ inView }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-white pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-20 lg:pr-20 py-20 md:py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#16a34a_0.8px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#16a34a_0%,transparent_50%)] opacity-10"></div>

      {/* Floating Accent Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className={`reveal ${inView ? "show" : ""}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-stretch">

            {/* ── LEFT: title + content ─────────────────────── */}
            <div>
              {/* Title Block */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12"
              >
                <span className="eyebrow eyebrow--green inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-widest mb-6">
                  TRANSPARENT PRICING
                </span>

                <h2 className="text-5xl md:text-6xl font-serif text-green-950 leading-[1.1] tracking-tight mb-8 max-w-4xl">
                  Course Fees &amp; <span className="text-green-600">Flexible Payment Options</span>
                </h2>

                <div className="max-w-3xl">
                  <p className="text-green-700/80 text-lg md:text-xl leading-relaxed">
                    We believe in complete transparency. Know exactly what you're investing in – from comprehensive course content to dedicated support and industry-recognized certification.
                  </p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="space-y-8 max-w-4xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="prose prose-green max-w-none">
                  <p className="text-green-700/90 text-[17px] leading-relaxed">
                    Before enrolling, students should clearly understand the course fee, what is included, payment options, certification requirements, student support, course access, and assessment methods.
                  </p>

                  <div className="pt-6 border-t border-green-200 flex flex-wrap gap-x-8 gap-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-green-800">Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-green-800">Industry certification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-green-800">Premium support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-green-800">Flexible payments</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    role="button"
                    className="group inline-flex items-center gap-4 bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl shadow-green-900/20 hover:shadow-2xl hover:shadow-green-900/30 cursor-default"
                    onClick={(e) => e.preventDefault()}
                  >
                    Explore Full Pricing &amp; Plans
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* ── RIGHT: redesigned fee snapshot card ──────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(22,163,74,0.15)",
              }}
              className="flex"
            >
              <div className="w-full bg-white rounded-3xl border border-green-200 shadow-xl shadow-green-900/10 px-8 md:px-10 py-20 md:py-24 flex flex-col justify-center transition-shadow duration-300">
                {/* Heading with green accent */}
                <h3 className="font-serif text-2xl md:text-3xl text-green-800 mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-green-600 rounded-full"></span>
                  Fee Snapshot
                </h3>

                {/* Animated list */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                    },
                  }}
                  className="space-y-5"
                >
                  {[
                    { label: "Course Fee", value: "Contact for pricing", highlight: false },
                    { label: "Payment Plans", value: "Available", highlight: true },
                    { label: "Access Duration", value: "Lifetime", highlight: true },
                    { label: "Certification", value: "Included", highlight: true },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      className="flex items-center justify-between pb-4 border-b border-green-100 last:border-0 last:pb-0"
                    >
                      <span className="text-green-700/70 text-sm font-medium tracking-wide">
                        {item.label}
                      </span>
                      <span
                        className={`font-serif text-base font-semibold ${
                          item.highlight ? "text-green-600" : "text-green-800"
                        }`}
                      >
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Small decorative badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-8 pt-5 border-t border-green-200 flex items-center gap-2 text-xs text-green-600/70"
                >
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  Flexible payment options available
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}