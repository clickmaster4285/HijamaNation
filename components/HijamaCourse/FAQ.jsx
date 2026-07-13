'use client ';
// src/components/HijamaCourse/FAQ.jsx
import { useState } from "react";

const FAQItem = ({ question, answer, index, inView, isOpen, onToggle }) => {
  return (
    <div
      className={`faq-card ${inView ? "show" : ""} ${isOpen ? "faq-card--open" : ""}`}
      style={{ animationDelay: `${0.25 + index * 0.07}s` }}
    >
      <button className="faq-btn" onClick={onToggle}>
        <span className="faq-question">{question}</span>
        <span className={`faq-icon ${isOpen ? "faq-icon--open" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className={`faq-body ${isOpen ? "faq-body--open" : ""}`}>
        <div className="faq-body-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ({ faqs, inView }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half).map((f, i) => ({ f, idx: i }));
  const rightFaqs = faqs.slice(half).map((f, i) => ({ f, idx: i + half }));

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

    @keyframes bombText {
      0% { transform: scale(0.85) translateY(24px); opacity: 0; }
      60% { transform: scale(1.03) translateY(-3px); opacity: 1; }
      100% { transform: scale(1) translateY(0); opacity: 1; }
    }

    @keyframes bombCard {
      0% { transform: translateY(26px) scale(0.96); opacity: 0; }
      60% { transform: translateY(-3px) scale(1.005); opacity: 1; }
      100% { transform: translateY(0) scale(1); opacity: 1; }
    }

    @keyframes glowFloat {
      0%, 100% { transform: translate(0,0) scale(1); }
      50% { transform: translate(-3%, 4%) scale(1.08); }
    }

    .faq-section {
      position: relative;
      overflow: hidden;
      background: #f0f5f0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .faq-bg-glow-a {
      position: absolute;
      top: -10%;
      right: -8%;
      width: 30rem;
      height: 30rem;
      background: radial-gradient(circle, rgba(255,138,101,0.06) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
      animation: glowFloat 16s ease-in-out infinite;
    }

    .faq-bg-glow-b {
      position: absolute;
      bottom: -15%;
      left: -10%;
      width: 24rem;
      height: 24rem;
      background: radial-gradient(circle, rgba(28,124,71,0.05) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
      animation: glowFloat 20s ease-in-out infinite reverse;
    }

    .faq-section .reveal {
      opacity: 0;
    }

    .faq-section .reveal.show {
      animation: bombText 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .faq-eyebrow {
      font-family: 'Inter', sans-serif;
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #1c7c47;
      background: rgba(28,124,71,0.12);
      padding: 4px 12px;
      border-radius: 20px;
    }

    .faq-heading {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: clamp(28px, 3.6vw, 42px);
      font-weight: 700;
      color: #1a2e1a;
      line-height: 1.15;
      margin: 10px 0 0;
      text-align: left;
    }

    .faq-heading em {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      color: #1c7c47;
    }

    .faq-sub {
      font-family: 'Inter', sans-serif;
      font-size: 15.5px;
      font-weight: 400;
      line-height: 1.6;
      color: rgba(26,46,26,0.55);
      max-width: 560px;
      margin: 12px 0 0;
      text-align: left;
    }

    .faq-columns {
      position: relative;
      z-index: 1;
      display: flex;
      gap: 24px;
      margin-top: 38px;
      align-items: flex-start;
    }

    .faq-column {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    @media (max-width: 760px) {
      .faq-columns {
        flex-direction: column;
      }
    }

    .faq-card {
      opacity: 0;
      background: #ffffff;
      border: 1px solid rgba(26,46,26,0.08);
      border-radius: 12px;
      box-shadow: 0 1px 2px rgba(26,46,26,0.03);
      transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
    }

    .faq-card.show {
      animation: bombCard 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .faq-card--open {
      border-color: rgba(28,124,71,0.3);
      box-shadow: 0 14px 30px -16px rgba(26,46,26,0.18);
    }

    .faq-card:hover {
      border-color: rgba(28,124,71,0.25);
    }

    .faq-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      padding: 20px 22px;
      font: inherit;
    }

    .faq-question {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #1a2e1a;
      line-height: 1.4;
      padding-bottom: 10px;
      border-bottom: 2px solid transparent;
      transition: color 0.3s ease, border-color 0.3s ease;
      flex: 1;
    }

    .faq-card--open .faq-question {
      color: #1c7c47;
      border-bottom-color: rgba(28,124,71,0.45);
    }

    .faq-btn:hover .faq-question {
      color: #1c7c47;
    }

    .faq-icon {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.5px solid rgba(26,46,26,0.18);
      color: #1a2e1a;
      border-radius: 50%;
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1),
                  background 0.3s ease,
                  border-color 0.3s ease,
                  color 0.3s ease;
    }

    .faq-btn:hover .faq-icon {
      border-color: #1c7c47;
      color: #1c7c47;
    }

    .faq-icon--open {
      transform: rotate(135deg);
      background: #1c7c47;
      border-color: #1c7c47;
      color: #ffffff;
    }

    .faq-body {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .faq-body--open {
      grid-template-rows: 1fr;
    }

    .faq-body-inner {
      overflow: hidden;
    }

    .faq-body p {
      font-family: 'Inter', sans-serif;
      font-size: 13.5px;
      font-weight: 400;
      line-height: 1.7;
      color: rgba(26,46,26,0.58);
      margin: 0;
      padding: 0 22px 22px;
    }

    @media (prefers-reduced-motion: reduce) {
      .faq-section .reveal,
      .faq-card,
      .faq-icon,
      .faq-body,
      .faq-bg-glow-a,
      .faq-bg-glow-b {
        animation: none !important;
        transition: none !important;
        opacity: 1 !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="faq-section py-14 md:py-20">
        <div className="faq-bg-glow-a" />
        <div className="faq-bg-glow-b" />

        <div className="px-8 md:px-16 lg:px-20">
          <span className={`faq-eyebrow reveal ${inView ? "show" : ""}`}>Have Questions?</span>
          <h2 className={`faq-heading reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.08s" }}>
            Frequently Asked <em>Questions</em>
          </h2>
          <p className={`faq-sub reveal ${inView ? "show" : ""}`} style={{ animationDelay: "0.16s" }}>
            Everything you need to know before you begin your Hijama journey.
          </p>

          <div className="faq-columns">
            <div className="faq-column">
              {leftFaqs.map(({ f, idx }) => (
                <FAQItem
                  key={idx}
                  question={f.q}
                  answer={f.a}
                  index={idx}
                  inView={inView}
                  isOpen={openIndex === idx}
                  onToggle={() => toggle(idx)}
                />
              ))}
            </div>
            <div className="faq-column">
              {rightFaqs.map(({ f, idx }) => (
                <FAQItem
                  key={idx}
                  question={f.q}
                  answer={f.a}
                  index={idx}
                  inView={inView}
                  isOpen={openIndex === idx}
                  onToggle={() => toggle(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}