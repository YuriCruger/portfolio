import React, { Suspense, lazy } from "react";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";

const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>
    </>
  );
}
