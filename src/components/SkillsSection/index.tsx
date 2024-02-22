import { TECHS } from "@/constants/techs";
import { SectionTitle } from "../SectionTitle";
import { CardSkill } from "./components/cardSkill";

export function SkillsSection() {
  return (
    <section id="skills" className="container">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
        {TECHS.map((tech) => (
          <CardSkill title={tech.title} icon={tech.icon} time={tech.time} />
        ))}
      </div>
    </section>
  );
}
