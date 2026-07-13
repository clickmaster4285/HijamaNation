import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hijama Course and Cupping Therapy in the UK | Hijama Nation",
    template: "%s | Hijama Nation",
  },
  description: "Hijama Nation is a platform for those who want to join a Hijama course, book cupping therapy, or connect with certified practitioners for clear guidance, safe practice, and trusted support.",
  icons: {
    icon: "/images/Hijamalogo.png",
  },
};

// Schema data for the homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hijamanation.com/#organization",
  "name": "Hijama Nation",
  "url": "https://hijamanation.com/",
  "logo": "https://hijamanation.com/wp-content/uploads/logo.png",
  "description": "Hijama Nation is a platform for people who want to join a Hijama course, book cupping therapy, or connect with certified practitioners for clear guidance, safe practice, and trusted support.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+447838614062",
    "contactType": "customer support",
    "areaServed": "GB",
    "availableLanguage": "English"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://hijamanation.com/#localbusiness",
  "name": "Hijama Nation",
  "url": "https://hijamanation.com/",
  "image": "https://hijamanation.com/wp-content/uploads/logo.png",
  "telephone": "+447838614062",
  "priceRange": "Contact for pricing",
  "description": "Hijama Nation provides Hijama course guidance, Hijama cupping therapy, treatment support, practitioner guidance, and helpful resources.",
  "category": "Alternative medicine practitioner",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "254 Hobs Moat Rd",
    "addressLocality": "Birmingham",
    "addressRegion": "England",
    "postalCode": "B92 8JY",
    "addressCountry": "GB"
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
  "parentOrganization": {
    "@id": "https://hijamanation.com/#organization"
  }
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://hijamanation.com/#services",
  "name": "Hijama Nation Services",
  "description": "Hijama Nation provides Hijama course guidance and Hijama cupping therapy support.",
  "itemListElement": [
    {
      "@type": "Service",
      "@id": "https://hijamanation.com/hijama-course/#service",
      "position": 1,
      "name": "Hijama Course",
      "serviceType": "Hijama training course",
      "url": "https://hijamanation.com/hijama-course/",
      "description": "Hijama Nation provides a structured Hijama course for students who want to learn Hijama with guidance on theory, safety, hygiene, screening, aftercare, Sunnah awareness, and practitioner-focused learning.",
      "provider": {
        "@id": "https://hijamanation.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    },
    {
      "@type": "Service",
      "@id": "https://hijamanation.com/hijama-cupping-therapy/#service",
      "position": 2,
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
      ]
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://hijamanation.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Hijama Nation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hijama Nation is a platform for people who want to join a Hijama course, book Hijama cupping therapy, or connect with certified practitioners for clear guidance, safe practice, and trusted support."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hijama Nation provide a Hijama course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Hijama Nation provides a structured Hijama course for students who want to learn Hijama with guidance on theory, safety, hygiene, screening, aftercare, Sunnah awareness, and practitioner-focused learning."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hijama Nation provide Hijama cupping therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Hijama Nation provides Hijama cupping therapy with clear treatment guidance, safety screening, hygiene care, trained practitioner support, and aftercare advice."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Hijama Nation located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hijama Nation is located at 254 Hobs Moat Rd, Birmingham B92 8JY, United Kingdom."
      }
    },
    {
      "@type": "Question",
      "name": "Can beginners join the Hijama course?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beginners may apply for the Hijama course if they want to learn Hijama responsibly and follow guidance on safety, hygiene, client screening, contraindications, aftercare, and practitioner-focused learning."
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta 
          name="google-site-verification" 
          content="tAfr1R4fQaOPtumLvDZmg5iXrh3MsL1EsESXiSCQDF8" 
        />
        
        {/* Schema Scripts - Homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}