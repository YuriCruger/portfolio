import Image from "next/image";
import { SectionTitle } from "../SectionTitle";
import me from "@public/me.png";
import { TextRevealCard } from "../ui/text-reveal-card";
import { TECHS } from "@/constants/techs";
import { CardSkill } from "./components/CardSkill";
import { ImageContain } from "../ui/image-contain";
import { useTranslations } from "next-intl";
import { ProfileInfo } from "./components/ProfileInfo";

export function AboutSection() {
  const t = useTranslations("about_section");

  return (
    <section
      id={t("id")}
      className="flex min-h-screen bg-slate-300 py-10 dark:bg-slate-900"
    >
      <div className="flex flex-col px-5 md:container">
        <SectionTitle title={t("title.about")} />

        <TextRevealCard
          text="Yuri Cruger"
          revealText={t("revealText")}
          className="max-lg:hidden"
        />

        <div className="flex flex-col-reverse items-center gap-10 pb-5 md:flex-row">
          <div className="md:w-1/2">
            <p className="text-wrap text-zinc-700 dark:text-zinc-300 md:tracking-widest">
              {t("description")}
            </p>
            <ProfileInfo />
          </div>

          <div className="flex justify-center md:w-1/2">
            <ImageContain
              borderRadius="0.375rem"
              className="cursor-auto border-none bg-gray-400/90 shadow shadow-zinc-800 dark:border-slate-800 dark:bg-slate-800/90 dark:shadow-zinc-300"
            >
              <Image
                src={me}
                height={0}
                width={0}
                sizes="100vw"
                alt="Yuri Cruger"
                className="h-[380px] w-full object-contain"
              />
            </ImageContain>
          </div>
        </div>

        <div className="mt-auto">
          <SectionTitle title={t("title.skills")} />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
            {TECHS.map((tech) => (
              <CardSkill
                key={tech.title}
                title={tech.title}
                icon={tech.icon}
                startDate={tech.startDate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
