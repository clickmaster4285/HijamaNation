const items = [
  "24/7 Support",
  "Sunnah-Based",
  "Science-Led",
  "Flexible Learning",
  "Professional Cert",
  "Established 2011",
  "UK-Based Training",
  "Certified Online",
  "Expert Instructors",
  "1,000+ Trained",
];

export default function Ticker() {
  return (
    <div className="bg-blue-900 py-3 overflow-hidden w-full">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Duplicated for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-white text-xs font-semibold tracking-widest uppercase mx-6"
          >
            <span className="text-yellow-400">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}