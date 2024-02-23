import { PROJECTS_CARDS } from "@/constants/projectsCards";
import { SectionTitle } from "../SectionTitle";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col bg-slate-600/30 py-10"
    >
      <div>
        <SectionTitle title="Projects" />
        <InfiniteMovingCards
          items={PROJECTS_CARDS}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
}

// import { CARDS } from "@/constants/cards";
// import { SectionTitle } from "../SectionTitle";
// import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

// export function ProjectsSection() {
//   return (
//     <section id="projects" className="container py-5">
//       <SectionTitle title="Projects" />

//       <InfiniteMovingCards items={CARDS} direction="right" speed="normal" />
//       <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"></div>
//     </section>
//   );
// }
