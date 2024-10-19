import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";

export function HeaderToggleTheme() {
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className="flex items-center gap-2 md:ml-4">
      <SunIcon className="max-sm:hidden" />
      <Switch aria-label="Toggle theme" onCheckedChange={toggleTheme} />
      <MoonIcon className="max-sm:hidden" />
    </div>
  );
}
