"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "../../data/navItems";

const TOPBAR_WHATSAPP = "447547424623";
const TOPBAR_EMAIL = "info@thehijamaacademy.com";
const waMessage = encodeURIComponent("Hi, I'd like to know more about Hijama Nation courses.");

export default function Navbar() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const isExternal = (href) => href && href.startsWith("http");

  useEffect(() => {
    const updateScrollState = () => {
      const hero = document.querySelector(".page-hero");
      const scrollY = window.scrollY;

      if (!hero) {
        // No hero section → transparent at top, black after 50px of scroll
        setIsScrolledPastHero(scrollY > 50);
        return;
      }

      const heroHeight = hero.getBoundingClientRect().height;
      // Switch to black only after scrolling past the entire hero height
      setIsScrolledPastHero(scrollY > heroHeight);
    };

    updateScrollState();

    window.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <>
      {/* ── TOPBAR (fixed above navbar) ────────────────────────────────── */}
      <div className="fixed left-0 top-0 w-full z-50 bg-[#0f1b2d] text-white text-sm">
        {/* Desktop Topbar */}
        <div className="hidden md:flex items-center justify-end gap-6 px-8 md:px-16 lg:px-20 py-2.5 border-b border-white/10">
          <a
            href={`https://wa.me/${TOPBAR_WHATSAPP}?text=${waMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200"
          >
            <svg className="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Whatsapp: (+44) 7547 424623</span>
          </a>

          <a
            href={`mailto:${TOPBAR_EMAIL}`}
            className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200"
          >
            <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Email: {TOPBAR_EMAIL}</span>
          </a>

          <Link
            href="/apply"
            className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors shadow-lg shadow-green-600/30"
          >
            Apply for Course
          </Link>
          <Link
            href="/book-treatment"
            className="border border-green-400 text-green-400 hover:bg-green-400/10 text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
          >
            Book Treatment
          </Link>
        </div>

        {/* Mobile Topbar */}
        <div className="md:hidden flex items-center justify-between px-4 py-2 border-b border-white/10">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap">
            <a
              href={`https://wa.me/${TOPBAR_WHATSAPP}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-green-400 transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${TOPBAR_EMAIL}`}
              className="flex items-center gap-1 hover:text-green-400 transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/apply"
              className="bg-green-600 hover:bg-green-700 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full transition-colors shadow-lg shadow-green-600/30 whitespace-nowrap"
            >
              Apply
            </Link>
            <Link
              href="/book-treatment"
              className="border border-green-400 text-green-400 hover:bg-green-400/10 text-[10px] font-semibold px-2.5 py-1 rounded-full transition-colors whitespace-nowrap"
            >
              Book
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR (below topbar) ────────────────────────────────── */}
      <nav
        className={`fixed left-0 top-[44px] w-full z-40 py-4 flex items-center justify-between px-8 md:px-16 lg:px-20 backdrop-blur-sm transition-colors duration-300 ${
          isScrolledPastHero ? "bg-black/80" : "bg-transparent"
        }`}
      >
        {/* Logo – links to homepage */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="HijamaNation Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              {item.subItems && item.subItems.length > 0 ? (
                <>
                  <button className="flex items-center gap-1 hover:text-green-400 transition-colors duration-200 group">
                    {item.label}
                    <svg className="w-3 h-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 rounded-2xl shadow-2xl shadow-green-900/20 py-2 bg-[#1a1f2e] border border-white/5 opacity-0 invisible translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out origin-top-left">
                    {item.subItems.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        target={isExternal(sub.href) ? "_blank" : undefined}
                        rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                        className="relative block px-5 py-2.5 text-white/80 hover:text-white hover:bg-green-500/5 hover:border-l-4 hover:border-green-400 transition-all duration-200 pl-6 hover:pl-8 before:content-[''] before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-green-500/0 hover:before:bg-green-400 before:transition-all before:duration-200"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href} className="hover:text-green-400 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://hijamacertification.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 font-medium px-4 py-2 rounded-full border border-green-400 hover:bg-green-400/10 transition-all duration-200"
          >
            Login
          </a>
          <Link
            href="/apply"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-lg shadow-green-600/30"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* ─── Mobile Menu (dropdown) ────────────────────────────────────── */}
        <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md overflow-hidden max-h-0 py-0 px-8">
          <div className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.subItems && item.subItems.length > 0 ? (
                  <>
                    <button className="flex items-center justify-between w-full text-white text-sm font-medium hover:text-green-400 transition-colors">
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="overflow-hidden max-h-0">
                      <div className="ml-3 border-l-2 border-green-500 pl-3 flex flex-col gap-2">
                        {item.subItems.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            target={isExternal(sub.href) ? "_blank" : undefined}
                            rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                            className="text-white/80 text-sm hover:text-green-400 transition-colors py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="text-white text-sm font-medium hover:text-green-400 transition-colors">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <hr className="border-white/10" />

            {/* Mobile menu extra links */}
            <a
              href={`https://wa.me/${TOPBAR_WHATSAPP}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Whatsapp: (+44) 7547 424623
            </a>
            <a
              href={`mailto:${TOPBAR_EMAIL}`}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {TOPBAR_EMAIL}
            </a>
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <Link href="/apply" className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors shadow-lg shadow-green-600/30">
                Apply for Course
              </Link>
              <Link href="/book-treatment" className="border border-green-400 text-green-400 hover:bg-green-400/10 text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors">
                Book Treatment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}