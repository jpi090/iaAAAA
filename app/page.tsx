import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import ImpactCounter from "@/components/ImpactCounter";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <Profile />
      <Projects />
      <ImpactCounter />
      <Testimonials />
      <CallToAction />
      <Newsletter />
      <ScrollToTop />
    </>
  );
}
