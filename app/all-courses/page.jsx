"use client";

import { useState } from "react";

// Course data based on your images
const courses = [
    {
        id: 1,
        title: "Introduction to NATURAL HEALTH AND HIJAMA CUPPING THERAPY",
        subtitle: "A Complete Guide To Hijama Cupping Therapy: Why, What & How?",
        description: "A Beginners Guide to How Hijama Can Help Build Your Immune System, Get Rid Of Your Ailments and Give You Better Health",
        category: "Digital Book",
        author: "Hijama Nation Academy",
        type: "Course",
        image: "/images/natural health.png",
        badge: "Digital Book",
        badgeColor: "bg-blue-500"
    },
    {
        id: 2,
        title: "Science-Based Islamic FASTING",
        subtitle: "Digital Book: Science-Based Islamic Fasting",
        description: "Learn About The Scientific Health Benefits of Islamic Fasting",
        category: "Digital Book",
        author: "Hijama Nation Academy",
        type: "Course",
        image: "/images/science based.png",
        badge: "Digital Book",
        badgeColor: "bg-blue-500"
    },
    {
        id: 3,
        title: "Hijama Nation TV",
        subtitle: "Learn To Reverse Disease & Health Conditions",
        description: "For Yourself And For Your Loved Ones Using Hijama Cupping Therapy & Other Natural Remedies",
        category: "Media",
        author: "Hijama Nation Academy",
        type: "Course",
        image: "/images/hntv.png",
        badge: "Watch Now",
        badgeColor: "bg-red-500"
    },
    {
        id: 4,
        title: "HOME USE HIJAMA COURSE",
        subtitle: "A basic course for Home Use Hijama",
        description: "Learn Hijama Cupping Therapy To Use At Home On Your Family & Friends. An online self-help course to learn the procedure of Hijama Cupping Therapy and how to practice it safely on yourself and your family.",
        category: "Hijama Course",
        author: "Hijama Nation Academy",
        type: "Course",
        image: "/images/homeuse.png",
        badge: "Course",
        badgeColor: "bg-green-500"
    },
    {
        id: 5,
        title: "SCIENCE BASED Sunnah Health Course",
        subtitle: "Learn Sunnah Health to Build Your Immune System",
        description: "Science Based Sunnah Health Course - Learn Sunnah Health to Build Your Immune System",
        category: "Islamic Course",
        author: "Hijama Nation Academy",
        type: "Course",
        image: "/images/sunnah.png",
        badge: "Course",
        badgeColor: "bg-green-500"
    },
    {
        id: 6,
        title: "Special Offer: Bundle 1",
        subtitle: "Unani Typology & Sunnah Health & Free Bonus",
        description: "This excellent special offer gives you access to: Unani Typology & Prophetic Medicine Course 2, Sunnah Health In The Light Of Science Course 3",
        category: "Bundle",
        author: "Hijama Nation Academy",
        type: "Bundle",
        image: "/images/hijama1.png",
        badge: "Bundle",
        badgeColor: "bg-purple-500"
    },
    {
        id: 7,
        title: "Special Offer: Bundle 2",
        subtitle: "Home Use Hijama Course & Free Bonus: Islamic Fasting",
        description: "In this bundle, you have access to: 1. Home Use Hijama Course-Basic Hijama Training. 2. Science Based Islamic Fasting Digital eBook by Hijama...",
        category: "Bundle",
        author: "Hijama Nation Academy",
        type: "Bundle",
        image: "/images/hijamared.png",
        badge: "Bundle",
        badgeColor: "bg-purple-500"
    },
    {
        id: 8,
        title: "UNANI TYPOLOGY & Prophetic Medicine Course",
        subtitle: "Learn About Typology in Greco-Arab Medicine & Sunnah Health",
        description: "Eat According To Your Body Type Using Sunnah. Learn about your body type, food type and the environment on your health. Adjust your diet...",
        category: "Unani Medicine",
        author: "Hijama Nation Academy",
        type: "Course",
        image: "/images/typology.png",
        badge: "Course",
        badgeColor: "bg-green-500"
    }
];

// Get unique categories
const categories = ["All", ...new Set(courses.map(course => course.category))];
const types = ["All", ...new Set(courses.map(course => course.type))];

// Badge color -> matching accent (used for the badge dot + card border glow)
const badgeAccent = {
    "bg-blue-500": { text: "text-blue-600", ring: "rgba(59,130,246,0.55)" },
    "bg-red-500": { text: "text-red-600", ring: "rgba(239,68,68,0.55)" },
    "bg-green-500": { text: "text-green-600", ring: "rgba(34,197,94,0.55)" },
    "bg-purple-500": { text: "text-purple-600", ring: "rgba(168,85,247,0.55)" },
};

// Exact responsive page padding requested:
// Desktop (1024px+): 80px, Tablet (768-1024px): 48px, Mobile (<768px): 24px
const PAGE_PADDING = "px-6 md:px-12 lg:px-20";

const waNumber = "447547424623";
const waMessage = encodeURIComponent("Hi, I'd like to know more about Hijama Nation courses.");

