import Image from "next/image";
import { SectionTitle } from "../SectionTitle";
import me from "@public/me.png";
import { ProfileInfo } from "../ProfileInfo";
import { TextRevealCard } from "../ui/text-reveal-card";
import { TECHS } from "@/constants/techs";
import { CardSkill } from "../Achievements/components/cardSkill";

export function AboutMe() {
  return (
    <section className="flex h-screen bg-slate-300 py-10">
      <div className="container flex flex-col">
        <SectionTitle title="About" />

        <TextRevealCard
          text="Yuri Cruger"
          revealText="For me, it was just 'I love what I do, so I want to do as much of it as possible.' - Kobe Bryant"
        ></TextRevealCard>

        <div className="mt-5 flex items-center gap-10">
          <div className=" w-1/2 ">
            <p className="tracking-widest text-zinc-700">
              I embarked on my journey into the programming world a year ago as
              a self-taught enthusiast. Throughout this period, I committed
              myself to various study projects that enabled me to enhance my
              skills and understanding of fundamental concepts. Now, I feel
              ready to embrace professional opportunities that allow me to apply
              and expand my knowledge. My primary area of focus is web and
              mobile development, with a specialization in React and React
              Native. I am eager to contribute my passion for programming and my
              ability to learn quickly to the success of future projects.
            </p>
            <div className="mt-5">
              <ProfileInfo title="Name" description="Yuri Cruger" />
              <ProfileInfo title="Birth" description="November 3, 2000" />

              <ProfileInfo
                title="Position"
                description="Freelancer, Web Developer"
              />
              <ProfileInfo title="email" description="aoddrewiid@gmail.com" />
            </div>
          </div>

          <div className="w-1/2">
            <Image
              src={me}
              height={0}
              width={0}
              sizes="100vw"
              alt="Yuri Cruger"
              className="h-[400px] w-full object-contain"
            />
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
