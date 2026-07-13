// app/hijama-course/[slug]/page.js
// NO "use client" directive - this is a Server Component

import Link from "next/link"; // ← IMPORTANT: Add this import!
import CourseCurriculum from "@/content/Hijama-course/course-curriculum";
import CertificationDetails from "@/content/Hijama-course/certification-details";
import PracticalTraining from "@/content/Hijama-course/practical-training";
import CourseFeesContent from "@/content/Hijama-course/course-fees";
import CourseDurationContent from "@/content/Hijama-course/course-duration";

const pageComponents = {
    "course-curriculum": CourseCurriculum,
    "certification-details": CertificationDetails,
    "practical-training": PracticalTraining,
    "course-fees": CourseFeesContent,
    "course-duration": CourseDurationContent,
};

export async function generateStaticParams() {
    return Object.keys(pageComponents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const metadataMap = {
        "course-curriculum": {
            title: "Hijama Course Curriculum | Hijama Nation",
            description: "Explore our comprehensive hijama course curriculum — from foundations and anatomy to hands-on training and certification.",
        },
        "certification-details": {
            title: "Certification Details & Requirements | Hijama Nation",
            description: "Learn about our Hijama certification pathway, requirements, assessment methods, renewal process, and what you'll receive upon certification.",
        },
        "practical-training": {
            title: "Practical Training & Assessment | Hijama Nation",
            description: "Discover how practical training is structured at Hijama Nation — from supervised sessions to final assessment.",
        },
        "course-fees": {
            title: "Course Fees & What's Included | Hijama Nation",
            description: "Explore our transparent course fee structure, payment options, and what's included in your Hijama certification training.",
        },
        "course-duration": {
            title: "Course Duration & Schedule | Hijama Nation",
            description: "Learn about the duration, schedule options, and time commitment required for the Hijama certification course.",
        },
    };
    return metadataMap[slug] || {
        title: "Hijama Course | Hijama Nation",
        description: "Learn about our hijama course offerings.",
    };
}

export default async function CourseSlugPage({ params }) {
    const { slug } = await params;
    const PageComponent = pageComponents[slug];

    if (!PageComponent) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-gray-600">The page you're looking for doesn't exist.</p>
                    <Link 
                        href="/hijama-course" 
                        className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Course Overview
                    </Link>
                </div>
            </div>
        );
    }

    return <PageComponent />;
}