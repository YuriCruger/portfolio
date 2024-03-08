"use client";
import { NavItem } from "./components/NavItem";
import { motion } from "framer-motion";
import { Switch } from "../ui/switch";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useTransition } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const scrollToSection = (section: string) => {
    const sectionSelected = document.querySelector(`#${section}`);
    if (sectionSelected) {
      sectionSelected.scrollIntoView({ behavior: "smooth" });
      document.body.style.overflow = "auto";
      setIsMenuOpen(false);
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

  function openMenu() {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  }

  function handleOutsideClick() {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible,
      }}
      className="container h-[80px] py-5 font-semibold text-zinc-900 dark:text-zinc-300"
    >
      <button onClick={openMenu} className="md:hidden" aria-label="Open menu">
        <MenuIcon size={28} />
      </button>

      <motion.div
        onClick={handleOutsideClick}
        className={`absolute left-0 top-0 z-50 h-full w-full bg-black opacity-0 md:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        animate={{ opacity: isMenuOpen ? 0.3 : 0 }}
      />

      <div
        className={`z-50 flex flex-col gap-4 rounded-md bg-zinc-300 p-3 opacity-0 duration-300 dark:bg-zinc-800  max-md:absolute md:flex-row md:items-center md:gap-0 md:rounded-none md:bg-transparent md:p-0 md:opacity-100 dark:md:bg-transparent ${isMenuOpen ? "pointer-events-auto opacity-100" : "max-md:pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-4 md:flex-row md:items-center">
          {pathname === `/${localActive}` ? (
            <>
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
            </>
          ) : (
            <Link href="/">
              <NavItem title={t("navItems.home")} icon="home" />
            </Link>
          )}
        </nav>

        <div className="ml-auto flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2 md:ml-4">
            <SunIcon className="max-sm:hidden" />
            <Switch aria-label="Toggle theme" onCheckedChange={toggleTheme} />
            <MoonIcon className="max-sm:hidden" />
          </div>

          <Select
            defaultValue={localActive}
            onValueChange={onSelectChange}
            disabled={isPending}
          >
            <SelectTrigger aria-label="Language selector">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent aria-label="Language options">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="pt-BR">Português-BR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.header>
  );
}
