// components/blogs/SidebarCTA.jsx
'use client';

import Link from 'next/link';

export default function SidebarCTA() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-green-800/10 bg-white shadow-md shadow-green-900/5 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/10 hover:-translate-y-0.5">
      {/* Subtle top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />

      <div className="p-4">
        {/* Icon badge */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50 border border-green-800/10 mb-2.5 transition-transform duration-300 hover:scale-110 hover:rotate-6">
          <svg
            className="w-4 h-4 text-green-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="font-serif text-sm font-bold text-green-950 mb-1.5">
          Ready to Experience Hijama?
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-3.5">
          Book a session with our certified practitioners and start your
          journey toward natural, Sunnah-based wellness.
        </p>

       <Link
  href="#"
  className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-green-700 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-green-800 hover:shadow-md hover:shadow-green-900/20"
>
  Book Your Appointment
  <span
    aria-hidden="true"
    className="transition-transform duration-200 group-hover:translate-x-1"
  >
    →
  </span>
</Link>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-green-900/60 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
          Certified &amp; Sunnah-Compliant Practice
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}