import { HomeIcon, UserRoundCogIcon } from "lucide-react";

interface NavItemProps {
  title: string;
}

export function NavItem({ title }: NavItemProps) {
  const NAV_ICONS = {
    home: <HomeIcon />,
    projects: <UserRoundCogIcon />,
  };

  return (
    <a className="flex cursor-pointer items-center gap-2 text-zinc-300 transition-all hover:text-zinc-400">
      {NAV_ICONS[title.toLocaleLowerCase() as keyof typeof NAV_ICONS]}
      {title}
    </a>
  );
}
