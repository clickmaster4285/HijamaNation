// app/hijama-cupping-therapy/page.jsx
'use client';

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
    // Schema data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://hijamanation.com/hijama-cupping-therapy/#service",
        "name": "Hijama Cupping Therapy",
        "serviceType": "Hijama cupping therapy",
        "url": "https://hijamanation.com/hijama-cupping-therapy/",
        "description": "Hijama Nation provides Hijama cupping therapy with clear treatment guidance, safety screening, hygiene care, trained practitioner support, and aftercare advice.",
        "provider": {
            "@id": "https://hijamanation.com/#localbusiness"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Birmingham"
            },
            {
                "@type": "City",
                "name": "Solihull"
            },
            {
                "@type": "Country",
                "name": "United Kingdom"
            }
        ],
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://hijamanation.com/hijama-cupping-therapy/"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://hijamanation.com/hijama-cupping-therapy/#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Hijama cupping therapy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hijama cupping therapy is a traditional wet cupping practice where cups create suction on the skin. In wet cupping, small superficial scratches may be made and a controlled amount of blood may be drawn under trained practitioner care."
                }
            },
            {
                "@type": "Question",
                "name": "Is Hijama the same as wet cupping?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hijama is commonly linked with wet cupping. Dry cupping uses suction only, while wet cupping may include superficial scratches and controlled blood removal."
                }
            },
            {
                "@type": "Question",
                "name": "Is Hijama cupping therapy safe?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hijama safety depends on proper screening, hygiene, clean tools, practitioner training, and aftercare. It may not be suitable for everyone, so people with health conditions should seek professional advice before treatment."
                }
            },
            {
                "@type": "Question",
                "name": "Who should avoid Hijama?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "People who are pregnant, anaemic, taking blood thinners, have bleeding disorders, active skin infections, serious medical conditions, or open wounds should seek professional advice before considering Hijama."
                }
            },
            {
                "@type": "Question",
                "name": "Does Hijama hurt?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hijama can feel different for each person. Some people feel suction pressure, mild scratching, or temporary soreness after the session."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do before Hijama?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Before Hijama, follow the preparation guidance provided by your practitioner. You may be advised to share your health history, avoid certain activities, and prepare properly before the session."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do after Hijama?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After Hijama, keep the treated area clean, follow dressing instructions, avoid scratching the skin, rest if needed, and follow the aftercare advice given by your practitioner."
                }
            },
            {
                "@type": "Question",
                "name": "How can I book Hijama cupping therapy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can book Hijama cupping therapy through the Hijama Nation treatment page or contact the team for appointment guidance, screening information, and treatment details."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://hijamanation.com/hijama-cupping-therapy/#breadcrumb",
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
                "name": "Hijama Cupping Therapy",
                "item": "https://hijamanation.com/hijama-cupping-therapy/"
            }
        ]
    };

    return (
        <div className="bg-black text-white overflow-x-hidden">
            {/* Schema Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            
            {/* Page Content */}
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