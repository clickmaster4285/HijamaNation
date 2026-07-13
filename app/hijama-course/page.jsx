"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import Hero from "../../components/HijamaCourse/Hero";
import WhatIsCourse from "../../components/HijamaCourse/WhatIsCourse";
import CourseAtGlance from "../../components/HijamaCourse/CourseAtGlance";
import InterestedSection from "../../components/HijamaCourse/InterestedSection";
import StructuredCourse from "../../components/HijamaCourse/StructuredCourse";
import WhatIsHijama from "../../components/HijamaCourse/WhatIsHijama";
import WhyLearnHijama from "../../components/HijamaCourse/WhyLearnHijama";
import WhoCanJoin from "../../components/HijamaCourse/WhoCanJoin";
import WhatYouWillLearn from "../../components/HijamaCourse/WhatYouWillLearn";
import LearnOnline from "../../components/HijamaCourse/LearnOnline";
import PracticalTraining from "../../components/HijamaCourse/PracticalTraining";
import Certification from "../../components/HijamaCourse/Certification";
import LearnFromHome from "../../components/HijamaCourse/LearnFromHome";
import StudentSupport from "../../components/HijamaCourse/StudentSupport";
import MeaningfulSkill from "../../components/HijamaCourse/MeaningfulSkill";
import BecomePractitioner from "../../components/HijamaCourse/BecomePractitioner";
import CourseFees from "../../components/HijamaCourse/CourseFees";
import WhatIsIncluded from "../../components/HijamaCourse/WhatIsIncluded";
import WhyChoose from "../../components/HijamaCourse/WhyChoose";
import StudentTestimonials from "../../components/HijamaCourse/Testimonials";
import FAQ from "../../components/HijamaCourse/FAQ";
import FinalCTA from "../../components/HijamaCourse/CTA";

import {
    stats,
    features,
    questions,
    benefits,
    audiences,
    curriculum,
    inclusions,
    reasons,
    testimonials,
    faqs,
} from "../../data/HijamaData";

function useInView(threshold = 0.12) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) setInView(true);
            },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

