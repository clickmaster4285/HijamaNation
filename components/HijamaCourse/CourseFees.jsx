import { motion } from "framer-motion";

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
          {/* Title Block – left aligned */}
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

          {/* Left Content – now full width */}
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

            {/* ─── Non‑clickable CTA with full animations ─── */}
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
      </div>
    </section>
  );
}