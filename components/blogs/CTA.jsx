// components/BlogCTA.jsx
"use client";

import { useState } from "react";

const benefits = [
  "Learn a meaningful Sunnah-based skill",
  "Build confidence",
  "Understand safe practice",
  "Work toward certification",
];

export default function BlogCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <style>{`
        .cta-section {
          padding: 80px 0;
          width: 100%;
        }
        @media (max-width: 768px) {
          .cta-section { padding: 60px 0; }
        }

        .cta-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(74,222,128,0.15) 0.8px, transparent 1px);
          background-size: 24px 24px;
          mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 70%);
          z-index: 0;
        }

        .cta-glow {
          position: absolute;
          top: -10%;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 700px;
          background: radial-gradient(circle, rgba(34,197,94,0.16) 0%, transparent 65%);
          z-index: 0;
          pointer-events: none;
          animation: cta-pulse 6s ease-in-out infinite;
        }

        @keyframes cta-pulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.08); }
        }

        .cta-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cta-inner.show {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          justify-content: flex-start;
          width: 100%;
        }
        .cta-tag-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #22c55e);
        }
        .cta-tag-line:last-child {
          display: none;
        }
        .cta-tag-label {
          color: #4ade80;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cta-heading {
          font-family: Georgia, serif;
          color: #fff;
          font-size: clamp(30px, 5vw, 52px);
          line-height: 1.15;
          margin: 0 0 20px;
          text-align: left;
        }
        .cta-heading .accent { color: #22c55e; }

        .cta-lead {
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 32px;
          max-width: 700px;
          text-align: left;
        }

        .cta-checklist {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 20px;
          margin: 0 0 14px;
          max-width: 600px;
        }
        @media (max-width: 560px) {
          .cta-checklist { grid-template-columns: 1fr; max-width: 100%; }
        }

        .cta-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease, background 0.3s ease;
        }
        .cta-check-item.show {
          opacity: 1;
          transform: translateY(0);
        }
        .cta-check-item:hover {
          border-color: rgba(34,197,94,0.35);
          background: rgba(34,197,94,0.06);
        }

        .cta-check-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(34,197,94,0.18);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .cta-check-icon svg {
          width: 11px;
          height: 11px;
        }
        .cta-check-text {
          color: rgba(255,255,255,0.85);
          font-size: 14.5px;
          line-height: 1.5;
        }

        .cta-highlight {
          color: #4ade80;
          font-weight: 600;
          font-size: 15px;
          margin: 22px 0 34px;
          text-align: left;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 16px;
          margin-bottom: 28px;
          width: 100%;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #22c55e, #15803d);
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 38px;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 12px 30px rgba(34,197,94,0.32);
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          cursor: default;
        }
        .cta-btn-primary:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 16px 40px rgba(34,197,94,0.48);
        }
        .cta-btn-primary svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }
        .cta-btn-primary:hover svg {
          transform: translateX(3px);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          padding: 16px 38px;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: default;
        }
        .cta-btn-secondary:hover {
          border-color: rgba(74,222,128,0.6);
          color: #4ade80;
          background: rgba(34,197,94,0.08);
        }

        .cta-trust {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
          width: 100%;
        }
        .cta-trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }
        .cta-trust-item svg {
          width: 14px;
          height: 14px;
          color: #4ade80;
        }

        /* Form styles */
        .cta-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 2rem;
        }
        .cta-form input,
        .cta-form textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          color: #fff;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .cta-form input::placeholder,
        .cta-form textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .cta-form input:focus,
        .cta-form textarea:focus {
          border-color: #22c55e;
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
        }
        .cta-form textarea {
          resize: vertical;
          min-height: 100px;
        }
        .cta-form-submit {
          width: 100%;
          background: linear-gradient(135deg, #22c55e, #15803d);
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.85rem;
          border-radius: 999px;
          border: none;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(34, 197, 94, 0.3);
        }
        .cta-form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(34, 197, 94, 0.45);
        }
        .cta-form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-inner, .cta-check-item, .cta-glow {
            transition: none !important;
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <section className="cta-section bg-green-950 relative overflow-hidden w-full">
        <div className="cta-grid-pattern" />
        <div className="cta-glow" />

        {/* ─── Full width inner – no max-w constraint ─── */}
        <div className={`cta-inner show px-8 sm:px-16 md:px-28 lg:px-40 xl:px-52`}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN (Content & Buttons) */}
            <div className="lg:col-span-3">
              <div className="cta-tag">
                <span className="cta-tag-line" />
                <span className="cta-tag-label">Start Today</span>
              </div>

              <h2 className="cta-heading">
                Start Your Hijama Learning Journey <span className="accent">Today</span>
              </h2>

              <p className="cta-lead">
                If you want to learn Hijama in a structured, supported, and responsible way, this
                Online Hijama Certification Course can help you take the next step.
              </p>

              <div className="cta-checklist">
                {benefits.map((text, idx) => (
                  <div
                    key={idx}
                    className="cta-check-item show"
                    style={{ transitionDelay: `${0.1 + idx * 0.08}s` }}
                  >
                    <span className="cta-check-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="cta-check-text">{text}</span>
                  </div>
                ))}
              </div>

              <p className="cta-highlight">Start your journey as a Hijama student today.</p>

              <div className="cta-buttons">
                <div
                  role="button"
                  className="cta-btn-primary"
                  onClick={(e) => e.preventDefault()}
                >
                  Apply Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <div
                  role="button"
                  className="cta-btn-secondary"
                  onClick={(e) => e.preventDefault()}
                >
                  View Course Details
                </div>
              </div>

              <div className="cta-trust">
                <span className="cta-trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                  Since 2011
                </span>
                <span className="cta-trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Online Certification
                </span>
                <span className="cta-trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12.5 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  4,000+ Trained
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN (Contact Form) */}
            <div className="lg:col-span-2">
              <div className="cta-form">
                <h3 className="text-xl font-semibold text-white mb-5 text-center lg:text-left">
                  Get in Touch
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="submit"
                    className="cta-form-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}