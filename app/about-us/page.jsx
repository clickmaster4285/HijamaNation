'use client';

import Hero from "../../components/AboutUs/Hero";
import MudassarRaja from "../../components/AboutUs/MudassarRaja";
import UmmAmaar from "../../components/AboutUs/UmmAmaar";
import Recognition from "../../components/AboutUs/Recognition";
import CTA from "../../components/AboutUs/CTA";

export default function AboutPage() {
  return (
    <>
     
      <main className="bg-[#0a0f1a] text-white min-h-screen">
        <Hero />
       
        <MudassarRaja />
        <UmmAmaar />
        <Recognition />
        <CTA />
      </main>
    
    </>
  );
}