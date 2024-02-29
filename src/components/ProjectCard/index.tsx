import Image from "next/image";
import { Button } from "../ui/button";
import { Link } from "@/navigation";
import { Project } from "@/types/product";
import { cn } from "@/utils/cn";

interface ProjectProps {
  project: Project;
  cardClassName?: string;
  imageClassName?: string;
  textClassName?: string;
}

export function ProjectCard({
  project,
  cardClassName,
  imageClassName,
  textClassName,
}: ProjectProps) {
  return (
    <div
      className={cn(
        "group h-[170px] overflow-hidden rounded-md bg-gray-500/30 shadow-md shadow-zinc-900 transition-all hover:scale-95 dark:bg-zinc-800/50 dark:shadow-zinc-700 sm:h-[210px] lg:h-[320px] xl:h-[350px]",
        cardClassName,
      )}
    >
      <div className={cn("h-full w-full group-hover:hidden", imageClassName)}>
        <Image
          src={project.image}
          alt="market project"
          height={0}
          width={0}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className={cn(
          "hidden h-full flex-col gap-1 overflow-auto p-3 text-center group-hover:flex",
          textClassName,
        )}
      >
        <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-300 lg:text-2xl">
          {project.title}
        </h3>
        <p className="mb-2 text-sm text-zinc-900 dark:text-zinc-400 lg:text-base">
          {project.description}
        </p>
        <Link href={`/${project.slug}`} className="mt-auto w-full">
          <Button className="w-full">View project</Button>
        </Link>
      </div>
    </div>
  );
}
