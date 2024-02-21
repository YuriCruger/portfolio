import { NAV_ICONS } from "@/constants/icons";

interface NavItemProps {
  title: string;
  scrollToSection: (section: string) => void;
}

export function NavItem({ title, scrollToSection }: NavItemProps) {
  const lowercaseTitle = title.toLocaleLowerCase();

  return (
    <a
      onClick={() => scrollToSection(lowercaseTitle)}
      className="flex cursor-pointer items-center gap-2 text-zinc-300 transition-all hover:text-zinc-400"
    >
      {NAV_ICONS[lowercaseTitle as keyof typeof NAV_ICONS]}
      {title}
    </a>
  );
}
