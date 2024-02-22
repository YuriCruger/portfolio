import { TechProps } from "@/constants/techs";

export function CardSkill({ title, icon, time }: TechProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-zinc-600/20 p-6 text-zinc-500 shadow shadow-zinc-700 transition-all hover:bg-zinc-600/30 hover:text-zinc-400">
      <div className="flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <div>{icon}</div>
      </div>

      <span>{time}</span>
    </div>
  );
}
