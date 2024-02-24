"use client";

import { SOCIAL_ICONS } from "@/constants/icons";
import { Button } from "../ui/button";
import { FileTextIcon, GithubIcon } from "lucide-react";
import { SectionTitle } from "../SectionTitle";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundTextureOverlay } from "../BackgroundTextureOverlay";

export function HeroSection() {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "yuri-cruger-web-developer.pdf";
    downloadLink.download = "yuri-cruger-web-developer.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section className="flex h-screen-80 flex-col items-center justify-center">
      <BackgroundTextureOverlay />

      <div className="container flex flex-1 flex-col items-center justify-center gap-5">
        <SectionTitle title="portfolio" className="pb-0" />

        <TextGenerateEffect
          words="Yuri Cruger"
          className="text-center text-6xl font-bold text-zinc-800 dark:text-zinc-300 sm:text-6xl lg:text-8xl"
        />

        <p className="font-mono uppercase text-zinc-800 dark:text-zinc-300 lg:text-lg">
          | web developer |
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_ICONS.map((social) => (
            <a
              key={social.url}
              href={social.url}
              className="scale-125 text-zinc-800 transition-all hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-400"
              target="_blank"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="container mt-auto flex flex-col justify-center gap-5 pb-2 pt-5 sm:flex-row">
        <Button className="gap-2">
          <GithubIcon size={16} />
          Portfolio repository
        </Button>
        <Button onClick={handleDownload} className="gap-2">
          <FileTextIcon size={16} />
          Download resume
        </Button>
      </div>
    </section>
  );
}
