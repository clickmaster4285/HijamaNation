import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > window.innerHeight - 100);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
   <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
  scrolled ? "bg-black shadow-lg" : "bg-transparent"
}`}>
    {/* Logo */}
<div className="flex items-center">
  <img
    src={logo}
    alt="HijamaNation Logo"
    className="h-12 w-auto object-contain"
  />
</div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
        {["Courses", "About", "Blog", "Contact"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#"
          className="text-white text-sm font-medium hover:text-green-400 transition-colors"
        >
          Student Login
        </a>
        <a
          href="#"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Explore Courses
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md py-6 px-8 flex flex-col gap-4 md:hidden">
          {["Courses", "About", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-sm font-medium hover:text-green-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <hr className="border-white/10" />
          <a href="#" className="text-white text-sm font-medium">
            Student Login
          </a>
          <a
            href="#"
            className="bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Explore Courses
          </a>
        </div>
      )}
    </nav>
  );
}