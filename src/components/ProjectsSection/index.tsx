"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { ProjectsGallery } from "../ui/projects-gallery";

import { SectionTitle } from "../SectionTitle";

import { useProjects } from "@/data/projects";

export function ProjectsSection() {
  const [arrayNormalized, setArrayNormalized] = useState([]);

  const t = useTranslations("projects_section");
  const projects = useProjects();

  const minimalForLine = 2;

  function calculateNumberOfLines(items: string[], minimalForLine: number) {
    let rowsQuantity = minimalForLine;

    for (let i = minimalForLine; i >= 3; i--) {
      if (items.length % i === 0 && items.length / i >= minimalForLine) {
        rowsQuantity = i;
        break;
      }
    }

    return rowsQuantity;
  }

  function splitArrayOfObjectsIntoFractions(
    array: string[],
    numFracoes: number,
  ) {
    const fractionSize = Math.ceil(array.length / numFracoes);
    const fractionList = [];

    for (let i = 0; i < array.length; i += fractionSize) {
      const fraction = array.slice(i, i + fractionSize);
      fractionList.push(fraction);
    }

    setArrayNormalized(fractionList as any);
  }

  useEffect(() => {
    const calculatedRows = calculateNumberOfLines(
      projects as any,
      minimalForLine,
    );
    splitArrayOfObjectsIntoFractions(projects as any, calculatedRows);
  }, []);

  return (
    <section
      id={t("id")}
      className="flex min-h-screen flex-col bg-slate-600/30 py-10 dark:bg-slate-800/50"
    >
      <SectionTitle title={t("title")} />

      <div className="md:hidden">
        <ProjectsGallery projects={projects} />
      </div>

      <div className="hidden flex-1 flex-col justify-center md:flex">
        {arrayNormalized.map((_, index) => (
          <InfiniteMovingCards
            items={arrayNormalized[index]}
            direction={index % 2 === 0 ? "right" : "left"}
            speed="normal"
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
