"use client";

import { SOCIAL_ICONS } from "@/constants/icons";
import { Button } from "../ui/button";
import { FileTextIcon, GithubIcon } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundTextureOverlay } from "../BackgroundTextureOverlay";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function HeroSection() {
  const t = useTranslations("hero_section");

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "Yuri-Cruger-Frontend-developer.pdf";
    downloadLink.download = "Yuri-Cruger-Frontend-developer.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section className="flex h-screen-80 flex-col items-center justify-center ">
      <div className="container flex flex-1 flex-col items-center justify-center gap-5">
        <SectionTitle title={t("title")} className="pb-0" />

        <h1 className="text-center text-6xl font-bold text-zinc-900 dark:text-zinc-300 sm:text-6xl lg:text-8xl">
          Yuri Cruger
        </h1>

        <TextGenerateEffect
          words={`| ${t("position")} |`}
          className="font-mono uppercase text-zinc-800 dark:text-zinc-300 lg:text-lg"
        />

        <div className="flex items-center gap-5">
          {SOCIAL_ICONS.map((social) => (
            <a
              key={social.url}
              href={social.url}
              aria-label={`Link to ${social.name}`}
              className="scale-125 text-zinc-800 transition-all hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-400"
              target="_blank"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="container mt-auto flex flex-col justify-center gap-5 pb-2 pt-5 sm:flex-row">
        <Link href="https://github.com/YuriCruger/portfolio" target="_blank">
          <Button className="w-full gap-1">
            <GithubIcon size={20} />
            {t("repository")}
          </Button>
        </Link>
        <Button onClick={handleDownload} className="gap-1">
          <FileTextIcon size={20} />
          {t("resume")}
        </Button>
      </div>
    </section>
  );
}
