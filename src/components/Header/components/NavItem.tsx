import { NAV_ICONS } from "@/constants/icons";

interface NavItemProps {
  title: string;
  scrollToSection: (section: string) => void;
}

export function NavItem({ title, scrollToSection }: NavItemProps) {
  const lowercaseTitle = title.toLocaleLowerCase();

  const upperCaseTitle = title.toLocaleUpperCase();

  return (
    <a
      onClick={() => scrollToSection(lowercaseTitle)}
      className="flex cursor-pointer items-center gap-2 transition-all hover:text-zinc-700 dark:hover:text-zinc-400"
    >
      <div className="max-sm:hidden">
        {NAV_ICONS[lowercaseTitle as keyof typeof NAV_ICONS]}
      </div>
      {upperCaseTitle}
    </a>
  );
}
