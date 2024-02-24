import {
  PROJECTS_CARDS_FIRST,
  PROJECTS_CARDS_SECOND,
} from "@/constants/projectsCards";
import { SectionTitle } from "../SectionTitle";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col bg-slate-600/30 py-10 dark:bg-slate-800/50"
    >
      <SectionTitle title="Projects" />
      <div className="flex flex-1 flex-col justify-center">
        <InfiniteMovingCards
          items={PROJECTS_CARDS_FIRST}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards
          items={PROJECTS_CARDS_SECOND}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
}
