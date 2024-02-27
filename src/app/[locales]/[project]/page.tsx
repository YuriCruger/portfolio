"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { PROJECTS_CARDS_FIRST } from "@/constants/projects";
import { useParams } from "next/navigation";

export default function page() {
  const { project } = useParams();

  const selectedProject = PROJECTS_CARDS_FIRST.find((p) => p.slug === project);
  const cards = selectedProject?.cards;

  return (
    <div className="h-screen-80 w-full py-20 ">
      Olá mundo
      <LayoutGrid cards={cards} />
    </div>
  );
}
