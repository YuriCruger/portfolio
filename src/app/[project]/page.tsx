"use client";
import { PROJECTS_CARDS_FIRST } from "@/constants/projects";
import { useParams } from "next/navigation";

export default function page() {
  const { project } = useParams();

  const selectedProject = PROJECTS_CARDS_FIRST.find((p) => p.slug === project);

  return <div></div>;
}
