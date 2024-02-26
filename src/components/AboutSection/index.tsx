import Image from "next/image";
import { SectionTitle } from "../SectionTitle";
import me from "@public/me.png";
import { ProfileInfo } from "../ProfileInfo";
import { TextRevealCard } from "../ui/text-reveal-card";
import { TECHS } from "@/constants/techs";
import { CardSkill } from "./components/cardSkill";
import { ImageContain } from "../ui/moving-border";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen bg-slate-300 py-10 dark:bg-slate-900"
    >
      <div className="container flex flex-col">
        <SectionTitle title="About" />

        <TextRevealCard
          text="Yuri Cruger"
          revealText="For me, it was just 'I love what I do, so I want to do as much of it as possible.' - Kobe Bryant"
        />

        <div className="flex flex-col-reverse items-center gap-10 pb-5 md:flex-row">
          <div className="md:w-1/2">
            <p className="tracking-widest text-zinc-700 dark:text-zinc-300">
              I embarked on my journey into the programming world in 2023 as a
              self-taught enthusiast. Throughout this period, I dedicated myself
              to various study projects that allowed me to enhance my skills and
              understanding of fundamental concepts. Now, I feel prepared to
              embrace professional opportunities that enable me to apply and
              expand my knowledge. My primary focus is on web and mobile
              development, with a specialization in React and React Native. I am
              eager to contribute my passion for programming and my ability to
              learn quickly to the success of future projects.
            </p>
            <div className="mt-5">
              <ProfileInfo title="Name" description="Yuri Cruger" />
              <ProfileInfo title="Birth" description="November 3, 2000" />

              <ProfileInfo
                title="Position"
                description="Freelancer, Front-end Developer"
              />
              <ProfileInfo title="email" description="aoddrewiid@gmail.com" />
            </div>
          </div>

          <div className="flex justify-center md:w-1/2">
            <ImageContain
              borderRadius="0.375rem"
              className="cursor-auto border-none bg-transparent shadow-md shadow-zinc-300 dark:border-slate-800"
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
          <SectionTitle title="Skills" />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 xl:grid-cols-5">
            {TECHS.map((tech) => (
              <CardSkill title={tech.title} icon={tech.icon} time={tech.time} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
