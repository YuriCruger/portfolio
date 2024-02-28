import {
  PROJECTS_CARDS_FIRST,
  PROJECTS_CARDS_SECOND,
} from "@/constants/projects";
import { SectionTitle } from "../SectionTitle";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations("projects_section");

  return (
    <section
      id={t("id")}
      className="flex min-h-screen flex-col bg-slate-600/30 py-10 dark:bg-slate-800/50"
    >
      <SectionTitle title={t("title")} />
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
