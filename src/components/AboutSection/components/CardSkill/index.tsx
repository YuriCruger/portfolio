import { TechComponent, TechProps } from "@/constants/techs";

export function CardSkill({ title, icon, startDate }: TechProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-zinc-600/80 p-3 text-zinc-300 shadow shadow-zinc-700 transition-all hover:text-zinc-700 dark:bg-zinc-600/40 dark:text-zinc-500 dark:hover:text-zinc-400 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-medium">{title}</p>
        <div>{icon}</div>
      </div>

      <span>
        <TechComponent startDate={startDate} />
      </span>
    </div>
  );
}
