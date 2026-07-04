// import Navbar from "../components/Landing/Navbar";
// import Footer from "../components/Landing/Footer";
import Hero from "../components/Landing/Hero";
import AboutUs from "../components/Landing/AboutUs";
import Ticker from "../components/Landing/Ticker";
import WhyChooseUs from "../components/Landing/WhyChooseUs";
import Programmes from "../components/Landing/Programmes";
import VdoSection from "../components/Landing/vdoSection";
import Journey from "../components/Landing/Journey";
import Process from "../components/Landing/Process";
import Instructor from "../components/Landing/Instructor";
import Testimonials from "../components/Landing/Testimonials";
import Education from "../components/Landing/Education";
import Stats from "../components/Landing/Stats";
import Divider from "../components/Landing/Divider";
import CTA from "../components/Landing/CTA";

// ─── Import the Trust component and its required data ─────────────
import Trust from "../components/Landing/Trust";
import { badges } from "../data/data";   
import Book from "../components/Landing/Book";
import { bookDotList } from "../data/data";
import Practitioners from "../components/Landing/Practitioners";
import { practitionerAvatars } from "../data/data";
import Path from "../components/Landing/Path";
import { pathCards } from "../data/data";
import FAQ from "../components/Landing/FAQ";
import { faqs } from "../data/data";
import Learn from "../components/Landing/Learn";
import { learnChecklist, whoList } from "../data/data";
import Why from "../components/Landing/Why";   
import {whyItems } from "../data/data";
import Resources from "../components/Landing/Resources";
import {resources } from "../data/data";
export default function HomePage() {
  return (
    <main className="font-sans antialiased">
      {/* <Navbar /> */}
      <Hero />
      <Ticker />
      <AboutUs />
      <Resources resources={resources} inView={true} />
      <WhyChooseUs />
      <Book dotList={bookDotList} inView={true} />
      <Trust badges={badges} />
      <CTA
        variant="booking"
        headline="Ready to Experience Hijama?"
        subtext="Book a session with a certified Hijama Nation practitioner today."
        buttonText="Book a Session"
        buttonLink="/book"
      />
      <Programmes />
      <VdoSection />
      <Journey />
      <Why whyItems={whyItems} inView={true} />
      <Learn checklist={learnChecklist} whoList={whoList} inView={true} />
      <Process />
      <Practitioners avatars={practitionerAvatars} inView={true} />
       <CTA
        variant="community"
        headline="Join the Hijama Nation Community"
        subtext="Connect with thousands of practitioners and students worldwide."
        buttonText="Join Us"
        buttonLink="/community"
      />
      <Instructor />
      <Path pathCards={pathCards} inView={true} />
      <Testimonials />
      <Education />
      <Stats />
      <FAQ faqs={faqs} inView={true} />
      <CTA
        variant="enroll"
        headline="Start Your Hijama Journey"
        subtext="Join our professional training programmes and get certified."
        buttonText="Enroll Now"
        buttonLink="/programmes"
      />
      <Divider />
      {/* <Footer /> */}
    </main>
  );
}