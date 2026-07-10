'use client';

import { useEffect, useState } from 'react';

export default function TableOfContents({ headings, className }) {
  // Only top-level (h2) headings are shown — sub-headings are omitted on purpose.
  const mainHeadings = (headings || []).filter((h) => h.level === 2);

  const [activeId, setActiveId] = useState(mainHeadings?.[0]?.id);

  useEffect(() => {
    if (mainHeadings.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    );

    mainHeadings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headings]);

  if (mainHeadings.length === 0) return null;

  return (
    // position: sticky — it scrolls down naturally with the page until it
    // reaches `top-28` from the viewport's top, then holds there while you
    // keep scrolling through the article. Because sticky is always bound
    // by its parent's box (the flex row that holds both the TOC and the
    // article), it automatically releases and scrolls away the instant the
    // article column ends — it can never continue on top of the footer,
    // since the footer sits outside that parent entirely.
    <nav
      aria-label="Table of contents"
      className={className || 'hidden lg:block w-64 shrink-0 self-start sticky top-28'}
    >
      <div className="rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur-sm p-5 shadow-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
        <p className="text-xs font-semibold tracking-widest text-emerald-700 uppercase mb-4">
          Contents
        </p>
        <ul className="space-y-1">
          {mainHeadings.map((h, i) => {
            const isActive = activeId === h.id;
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`group flex items-start gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700 font-semibold'
                      : 'text-gray-500 hover:bg-emerald-50/60 hover:text-emerald-600'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-gray-300 text-gray-400 group-hover:border-emerald-400 group-hover:text-emerald-500'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="leading-snug">{h.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}