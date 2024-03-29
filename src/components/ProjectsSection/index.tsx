"use client";

import { useFirstProjects, useSecondProjects } from "@/constants/projects";
import { SectionTitle } from "../SectionTitle";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useTranslations } from "next-intl";
import { ProjectsGallery } from "../ui/projects-gallery";

export function ProjectsSection() {
  const t = useTranslations("projects_section");
  const firstProjects = useFirstProjects();
  const secondProjects = useSecondProjects();

  const allProjects = firstProjects.concat(secondProjects);

  return (
    <section
      id={t("id")}
      className="flex min-h-screen flex-col bg-slate-600/30 py-10 dark:bg-slate-800/50"
    >
      <SectionTitle title={t("title")} />

      <div className="md:hidden">
        <ProjectsGallery allProjects={allProjects} />
      </div>

      <div className="hidden flex-1 flex-col justify-center md:flex">
        <InfiniteMovingCards
          items={firstProjects}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards
          items={secondProjects}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
}
