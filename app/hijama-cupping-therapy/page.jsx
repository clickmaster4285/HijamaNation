"use client";

import { useEffect } from "react";
import Hero from "../../components/HijamaCuppingTherapy/Hero";
import WhatIsHijama from "../../components/HijamaCuppingTherapy/WhatIsHijama";
import WhoMayConsider from "../../components/HijamaCuppingTherapy/WhoMayConsider";
import TreatmentProcess from "../../components/HijamaCuppingTherapy/TreatmentProcess";
import Safety from "../../components/HijamaCuppingTherapy/Safety";
import SideEffects from "../../components/HijamaCuppingTherapy/SideEffects";
import WhoShouldAvoid from "../../components/HijamaCuppingTherapy/WhoShouldAvoid";
import WhyChoose from "../../components/HijamaCuppingTherapy/WhyChoose";
import HowToChoose from "../../components/HijamaCuppingTherapy/HowToChoose";
import Cost from "../../components/HijamaCuppingTherapy/Cost";
import StartJourney from "../../components/HijamaCuppingTherapy/StartJourney";
import FAQ from "../../components/HijamaCuppingTherapy/FAQ";

export default function HijamaTherapy() {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Hero />
            <WhatIsHijama />
            <WhoMayConsider />
            <TreatmentProcess />
            <Safety />
            <SideEffects />
            <WhoShouldAvoid />
            <WhyChoose />
            <HowToChoose />
            <Cost />
            <FAQ />
            <StartJourney />
        </div>
    );
}
