import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HeroSection } from "@/components/HeroSection";
import { notFound } from "next/navigation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
