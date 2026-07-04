"use client";

import { useState, useEffect, useRef } from "react";

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

    return (
        <>
            <div ref={heroRef}>
                <Hero stats={stats} inView={heroInView} />
            </div>

            <div ref={whatRef}>
                <WhatIsCourse inView={whatInView} />
            </div>

            <div ref={glanceRef}>
                <CourseAtGlance features={features} inView={glanceInView} />
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
