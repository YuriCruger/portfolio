import Image from "next/image";
import { SectionTitle } from "../SectionTitle";
import me from "@public/me.png";
import { ProfileInfo } from "../ProfileInfo";
import { TextRevealCard } from "../ui/text-reveal-card";
import { TECHS } from "@/constants/techs";
import { CardSkill } from "./components/cardSkill";
import { ImageContain } from "../ui/moving-border";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about_section");

  return (
    <section
      id={t("id")}
      className="flex min-h-screen bg-slate-300 py-10 dark:bg-slate-900"
    >
      <div className="container flex flex-col">
        <SectionTitle title={t("title.about")} />

        <TextRevealCard text="Yuri Cruger" revealText={t("revealText")} />

        <div className="flex flex-col-reverse items-center gap-10 pb-5 md:flex-row">
          <div className="md:w-1/2">
            <p className="tracking-widest text-zinc-700 dark:text-zinc-300">
              {t("description")}
            </p>
            <div className="mt-5">
              <ProfileInfo
                title={t("infoTitle.name")}
                description="Yuri Cruger"
              />
              <ProfileInfo
                title={t("infoTitle.birth")}
                description={t("infoDescription.birth")}
              />

              <ProfileInfo
                title={t("infoTitle.position")}
                description={t("infoDescription.position")}
              />
              <ProfileInfo title="email" description="aoddrewiid@gmail.com" />
            </div>
          </div>

          <div className="flex justify-center md:w-1/2">
            <ImageContain
              borderRadius="0.375rem"
              className="cursor-auto border-none bg-gray-400/90 shadow-md shadow-zinc-300 dark:border-slate-800 dark:bg-slate-800/90"
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

        <div className="container mt-auto ">
          <SectionTitle title={t("title.skills")} />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 xl:grid-cols-5">
            {TECHS.map((tech) => (
              <CardSkill
                key={tech.title}
                title={tech.title}
                icon={tech.icon}
                time={tech.time}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