export default function CoursesPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [sortBy, setSortBy] = useState("name-asc");

    // Filter and sort courses
    const filteredCourses = courses
        .filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  course.author.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
            const matchesType = selectedType === "All" || course.type === selectedType;
            return matchesSearch && matchesCategory && matchesType;
        })
        .sort((a, b) => {
            switch(sortBy) {
                case "name-asc":
                    return a.title.localeCompare(b.title);
                case "name-desc":
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

    return (
        <div className="min-h-screen bg-white">
            {/* ─── HERO SECTION ───────────────────────────────────────────── */}
            <section className="relative overflow-hidden pt-40 md:pt-48 lg:pt-56 pb-16 md:pb-24">
                {/* Background image - using coursehero.png */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 hero-pattern-drift"
                    style={{ backgroundImage: `url(/images/coursehero.png)` }}
                />
                {/* Dark overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-gray-900/50" />

                {/* Animated cupping-ring pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
                    <div className="ring-float ring-float-1" />
                    <div className="ring-float ring-float-2" />
                    <div className="ring-float ring-float-3" />
                </div>

                {/* Content */}
                <div className={`relative z-10 ${PAGE_PADDING}`}>
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4 hero-fade-in" style={{ animationDelay: "0.05s" }}>
                            <div className="w-12 h-px bg-white/60" />
                            <p className="text-white/70 text-sm md:text-base tracking-widest font-light">
                                Hijama Nation Academy
                            </p>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.05] mb-4 hero-fade-in" style={{ animationDelay: "0.15s" }}>
                            Browse Our{" "}
                            <em className="text-green-600 font-serif italic font-light">
                                Products
                            </em>
                        </h1>

                        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl hero-fade-in" style={{ animationDelay: "0.25s" }}>
                            Discover our collection of Hijama courses, digital books, and educational
                            resources — built to help you learn, practice safely, and grow with a trusted community.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── CARDS SECTION — light pistachio-green, professional ──────── */}
            <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #EFF7ED 0%, #E6F2E1 100%)" }}>
                {/* Fine dot texture, very low opacity for subtle depth */}
                <div
                    className="absolute inset-0 opacity-[0.35] pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(46,90,58,0.10) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                {/* Soft top hairline to separate from hero */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-900/10 to-transparent" />

                {/* Ambient blobs — muted, professional (sage + warm sand) */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="blob blob-sage" />
                    <div className="blob blob-sand" />
                </div>

                <div className={`relative z-10 ${PAGE_PADDING} py-12 md:py-16 lg:py-20`}>
                    {/* Filters Section */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-green-900/5 p-6 mb-10 border border-green-900/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search product names..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2.5 pl-10 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-700 bg-white"
                                />
                                <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            {/* Category Filter */}
                            <div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-700 bg-white"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Type Filter */}
                            <div>
                                <select
                                    value={selectedType}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-700 bg-white"
                                >
                                    {types.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort */}
                            <div>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all outline-none text-gray-700 bg-white"
                                >
                                    <option value="name-asc">Name (A-Z)</option>
                                    <option value="name-desc">Name (Z-A)</option>
                                </select>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mt-4 text-sm text-gray-500">
                            Showing {filteredCourses.length} of {courses.length} products
                        </div>
                    </div>

                    {/* Course Cards Grid */}
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course, index) => {
                                const accent = badgeAccent[course.badgeColor] || badgeAccent["bg-green-500"];
                                return (
                                    <div
                                        key={course.id}
                                        className="card-rise card-tilt group relative rounded-[26px]"
                                        style={{ animationDelay: `${index * 80}ms`, ["--ring-color"]: accent.ring }}
                                    >
                                        {/* Rotating gradient ring — appears on hover */}
                                        <div className="card-glow-ring" />

                                        {/* Card body */}
                                        <div className="relative bg-white rounded-[26px] overflow-hidden border border-green-900/10 shadow-md group-hover:shadow-2xl transition-shadow duration-500 flex flex-col h-full">
                                            {/* Image Section */}
                                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                                                {course.image ? (
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <svg className="w-16 h-16 mx-auto text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                        </svg>
                                                    </div>
                                                )}

                                                {/* Gradient scrim, deepens on hover */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                                {/* Badge */}
                                                <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md ${course.badgeColor || 'bg-green-500'}`}>
                                                    <span className="badge-dot" />
                                                    {course.badge}
                                                </div>

                                                {/* "View course" reveal, slides up from the bottom of the image on hover */}
                                                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out px-4 pb-3">
                                                    <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold tracking-wide">
                                                        View course
                                                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-5 flex-1 flex flex-col">
                                                {/* Course Type */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-xs font-medium ${accent.text} bg-green-50 px-2 py-1 rounded-full`}>
                                                        {course.category}
                                                    </span>
                                                    {course.type && (
                                                        <>
                                                            <span className="text-xs text-gray-300">•</span>
                                                            <span className="text-xs text-gray-500">{course.type}</span>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-serif font-bold text-gray-900 text-base mb-1 line-clamp-2 group-hover:text-green-700 transition-colors">
                                                    {course.title}
                                                </h3>

                                                {/* Subtitle */}
                                                {course.subtitle && (
                                                    <p className="text-sm font-medium text-gray-700 mb-2 line-clamp-2">
                                                        {course.subtitle}
                                                    </p>
                                                )}

                                                {/* Description */}
                                                <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-1">
                                                    {course.description}
                                                </p>

                                                {/* Author + CTA */}
                                                <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
                                                    <p className="text-xs text-gray-500">
                                                        By {course.author}
                                                    </p>
                                                    <div className="text-green-700 font-medium text-sm flex items-center gap-1">
                                                        Learn more
                                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
                            <p className="text-gray-500">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Floating WhatsApp Button (fixed) ─── */}
            <a
                href={`https://wa.me/${waNumber}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 group"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 animate-ping opacity-75"></span>
            </a>

            <style jsx global>{`
                /* Hero content fade/rise-in */
                @keyframes heroFadeIn {
                    from { opacity: 0; transform: translateY(14px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-fade-in {
                    opacity: 0;
                    animation: heroFadeIn 0.7s ease-out forwards;
                }

                /* Slow ambient drift on the hero background image */
                @keyframes patternDrift {
                    0% { transform: scale(1.05) translate(0, 0); }
                    50% { transform: scale(1.1) translate(-1%, -1%); }
                    100% { transform: scale(1.05) translate(0, 0); }
                }
                .hero-pattern-drift {
                    animation: patternDrift 18s ease-in-out infinite;
                }

                /* Cupping-ring motif in the hero */
                .ring-float {
                    position: absolute;
                    border: 1.5px solid rgba(74, 222, 128, 0.9);
                    border-radius: 9999px;
                }
                .ring-float::after {
                    content: "";
                    position: absolute;
                    inset: 10px;
                    border: 1px solid rgba(74, 222, 128, 0.6);
                    border-radius: 9999px;
                }
                .ring-float-1 { width: 140px; height: 140px; top: 12%; right: 12%; animation: ringDrift1 14s ease-in-out infinite; }
                .ring-float-2 { width: 90px; height: 90px; bottom: 18%; right: 28%; animation: ringDrift2 11s ease-in-out infinite; }
                .ring-float-3 { width: 60px; height: 60px; top: 45%; right: 6%; animation: ringDrift3 9s ease-in-out infinite; }
                @keyframes ringDrift1 { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-14px,16px) scale(1.06); } }
                @keyframes ringDrift2 { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(10px,-12px) scale(0.94); } }
                @keyframes ringDrift3 { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-8px,-10px) scale(1.1); } }

                /* Ambient blobs behind the cards section — muted sage + sand, professional */
                .blob {
                    position: absolute;
                    border-radius: 9999px;
                    filter: blur(80px);
                    opacity: 0.4;
                    animation: blobBreathe 14s ease-in-out infinite;
                }
                .blob-sage {
                    width: 460px; height: 460px;
                    top: -12%; left: -10%;
                    background: radial-gradient(circle, rgba(94,140,96,0.28), transparent 70%);
                }
                .blob-sand {
                    width: 400px; height: 400px;
                    bottom: -8%; right: -8%;
                    background: radial-gradient(circle, rgba(196,180,120,0.20), transparent 70%);
                    animation-delay: 4s;
                }
                @keyframes blobBreathe {
                    0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.32; }
                    50% { transform: scale(1.12) translate(2%, 2%); opacity: 0.45; }
                }

                /* Card entrance: fade + rise + slight scale, staggered per card */
                @keyframes cardRise {
                    from { opacity: 0; transform: translateY(28px) scale(0.96); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .card-rise {
                    opacity: 0;
                    animation: cardRise 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }

                /* Gentle 3D tilt + lift on hover (perspective card) */
                .card-tilt {
                    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
                    transform-style: preserve-3d;
                }
                .card-tilt:hover {
                    transform: translateY(-10px) rotateX(3deg) rotateY(-3deg) scale(1.015);
                }

                /* Rotating gradient ring revealed on hover — sits just behind the card */
                .card-glow-ring {
                    position: absolute;
                    inset: -2px;
                    border-radius: 28px;
                    padding: 2px;
                    background: conic-gradient(from 0deg, var(--ring-color), transparent 35%, transparent 65%, var(--ring-color));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    animation: spinRing 5s linear infinite;
                    pointer-events: none;
                }
                .group:hover .card-glow-ring {
                    opacity: 1;
                }
                @keyframes spinRing {
                    to { transform: rotate(360deg); }
                }

                /* Small pulsing dot inside the badge */
                .badge-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 9999px;
                    background: rgba(255,255,255,0.95);
                    animation: badgePulse 1.8s ease-in-out infinite;
                }
                @keyframes badgePulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.7); }
                }

                @media (prefers-reduced-motion: reduce) {
                    .hero-fade-in, .hero-pattern-drift, .ring-float, .blob,
                    .card-rise, .card-tilt, .card-glow-ring, .badge-dot {
                        animation: none !important;
                        opacity: 1 !important;
                        transform: none !important;
                    }
                }
            `}</style>
        </div>
    );
}