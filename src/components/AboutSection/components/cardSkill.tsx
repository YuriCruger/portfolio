import { TechProps } from "@/constants/techs";

export function CardSkill({ title, icon, time }: TechProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-zinc-500/90 p-3 text-zinc-300 shadow shadow-zinc-700 transition-all hover:text-zinc-700 dark:bg-zinc-950/20 dark:text-zinc-500 dark:hover:text-zinc-400 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <div>{icon}</div>
      </div>

      <span>{time}</span>
    </div>
  );
}