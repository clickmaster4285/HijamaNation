import Link from "next/link";

export default function MuddassarRaja() {
  return (
    <>
      <style>{`
        /* Animated background gradient */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-bg {
          background: linear-gradient(120deg, #f0fdf4, #dcfce7, #f0fdf4);
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }
        /* Floating animation for the image */
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }
        .image-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <section className="about-section relative overflow-hidden py-14 md:py-20 animated-bg px-6 md:px-12 lg:px-20">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#16a34a" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden border border-green-500/30 shadow-2xl shadow-green-900/30 image-float">
              <img
                src="/images/muddassarRaja.png"
                alt="Muddassar Raja – Co-Founder & CEO"
                className="w-full h-auto object-cover aspect-[3/2]"
              />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2 className="about-heading text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4">
                Muddassar Raja <br />
                <span className="text-green-600 italic text-3xl md:text-4xl">Co‑Founder &amp; CEO</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-transparent mb-6" />

              <p className="about-body text-gray-700 text-base md:text-lg leading-relaxed">
                <strong className="text-green-700">Muddassar Raja</strong> is a Certified Hijama Practitioner, Life Coach, and
                Public Speaker. His mission is to revive and establish the Sunnah of Hijama Cupping
                Therapy and promote natural health treatments. He has successfully educated and
                qualified many students globally.
              </p>

              <p className="about-body text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                His expertise in business and digital marketing has been a powerful driving force in
                bringing Hijama to the forefront globally. His internet marketing skills have provided
                free education about Hijama to over <strong className="text-green-700">20,000 people</strong> via email, and
                countless more on social media platforms such as Facebook, YouTube, and Twitter.
              </p>

              <p className="about-body text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                His vision is to train successful Hijama Entrepreneurs and empower them with the
                valuable tools of social media and marketing skills. He is responsible for the
                <strong className="text-green-700"> “Holistic Hijama Approach” </strong> in the UK – a philosophy that embraces
                a holistic, natural, and Islamic approach to Hijama practice, as opposed to dressing
                it up as a purely clinical or Chinese treatment.
              </p>

              <p className="about-body text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                The HNA philosophy is about <strong className="text-green-700">“Getting Back to Our Roots”</strong> and learning
                about Traditional Islamic Medicine (TIM) which encompasses Quran, Sunnah, and Science.
              </p>

              {/* Non-clickable button – all hover/transition animations preserved */}
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-block mt-6 px-8 py-3 border border-green-600/40 text-green-700 font-semibold rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
              >
                Meet Our Team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}