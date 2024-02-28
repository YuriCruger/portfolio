"use client";
import { NavItem } from "./components/NavItem";
import { motion } from "framer-motion";
import { Switch } from "../ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const t = useTranslations("header");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const scrollToSection = (section: string) => {
    const sectionSelected = document.querySelector(`#${section}`);
    if (sectionSelected) {
      sectionSelected.scrollIntoView({ behavior: "smooth" });
    }
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  function onSelectChange(value: string) {
    const nextLocale = value;
    const currentPath = window.location.pathname.split("/").slice(2).join("/");
    startTransition(() => {
      router.replace(`/${nextLocale}/${currentPath}`);
    });
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible,
      }}
      className="container mx-auto flex h-[80px] items-center py-5 font-semibold text-zinc-900 dark:text-zinc-300"
    >
      <nav className="flex items-center gap-4 sm:gap-10">
        <NavItem href="/" title={t("navItems.home")} icon="home" />
        <NavItem
          title={t("navItems.about")}
          scrollToSection={scrollToSection}
          icon="about"
        />
        <NavItem
          title={t("navItems.projects")}
          scrollToSection={scrollToSection}
          icon="projects"
        />
      </nav>

      <div className="ml-auto flex items-center gap-4 sm:gap-10">
        <div className="ml-4 flex items-center gap-2">
          <SunIcon className="max-sm:hidden" />
          <Switch onCheckedChange={toggleTheme} />
          <MoonIcon className="max-sm:hidden" />
        </div>

        <Select
          defaultValue={localActive}
          onValueChange={onSelectChange}
          disabled={isPending}
        >
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="pt-BR">Português-BR</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </motion.header>
  );
}
