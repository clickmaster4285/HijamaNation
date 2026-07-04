"use client";
import { useState, useEffect, useRef } from "react";

const checkpoints = [
  { text: "Over 13 years teaching Hijama nationally and internationally" },
  { text: "Trained and certified over 4,000 students across the UK" },
  { text: "Committed to safe, ethical, and Sunnah-compliant practice" },
  { text: "Dedicated to reviving Prophetic medicine in modern communities" },
  { text: "Ongoing CPD and integration of current healthcare standards" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function AboutSection() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [imageRef, imageInView] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600&display=swap');

        .hn-about {
          font-family: 'Inter', sans-serif;
          background: #ffffff;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 80px 80px;
          width: 100%;
        }

        .hn-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .hn-about { padding: 64px 48px; }
          .hn-container { gap: 48px; }
        }

        @media (max-width: 768px) {
          .hn-about { padding: 48px 24px; }
          .hn-container { grid-template-columns: 1fr; gap: 40px; }
          .hn-image-col { order: -1; }
        }

        /* LEFT CONTENT */
        .hn-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e05c2a;
          margin: 0 0 14px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .hn-eyebrow.visible { opacity: 1; transform: translateY(0); }

        .hn-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(38px, 4vw, 54px);
          font-weight: 700;
          color: #1a2e1a;
          line-height: 1.1;
          margin: 0 0 22px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.08s, transform 0.6s ease 0.08s;
        }
        .hn-heading.visible { opacity: 1; transform: translateY(0); }
        .hn-heading em { font-style: italic; color: #1c7c47; }

        .hn-quote-block {
          border-left: 3px solid #1c7c47;
          padding: 8px 0 8px 20px;
          margin: 0 0 22px;
          opacity: 0;
          transform: translateX(-12px);
          transition: opacity 0.6s ease 0.18s, transform 0.6s ease 0.18s;
        }
        .hn-quote-block.visible { opacity: 1; transform: translateX(0); }

        .hn-quote {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 16px;
          color: #1c7c47;
          line-height: 1.7;
          margin: 0;
        }

        .hn-body {
          font-size: 15.5px;
          color: #4a5568;
          line-height: 1.8;
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease 0.26s, transform 0.6s ease 0.26s;
        }
        .hn-body.visible { opacity: 1; transform: translateY(0); }

        .hn-checklist {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
        }

        .hn-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: #2d3748;
          padding: 6px 0;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .hn-checklist li.visible { opacity: 1; transform: translateX(0); }

        .hn-check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #e8f5ef;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .hn-check-icon svg {
          width: 11px;
          height: 11px;
          stroke: #1c7c47;
          stroke-width: 2.5;
          fill: none;
        }

        .hn-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1c7c47;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity 0.55s ease 0.5s,
            transform 0.55s ease 0.5s,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }
        .hn-cta.visible { opacity: 1; transform: translateY(0); }
        .hn-cta:hover {
          background: #165f38;
          box-shadow: 0 8px 24px rgba(28,124,71,0.28);
        }
        .hn-cta svg {
          width: 16px;
          height: 16px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
          transition: transform 0.2s ease;
        }
        .hn-cta:hover svg { transform: translateX(3px); }

        /* RIGHT IMAGE */
        .hn-image-col {
          position: relative;
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s;
        }
        .hn-image-col.visible { opacity: 1; transform: translateX(0); }

        .hn-image-frame {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          width: 100%;
          aspect-ratio: 5/4;
          background: #e8f5ef;
        }

        .hn-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 6s ease;
        }
        .hn-image-col.visible .hn-image-frame img { transform: scale(1.04); }

        .hn-image-badge {
          position: absolute;
          bottom: -18px;
          left: -18px;
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 210px;
          opacity: 0;
          transform: translateY(10px) scale(0.95);
          transition: opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s;
        }
        .hn-image-col.visible .hn-image-badge { opacity: 1; transform: translateY(0) scale(1); }

        .hn-badge-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1c7c47, #2ecc71);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          flex-shrink: 0;
        }

        .hn-badge-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: #1a2e1a;
          line-height: 1;
        }

        .hn-badge-label {
          font-size: 12px;
          color: #718096;
          line-height: 1.35;
          margin-top: 3px;
        }

        .hn-dot-accent {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #e8f5ef;
          border: 3px solid #1c7c47;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hn-eyebrow, .hn-heading, .hn-quote-block,
          .hn-body, .hn-checklist li, .hn-cta,
          .hn-image-col, .hn-image-badge {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="hn-about" aria-label="About Hijama Nation">
        <div className="hn-container">

          {/* LEFT: Content */}
          <div ref={sectionRef}>
            <p className={`hn-eyebrow ${sectionInView ? "visible" : ""}`}>About Us</p>

            <h2 className={`hn-heading ${sectionInView ? "visible" : ""}`}>
              Learn From <em>Experienced</em> Practitioners
            </h2>

            <blockquote className={`hn-quote-block ${sectionInView ? "visible" : ""}`}>
              <p className="hn-quote">
                Our mission is not just to certify    it is to equip every student with the
                knowledge, ethics, and confidence to revive Prophetic medicine in their communities.
              </p>
            </blockquote>

            <p className={`hn-body ${sectionInView ? "visible" : ""}`}>
              Founded in 2011, Hijama Nation was built on a deep belief that Prophetic medicine
              deserves the same respect, rigour, and professionalism as modern healthcare.
              Our comprehensive training combines authentic Islamic principles with modern clinical
              standards ensuring every student gains both theoretical understanding and real-world
              practical skills.
            </p>

            <ul className="hn-checklist" role="list">
              {checkpoints.map((item, i) => (
                <li
                  key={i}
                  className={sectionInView ? "visible" : ""}
                  style={{ transitionDelay: sectionInView ? `${0.32 + i * 0.08}s` : "0s" }}
                >
                  <span className="hn-check-icon" aria-hidden="true">
                    <svg viewBox="0 0 12 12">
                      <polyline points="1.5,6 4.5,9 10.5,3" />
                    </svg>
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <a href="#team" className={`hn-cta ${sectionInView ? "visible" : ""}`}>
              Meet Our Team
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Image */}
          <div className={`hn-image-col ${imageInView ? "visible" : ""}`} ref={imageRef}>
            <div className="hn-image-frame">
              <img
                src="/images/Healthcare Professionals.png"
                alt="Hijama cupping therapy being performed by a certified practitioner"
              />
            </div>

            <div className="hn-image-badge" role="img" aria-label="13+ years of experience">
              <div className="hn-badge-icon" aria-hidden="true">🏅</div>
              <div>
                <div className="hn-badge-num">13+ Years</div>
                <div className="hn-badge-label">Teaching Hijama<br />Nationally & Internationally</div>
              </div>
            </div>

            <div className="hn-dot-accent" aria-hidden="true">☽</div>
          </div>

        </div>
      </section>
    </>
  );
}