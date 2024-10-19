"use client";
import { NavItem } from "./components/NavItem";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderSelect } from "./components/HeaderSelect";
import { HeaderToggleTheme } from "./components/HeaderToggleTheme";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");
  const pathname = usePathname();
  const localActive = useLocale();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    const sectionSelected = document.querySelector(`#${section}`);
    if (sectionSelected) {
      sectionSelected.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  function openMenu() {
    setIsMenuOpen(true);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible,
      }}
      className="container z-10 h-[80px] bg-red-500 py-5 font-semibold text-zinc-900 dark:text-zinc-300"
    >
      <button onClick={openMenu} className="md:hidden" aria-label="Open menu">
        <MenuIcon size={28} />
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`absolute z-50 flex flex-col gap-4 rounded-md bg-red-300 p-3 duration-300 dark:bg-zinc-800`}
        >
          <nav className="flex flex-col gap-4">
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
            <HeaderToggleTheme />

            <HeaderSelect />
          </div>
        </div>
      )}

      {/* <div
        ref={menuRef}
        className={`z-50 flex flex-col gap-4 rounded-md bg-zinc-300 p-3 duration-300 dark:bg-zinc-800  max-md:absolute md:flex-row md:items-center md:gap-0 md:rounded-none md:bg-transparent md:p-0 md:opacity-100 dark:md:bg-transparent`}
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
          <HeaderToggleTheme />

          <HeaderSelect />
        </div>
      </div> */}
    </motion.header>
  );
}
