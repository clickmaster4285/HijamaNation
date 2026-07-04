import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaWhatsapp, FaArrowRight, FaStar, FaCheckCircle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] pt-16 pb-8 px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        {/* Column 1 – Brand */}
        <div className="flex flex-col gap-4">
          <img src="/images/logo.png" alt="HijamaNation" className="h-10 w-auto object-contain self-start" />
          <p className="text-white/50 text-sm leading-relaxed">
            Empowering Muslim women through world-class Hijama practitioner training since 2011.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 text-sm">
              <FaInstagram />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 text-sm">
              <FaFacebookF />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 text-sm">
              <FaYoutube />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 text-sm">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 text-sm">
              <FaWhatsapp />
            </a>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm mt-2">
            <span>✉</span>
            <span>info@thehijamaacademy.com</span>
          </div>
        </div>

        {/* Column 2 – Program */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5">Program</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Diploma Overview</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Curriculum</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Accreditations</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Mentorship</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Community</a></li>
          </ul>
        </div>

        {/* Column 3 – Company */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Our Story</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Press</a></li>
            <li><a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Column 4 – Stay Connected (improved) */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
            Stay Connected
            <span className="w-8 h-0.5 bg-green-500/60 rounded-full"></span>
          </h4>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Healing wisdom, Sunnah tips, and course updates delivered to your inbox.
          </p>
          <div className="flex items-center gap-2 mb-5">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500 transition-colors"
            />
            <button className="w-11 h-11 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 flex-shrink-0 group">
              <FaArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Accreditation card – improved */}
          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-white/30 text-xs uppercase tracking-widest mb-2">
                <FaStar className="text-yellow-400/60 w-3 h-3" />
                <span>Trusted & Accredited</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-white/70 text-sm">
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-green-400 w-3.5 h-3.5" />
                  IPHM
                </span>
                <span className="w-px h-4 bg-white/10"></span>
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-green-400 w-3.5 h-3.5" />
                  CPD Certified
                </span>
                <span className="w-px h-4 bg-white/10"></span>
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-green-400 w-3.5 h-3.5" />
                  Internationally Recognised
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr className="border-white/10 mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © 2024 Hijama Nation. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/30 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-white/30 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
          <a href="#" className="text-white/30 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}