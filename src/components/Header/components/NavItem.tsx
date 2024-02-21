import { NAV_ICONS } from "@/constants/icons";

interface NavItemProps {
  title: string;
}

export function NavItem({ title }: NavItemProps) {
  return (
    <a className="flex cursor-pointer items-center gap-2 text-zinc-300 transition-all hover:text-zinc-400">
      {NAV_ICONS[title.toLocaleLowerCase() as keyof typeof NAV_ICONS]}
      {title}
    </a>
  );
}