export default function HijamaCourse() {
    const [heroRef, heroInView] = useInView(0.05);
    const [whatRef, whatInView] = useInView(0.1);
    const [glanceRef, glanceInView] = useInView(0.1);
    const [interestedRef, interestedInView] = useInView(0.1);
    const [structuredRef, structuredInView] = useInView(0.1);
    const [whatHijamaRef, whatHijamaInView] = useInView(0.1);
    const [whyLearnRef, whyLearnInView] = useInView(0.1);
    const [whoRef, whoInView] = useInView(0.1);
    const [learnRef, learnInView] = useInView(0.1);
    const [onlineRef, onlineInView] = useInView(0.1);
    const [practicalRef, practicalInView] = useInView(0.1);
    const [certRef, certInView] = useInView(0.1);
    const [homeRef, homeInView] = useInView(0.1);
    const [supportRef, supportInView] = useInView(0.1);
    const [meaningRef, meaningInView] = useInView(0.1);
    const [becomeRef, becomeInView] = useInView(0.1);
    const [feesRef, feesInView] = useInView(0.1);
    const [includedRef, includedInView] = useInView(0.1);
    const [whyChooseRef, whyChooseInView] = useInView(0.1);
    const [testRef, testInView] = useInView(0.1);
    const [faqRef, faqInView] = useInView(0.1);
    const [ctaRef, ctaInView] = useInView(0.1);

    useEffect(() => window.scrollTo(0, 0), []);

    // Schema data for Hijama Course page
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": "https://hijamanation.com/hijama-course/#course",
        "name": "Hijama Course",
        "description": "Hijama Nation provides a structured Hijama course for students who want to learn Hijama with guidance on theory, safety, hygiene, client screening, contraindications, aftercare, Sunnah awareness, and practitioner-focused learning.",
        "url": "https://hijamanation.com/hijama-course/",
        "provider": {
            "@type": "Organization",
            "@id": "https://hijamanation.com/#organization",
            "name": "Hijama Nation",
            "url": "https://hijamanation.com/"
        },
        "courseMode": "Online",
        "educationalCredentialAwarded": "Hijama course certificate",
        "teaches": [
            "Hijama theory",
            "Hijama safety",
            "Hygiene practice",
            "Client screening",
            "Contraindications",
            "Aftercare guidance",
            "Sunnah awareness",
            "Practitioner development"
        ],
        "audience": {
            "@type": "EducationalAudience",
            "audienceType": "Students interested in learning Hijama"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://hijamanation.com/hijama-course/#service",
        "name": "Hijama Course",
        "serviceType": "Hijama training course",
        "url": "https://hijamanation.com/hijama-course/",
        "description": "Hijama Nation provides a Hijama course for students who want to learn Hijama through structured course guidance, safety awareness, hygiene training, screening knowledge, aftercare understanding, and practitioner-focused learning.",
        "provider": {
            "@type": "Organization",
            "@id": "https://hijamanation.com/#organization",
            "name": "Hijama Nation",
            "url": "https://hijamanation.com/"
        },
        "areaServed": {
            "@type": "Country",
            "name": "United Kingdom"
        },
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://hijamanation.com/hijama-course/"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://hijamanation.com/hijama-course/#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hijamanation.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Hijama Course",
                "item": "https://hijamanation.com/hijama-course/"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://hijamanation.com/hijama-course/#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the Hijama course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Hijama course is designed for students who want to learn Hijama through structured guidance covering theory, safety, hygiene, client screening, contraindications, aftercare, Sunnah awareness, and practitioner-focused learning."
                }
            },
            {
                "@type": "Question",
                "name": "Can beginners join the Hijama course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, beginners may apply if they want to learn Hijama responsibly and follow guidance on safety, hygiene, client screening, contraindications, aftercare, and practitioner-focused learning."
                }
            },
            {
                "@type": "Question",
                "name": "Is the Hijama course online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hijama Nation provides online Hijama course support. Students should check the course page or contact the team for the latest course format, access, and support details."
                }
            },
            {
                "@type": "Question",
                "name": "Does the Hijama course include certification?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Hijama course includes certification support after students complete the required learning and assessment pathway. Exact certification details should be confirmed with Hijama Nation before enrolment."
                }
            },
            {
                "@type": "Question",
                "name": "What will I learn in the Hijama course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Students can learn Hijama theory, safety, hygiene, client screening, contraindications, aftercare guidance, Sunnah awareness, and practitioner-focused learning."
                }
            },
            {
                "@type": "Question",
                "name": "How do I apply for the Hijama course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can apply through the Hijama Course page or contact Hijama Nation for course guidance, enrolment information, fees, and access details."
                }
            }
        ]
    };

    return (
        <>
            {/* Schema Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Page Content */}
            <div ref={heroRef}>
                <Hero stats={stats} inView={heroInView} />
            </div>

            <div ref={whatRef}>
                <WhatIsCourse inView={whatInView} />
            </div>

            <div ref={glanceRef}>
                <CourseAtGlance features={features} inView={glanceInView} />
            </div>

            {/* ─── Link to the full curriculum page ─── */}
            <div className="py-8 px-6 md:px-12 lg:px-20 bg-white text-center border-b border-gray-100">
                <Link
                    href="/hijama-course/course-curriculum"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-green-600/50"
                >
                    <span>View Full Course Curriculum</span>
                    <span className="text-xl">→</span>
                </Link>
                <p className="text-gray-500 text-sm mt-3">
                    Explore all 8 modules, topics, and what you'll learn in detail
                </p>
            </div>

            <div ref={interestedRef}>
                <InterestedSection questions={questions} inView={interestedInView} />
            </div>

            <div ref={structuredRef}>
                <StructuredCourse inView={structuredInView} />
            </div>

            <div ref={whatHijamaRef}>
                <WhatIsHijama inView={whatHijamaInView} />
            </div>

            <div ref={whyLearnRef}>
                <WhyLearnHijama benefits={benefits} inView={whyLearnInView} />
            </div>

            <div ref={whoRef}>
                <WhoCanJoin audiences={audiences} inView={whoInView} />
            </div>

            <div ref={learnRef}>
                <WhatYouWillLearn curriculum={curriculum} inView={learnInView} />
            </div>

            <div ref={onlineRef}>
                <LearnOnline inView={onlineInView} />
            </div>

            <div ref={practicalRef}>
                <PracticalTraining inView={practicalInView} />
            </div>

            <div ref={certRef}>
                <Certification inView={certInView} />
            </div>

            <div ref={homeRef}>
                <LearnFromHome inView={homeInView} />
            </div>

            <div ref={supportRef}>
                <StudentSupport inView={supportInView} />
            </div>

            <div ref={meaningRef}>
                <MeaningfulSkill inView={meaningInView} />
            </div>

            <div ref={becomeRef}>
                <BecomePractitioner inView={becomeInView} />
            </div>

            <div ref={feesRef}>
                <CourseFees inView={feesInView} />
            </div>

            <div ref={includedRef}>
                <WhatIsIncluded inclusions={inclusions} inView={includedInView} />
            </div>

            <div ref={whyChooseRef}>
                <WhyChoose reasons={reasons} inView={whyChooseInView} />
            </div>

            <div ref={testRef}>
                <StudentTestimonials testimonials={testimonials} inView={testInView} />
            </div>

            <div ref={faqRef}>
                <FAQ faqs={faqs} inView={faqInView} />
            </div>

            <div ref={ctaRef}>
                <FinalCTA inView={ctaInView} />
            </div>
        </>
    );
}