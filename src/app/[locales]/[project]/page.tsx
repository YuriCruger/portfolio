"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { useProjects } from "@/data/projects";
import { GithubIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { project: slug } = useParams();

  const projects = useProjects();

  const selectedProject = projects.find((project) => project.slug === slug);

  return (
    <div className="min-h-screen-80">
      <h1 className="mb-5 px-10 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-300 md:text-5xl">
        {selectedProject?.title}
      </h1>

      <div className="flex flex-col items-center justify-center gap-5 px-10 sm:flex-row">
        {selectedProject?.repository && (
          <Link
            href={selectedProject?.repository}
            target="_blank"
            className="max-sm:w-full"
          >
            <Button className="gap-1 max-sm:w-full">
              <GithubIcon size={20} />
              GitHub Repository
            </Button>
          </Link>
        )}
        {selectedProject?.web && (
          <Link
            href={selectedProject?.web}
            target="_blank"
            className="max-sm:w-full"
          >
            <Button className="gap-1 max-sm:w-full">
              <GlobeIcon size={20} />
              Web Page
            </Button>
          </Link>
        )}
      </div>

      <LayoutGrid cards={selectedProject?.cards} />
    </div>
  );
}
