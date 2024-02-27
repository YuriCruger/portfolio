"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import {
  PROJECTS_CARDS_FIRST,
  PROJECTS_CARDS_SECOND,
} from "@/constants/projects";
import { useParams } from "next/navigation";

export default function page() {
  const { project } = useParams();

  const selectedProject =
    PROJECTS_CARDS_FIRST.find((p) => p.slug === project) ||
    PROJECTS_CARDS_SECOND.find((p) => p.slug === project);

  const cards = selectedProject?.cards;

  return (
    <div className="h-screen-80 w-full py-20 ">
      <LayoutGrid cards={cards} />
    </div>
  );
}
