import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] pt-16 pb-8 px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        <div className="flex flex-col gap-4">
            <img src={logo} alt="HijamaNation" className="h-10 w-auto object-contain self-start" />
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
          </div>
          <div className="flex items-center gap-2 text-white/40 text-sm mt-2">
            <span>✉</span>
            <span>hello@hijamanation.com</span>
          </div>
        </div>

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

        <div>
          <h4 className="text-white font-semibold text-sm mb-2">Stay Connected</h4>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Healing wisdom, Sunnah tips, and course updates delivered to your inbox.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-green-500 transition-colors"
            />
            <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 flex-shrink-0">
              →
            </button>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Accredited By</p>
            <p className="text-white/60 text-sm">IPHM · CPD Certified · Internationally Recognised</p>
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