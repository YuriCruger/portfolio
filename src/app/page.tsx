import { AboutSection } from "@/components/AboutSection";
import { Projects } from "@/components/Achievements";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Projects />
    </>
  );
}
