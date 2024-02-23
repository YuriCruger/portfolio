import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Achievements";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
    </>
  );
}
