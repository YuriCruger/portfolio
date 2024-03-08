"use client";

import { useFirstProjects, useSecondProjects } from "@/constants/projects";
import { SectionTitle } from "../SectionTitle";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ProjectCard } from "../ProjectCard";
import { useEffect, useState } from "react";

export function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const t = useTranslations("projects_section");
  const firstProjects = useFirstProjects();
  const secondProjects = useSecondProjects();

  const allProjects = firstProjects.concat(secondProjects);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id={t("id")}
      className="flex min-h-screen flex-col bg-slate-600/30 py-10 dark:bg-slate-800/50"
    >
      <SectionTitle title={t("title")} />

      <div className="lg:hidden">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {allProjects.map((project) => (
              <CarouselItem key={project.id}>
                <div className="aspect-h-3 aspect-w-5 relative sm:aspect-h-8 sm:aspect-w-16">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-md object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="container mt-5">
          <ProjectCard
            project={allProjects[current]}
            cardClassName="hover:scale-100 h-full"
            imageClassName="hidden"
            textClassName="flex"
          />
        </div>
      </div>

      <div className="hidden flex-1 flex-col justify-center lg:flex">
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
