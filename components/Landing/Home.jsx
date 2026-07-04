import Hero from "./Hero";
import Ticker from "./Ticker";
import WhyChooseUs from "./WhyChooseUs";
import Programmes from "./Programmes";
import VdoSection from "./vdoSection";
import Journey from "./Journey";
import Instructor from "./Instructor";
import StudentStories from "./StudentStories";
import Education from "./Education";
import Stats from "./Stats";
import FAQ from "./FAQ";
import CTASection from "../components/CTASection"; 
export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <WhyChooseUs />

      {/* CTA after 3rd section */}
      <CTASection
        title="Start Your Hijama Journey Today"
        subtitle="Get certified with the UK's leading Hijama training provider."
        btnText="Explore Courses"
        btnLink="/course"
      />

      <Programmes />
      <VdoSection />
      <Journey />

      {/* CTA after 6th section */}
      <CTASection
        title="Become a Certified Practitioner"
        subtitle="Gain the skills and confidence to serve your community."
        btnText="View Programmes"
        btnLink="/programmes"
      />

      <Instructor />
      <StudentStories />
      <Education />

      {/* CTA after 9th section */}
      <CTASection
        title="Join Our Global Community"
        subtitle="Connect with thousands of practitioners worldwide."
        btnText="Get Started"
        btnLink="/apply"
      />

      <Stats />
      <FAQ />

      {/* Optional: add a final CTA before footer if you like */}
      {/* <CTASection
        title="Ready to Make a Difference?"
        subtitle="Enrol now and start your journey with Hijama Nation."
        btnText="Apply Now"
        btnLink="/apply"
        bgColor="bg-green-800"
      /> */}
    </>
  );
}