"use client";
import { BackgroundTextureOverlay } from "@/components/BackgroundTextureOverlay";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";
import {
  PROJECTS_CARDS_FIRST,
  PROJECTS_CARDS_SECOND,
} from "@/constants/projects";
import { GithubIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function page() {
  const { project } = useParams();

  const selectedProject =
    PROJECTS_CARDS_FIRST.find((p) => p.slug === project) ||
    PROJECTS_CARDS_SECOND.find((p) => p.slug === project);

  const cards = selectedProject?.cards;
  const repository = selectedProject?.repository!;
  const webPage = selectedProject?.web;

  return (
    <div className="h-screen-80 w-full py-20">
      <BackgroundTextureOverlay />
      <div className="container flex items-center justify-center gap-5">
        <Link href={repository} target="_blank">
          <Button className="gap-1">
            <GithubIcon size={20} />
            GitHub Repository
          </Button>
        </Link>
        {webPage && (
          <Link href={webPage} target="_blank">
            <Button className="gap-1">
              <GlobeIcon size={20} />
              Web Page
            </Button>
          </Link>
        )}
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}
