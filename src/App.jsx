import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import WhyChooseUs from "./components/WhyChooseUs";
import Programmes from "./components/Programmes";
import VdoSection from "./components/vdoSection";
import Journey from "./components/Journey";
import Instructor from "./components/Instructor";
import StudentStories from "./components/StudentStories";
import Education from "./components/Education";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Divider from "./components/Divider";


export default function App() {
  return (
    <main className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Ticker />
      <WhyChooseUs />
      <Programmes/>
      <VdoSection/>
      <Journey />
      <Instructor />
      <StudentStories/>
      <Education />
      <Stats />
      <FAQ/>
      <Divider/>
      <Footer />

    </main>
  );
}