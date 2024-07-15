"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { SOCIAL_ICONS } from "@/constants/icons";

import { Button } from "../ui/button";
import { TextGenerateEffect } from "../ui/text-generate-effect";

import { Loading } from "../Loading";

import { SectionTitle } from "../SectionTitle";

import { FileTextIcon, GithubIcon } from "lucide-react";

export function HeroSection() {
  const [loadingImage, setLoadingImage] = useState(false);
  const t = useTranslations("hero_section");

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "Yuri-Cruger-Frontend-developer.pdf";
    downloadLink.download = "Yuri-Cruger-Frontend-developer.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  function handleLoadImage() {
    setLoadingImage(true);
  }

  return (
    <section className="flex h-screen-80 flex-col items-center justify-center">
      {!loadingImage && <Loading />}

      <Image
        alt="Background"
        width={0}
        height={0}
        sizes="100vw"
        src={
          "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className={`absolute top-0 z-0 h-full w-full  transition-opacity duration-200 dark:opacity-10 ${
          loadingImage ? "opacity-50" : "opacity-0"
        }`}
        onLoad={handleLoadImage}
      />
      {loadingImage && (
        <div className="container z-10 flex flex-1 flex-col items-center justify-center gap-5">
          <SectionTitle title={t("title")} className="pb-0" />

          <h1 className="text-center text-6xl font-bold text-zinc-900 dark:text-zinc-300 sm:text-6xl lg:text-8xl">
            Yuri Cruger
          </h1>

          <TextGenerateEffect
            words={`| ${t("position")} |`}
            className="font-mono text-base uppercase text-zinc-800 dark:text-zinc-300 sm:text-lg"
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
      )}
      {loadingImage && (
        <div className="container z-10 mt-auto flex flex-col justify-center gap-5 pb-2 pt-5 sm:flex-row">
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
      )}
    </section>
  );
}
