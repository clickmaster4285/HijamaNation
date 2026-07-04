

const courses = [
  {
    id: 1,
    image: "/images/hero1.jpeg",
    tags: [{ label: "Most Popular", color: "bg-red-500" }],
    title: "Hijama Certification Course for Females",
    desc: "A comprehensive programme designed specifically for Muslim women, covering theory, ethics, and supervised practice.",
    weeks: "6 Weeks",
    certified: "Certified",
    large: true,
  },
  {
    id: 2,
    image: "/images/hijama.jpeg",
    tags: [
      { label: "Male Training", color: "bg-gray-700" },
      { label: "In Demand", color: "bg-blue-600" },
    ],
    title: "Hijama Certification Course for Males",
    weeks: "6 Weeks",
    certified: "Certified",
  },
  {
    id: 3,
    image: "/images/training.jpeg",
    tags: [
      { label: "Advanced Practice", color: "bg-gray-700" },
      { label: "Advanced", color: "bg-green-600" },
    ],
    title: "Hijama Practitioner Training",
    weeks: "6 Weeks",
    certified: "Certified",
  },
  {
    id: 4,
    image: "/images/hijama.jpeg",
    tags: [{ label: "Cupping Therapy", color: "bg-gray-700" }],
    title: "Cupping Therapy Course",
    weeks: "6 Weeks",
    certified: "Certified",
  },
  // Massage Cupping Therapy removed
  {
    id: 6, // id updated to maintain uniqueness
    image: "/images/hijama.jpeg",
    tags: [
      { label: "Healthcare", color: "bg-gray-700" },
      { label: "New", color: "bg-blue-600" },
    ],
    title: "Healthcare Professional Training",
    weeks: "6 Weeks",
    certified: "Certified",
  },
];

function CourseCard({ course }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-full">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Tags */}
      <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
        {course.tags.map((tag) => (
          <span
            key={tag.label}
            className={`${tag.color} text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-xl md:text-lg mb-1 lg:text-2xl">
          {course.title}
        </h3>
        {course.desc && (
          <p className="text-white/70 text-sm mb-2 leading-relaxed lg:text-md max-w-2xl">
            {course.desc}
          </p>
        )}
        <div className="flex items-center gap-4 text-white/60 text-sm">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
            {course.weeks}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
            {course.certified}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Programmes() {
  return (
    <section className="bg-white py-16 px-8 md:px-16 lg:px-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-4">
        <div>
          <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-2">
            Our Programmes
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Certification{" "}
            <em className="text-green-600 italic font-serif">Programmes</em>
          </h2>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs md:mt-10">
          Professional Hijama and cupping therapy education for every stage of your journey.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-4">
        
        {/* Top Row */}
        <div className="flex gap-4 h-[520px]">
          
          {/* Large Card - Female (index 0) */}
          <div className="w-[58%] flex-shrink-0">
            <CourseCard course={courses[0]} />
          </div>

          {/* Right Column - Male & Practitioner stacked (indices 1,2) */}
          <div className="flex flex-col gap-5 flex-1">
            <div className="h-[248px]">
              <CourseCard course={courses[1]} />
            </div>
            <div className="h-[248px]">
              <CourseCard course={courses[2]} />
            </div>
          </div>

        </div>

        {/* Bottom Row – now only 2 cards: Cupping (index 3) and Healthcare (index 4) */}
        <div className="flex gap-4 h-[280px]">
          <div className="flex-1">
            <CourseCard course={courses[3]} />
          </div>
          <div className="flex-1">
            <CourseCard course={courses[4]} />
          </div>
        </div>

      </div>

      {/* View All Button */}
      <div className="flex justify-end mt-8">
        <a
          href="#"
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
        >
          View All Programmes
        </a>
      </div>
    </section>
  );
}