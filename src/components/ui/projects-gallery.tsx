import Image from "next/image";
import { useState } from "react";
import { AnimatedHamburgerButton } from "./hamburguer-button";
import { CardTechnologies } from "./card-technologies";
import { Link } from "@/navigation";
import { Project } from "@/types/product";

interface ProjectsGalleryProps {
  projects: Project[];
}

export function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [openTechMenuId, setOpenTechMenuId] = useState<string | null>(null);

  function toggleTechnologiesMenu(id: string) {
    setOpenTechMenuId((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="container flex flex-col gap-20">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex w-full flex-col rounded-md p-3  ${index % 2 === 0 ? "items-start bg-zinc-800/80" : "items-end bg-zinc-300"}`}
        >
          <Image
            src={project.image}
            alt={`Imagem ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-[90%] rounded-md"
          />

          <div className="relative mb-5 mt-10 flex w-full items-center justify-between">
            <h3
              className={`text-2xl font-bold ${index % 2 === 0 ? "text-zinc-300" : " text-zinc-800"}`}
            >
              {project.title}
            </h3>

            <button
              onClick={() => toggleTechnologiesMenu(project.id)}
              aria-label="open technologies menu"
            >
              <AnimatedHamburgerButton projectIndex={index} />
            </button>
            <CardTechnologies
              technologies={project.technologies}
              isTechMenuOpen={openTechMenuId === project.id}
              projectIndex={index}
            />
          </div>
          <p
            className={`tracking-widest ${index % 2 === 0 ? "text-zinc-300" : "text-zinc-700"}`}
          >
            {project.description}
          </p>
          <Link href={`/${project.slug}`} className="mt-5 w-full">
            <button
              className={`w-full rounded-md py-2 shadow-md transition-all ${index % 2 === 0 ? "bg-zinc-300 text-zinc-900 hover:bg-zinc-950 hover:text-zinc-300" : "bg-zinc-950/90 text-zinc-300 hover:bg-zinc-100 hover:text-zinc-900"}`}
            >
              View project
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
