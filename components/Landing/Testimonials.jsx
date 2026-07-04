"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "The course seems to be the most comprehensive and thorough compared to other courses I looked at. There's also ongoing student support during and after the course. Was also recommended by a graduate.",
    name: "Sakeenah",
    age: 52,
    role: "Natural Health Practitioner",
    location: "Birmingham, UK",
    initials: "SK",
    color: "#1c7c47",
  },
  {
    quote:
      "I came with zero medical background and left feeling fully confident to practise. The instructors genuinely care about every student's progress. The blend of Islamic knowledge and clinical training is unmatched.",
    name: "Yusuf",
    age: 34,
    role: "Complementary Therapist",
    location: "Manchester, UK",
    initials: "YU",
    color: "#e05c2a",
  },
  {
    quote:
      "Hijama Nation gave me the tools, ethics, and hands-on experience I needed. The ongoing CPD support after graduation is what really sets them apart from every other provider.",
    name: "Fatima",
    age: 29,
    role: "Nurse & Hijama Practitioner",
    location: "London, UK",
    initials: "FA",
    color: "#1c7c47",
  },
  {
    quote:
      "As a GP, I was sceptical at first. But the way they integrate modern clinical standards with Prophetic medicine is genuinely impressive. I now confidently recommend Hijama to my own patients.",
    name: "Dr. Imran",
    age: 45,
    role: "General Practitioner",
    location: "Birmingham, UK",
    initials: "DI",
    color: "#e05c2a",
  },
  {
    quote:
      "The community you build during the training stays with you. I have a full network of practitioners across the UK I can call on. The course changed my life and my career completely.",
    name: "Amina",
    age: 38,
    role: "Wellness Coach",
    location: "Leeds, UK",
    initials: "AM",
    color: "#1c7c47",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [headerRef, headerInView] = useInView(0.2);
  const [bodyRef, bodyInView] = useInView(0.1);
  const intervalRef = useRef(null);

  const goTo = (i) => {
    if (i === active) return;
    setActive(i);
    setAnimKey(k => k + 1);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => goTo((i + 1) % testimonials.length), 7000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(a => {
        const next = (a + 1) % testimonials.length;
        setAnimKey(k => k + 1);
        return next;
      });
    }, 7000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = testimonials[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600&display=swap');

        /* ── KEYFRAMES ── */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(48px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes quoteReveal {
          0%   { opacity: 0; transform: translateY(24px) scale(0.98); clip-path: inset(0 0 100% 0); }
          100% { opacity: 1; transform: translateY(0)    scale(1);    clip-path: inset(0 0 0% 0); }
        }
        @keyframes authorSlide {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes drawLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.6) rotate(-8deg); }
          70%  { transform: scale(1.08) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes floatDot {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbFloat {
          0%,100% { transform: translate(0, 0) scale(1); }
          33%      { transform: translate(18px, -14px) scale(1.04); }
          66%      { transform: translate(-12px, 10px) scale(0.97); }
        }

        /* ── SECTION ── */
        .tm-section {
          font-family: 'Inter', sans-serif;
          background: #1a2e1a;
          padding: 88px 80px;
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 1024px) { .tm-section { padding: 64px 48px; } }
        @media (max-width: 768px)  { .tm-section { padding: 48px 24px; } }

        /* Floating background orbs */
        .tm-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .tm-orb-1 {
          width: 340px; height: 340px;
          background: rgba(28,124,71,0.18);
          top: -80px; right: -60px;
          animation: orbFloat 9s ease-in-out infinite;
        }
        .tm-orb-2 {
          width: 220px; height: 220px;
          background: rgba(224,92,42,0.1);
          bottom: -40px; left: 5%;
          animation: orbFloat 12s ease-in-out infinite reverse;
        }
        .tm-orb-3 {
          width: 140px; height: 140px;
          background: rgba(28,124,71,0.1);
          top: 40%; left: 38%;
          animation: orbFloat 15s ease-in-out infinite 3s;
        }

        /* ── HEADER ── */
        .tm-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .tm-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #52b788;
          margin: 0 0 12px;
          display: block;
          opacity: 0;
        }
        .tm-eyebrow.visible {
          animation: revealUp 0.6s ease forwards;
        }

        .tm-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin: 0;
          opacity: 0;
        }
        .tm-heading.visible {
          animation: revealUp 0.7s ease 0.12s forwards;
        }
        .tm-heading em {
          font-style: italic;
          background: linear-gradient(90deg, #52b788, #1c7c47, #52b788);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* Stats strip */
        .tm-stats {
          display: flex;
          gap: 32px;
          opacity: 0;
        }
        .tm-stats.visible {
          animation: revealLeft 0.6s ease 0.3s forwards;
        }
        .tm-stat-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: #52b788;
          line-height: 1;
        }
        .tm-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 3px;
        }
        .tm-stat-divider {
          width: 1px;
          background: rgba(255,255,255,0.1);
          align-self: stretch;
        }

        /* ── BODY ── */
        .tm-body {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 52px;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 900px) {
          .tm-body { grid-template-columns: 1fr; }
        }

        /* ── LEFT QUOTE PANEL ── */
        .tm-quote-panel {
          opacity: 0;
        }
        .tm-quote-panel.visible {
          animation: fadeIn 0.7s ease 0.2s forwards;
        }

        /* Animated underline */
        .tm-line {
          height: 1px;
          background: rgba(255,255,255,0.12);
          margin-bottom: 40px;
          transform-origin: left;
          transform: scaleX(0);
        }
        .tm-line.visible {
          animation: drawLine 0.9s cubic-bezier(0.4,0,0.2,1) 0.35s forwards;
        }

        /* Giant quote mark */
        .tm-big-quote {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 120px;
          line-height: 0.65;
          color: #1c7c47;
          display: block;
          margin-bottom: 16px;
          user-select: none;
          opacity: 0;
        }
        .tm-big-quote.visible {
          animation: popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.5s forwards;
        }

        /* Quote text */
        .tm-quote {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(18px, 2.4vw, 26px);
          color: #ffffff;
          line-height: 1.6;
          margin: 0 0 36px;
          opacity: 0;
        }
        .tm-quote.enter {
          animation: quoteReveal 0.65s cubic-bezier(0.4,0,0.2,1) forwards;
        }

        /* Author */
        .tm-author {
          display: flex;
          align-items: center;
          gap: 16px;
          opacity: 0;
        }
        .tm-author.enter {
          animation: authorSlide 0.5s ease 0.18s forwards;
        }

        .tm-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          flex-shrink: 0;
          border: 2px solid rgba(255,255,255,0.2);
          transition: transform 0.3s ease;
          position: relative;
        }
        .tm-avatar::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1.5px solid rgba(82,183,136,0.35);
          animation: floatDot 3s ease-in-out infinite;
        }
        .tm-avatar:hover { transform: scale(1.08); }

        .tm-author-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
        }
        .tm-author-meta {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
        }

        /* Dots */
        .tm-dots {
          display: flex;
          gap: 8px;
          margin-top: 36px;
          align-items: center;
        }
        .tm-dot {
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: background 0.35s ease, width 0.35s cubic-bezier(0.4,0,0.2,1);
          width: 20px;
          border: none;
          padding: 0;
        }
        .tm-dot.active {
          background: #52b788;
          width: 48px;
        }
        .tm-dot:hover:not(.active) { background: rgba(255,255,255,0.4); }

        /* ── RIGHT SIDEBAR ── */
        .tm-sidebar {
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0;
        }
        .tm-sidebar.visible {
          animation: revealLeft 0.7s ease 0.35s forwards;
        }

        .tm-thumb {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 16px 18px;
          cursor: pointer;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.2s ease;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
        }
        .tm-thumb::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #52b788;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.3s ease;
          border-radius: 14px 0 0 14px;
        }
        .tm-thumb:hover::before,
        .tm-thumb.active::before { transform: scaleY(1); }
        .tm-thumb:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(37, 207, 128, 0.3);
          transform: translateX(4px);
        }
        .tm-thumb.active {
          background: rgba(28,124,71,0.25);
          border-color: rgba(50, 234, 148, 0.5);
          transform: translateX(4px);
        }

        .tm-thumb-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }
        .tm-thumb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .tm-thumb.active .tm-thumb-dot { background: #52b788; }

        .tm-thumb-name {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          transition: color 0.2s ease;
        }
        .tm-thumb.active .tm-thumb-name { color: #ffffff; }

        .tm-thumb-role {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          padding-left: 18px;
          transition: color 0.2s ease;
        }
        .tm-thumb.active .tm-thumb-role { color: rgba(255,255,255,0.6); }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <section className="tm-section" aria-label="Student Testimonials">
        {/* Background orbs */}
        <div className="tm-orb tm-orb-1" />
        <div className="tm-orb tm-orb-2" />
        <div className="tm-orb tm-orb-3" />

        {/* Header */}
        <div className="tm-header" ref={headerRef}>
          <div>
            <span className={`tm-eyebrow ${headerInView ? "visible" : ""}`}>Student Testimonial</span>
            <h2 className={`tm-heading ${headerInView ? "visible" : ""}`}>
              Voices of Our <em>Graduates</em>
            </h2>
          </div>
          <div className={`tm-stats ${headerInView ? "visible" : ""}`}>
            <div>
              <div className="tm-stat-num">4,000+</div>
              <div className="tm-stat-label">Students Certified</div>
            </div>
            <div className="tm-stat-divider" />
            <div>
              <div className="tm-stat-num">13+</div>
              <div className="tm-stat-label">Years Teaching</div>
            </div>
            <div className="tm-stat-divider" />
            <div>
              <div className="tm-stat-num">UK &amp; Global</div>
              <div className="tm-stat-label">Reach</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="tm-body" ref={bodyRef}>

          {/* Left: Quote */}
          <div className={`tm-quote-panel ${bodyInView ? "visible" : ""}`}>
            <div className={`tm-line ${bodyInView ? "visible" : ""}`} />
            <span className={`tm-big-quote ${bodyInView ? "visible" : ""}`}>"</span>

            <p key={`q-${animKey}`} className="tm-quote enter">
              {t.quote}
            </p>

            <div key={`a-${animKey}`} className="tm-author enter">
              <div
                className="tm-avatar"
                style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
              >
                {t.initials}
              </div>
              <div>
                <p className="tm-author-name">{t.name}</p>
                <p className="tm-author-meta">
                  Age {t.age} · {t.role}
                  <br />{t.location}
                </p>
              </div>
            </div>

            <div className="tm-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`tm-dot ${i === active ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className={`tm-sidebar ${bodyInView ? "visible" : ""}`}>
            {testimonials.map((item, i) => (
              <div
                key={i}
                className={`tm-thumb ${i === active ? "active" : ""}`}
                onClick={() => goTo(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === "Enter" && goTo(i)}
              >
                <div className="tm-thumb-top">
                  <span className="tm-thumb-dot" />
                  <span className="tm-thumb-name">{item.name}</span>
                </div>
                <div className="tm-thumb-role">{item.role} · {item.location}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}