"use client";
import { NavItem } from "./components/NavItem";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Switch } from "../ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export function Header() {
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

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible,
      }}
      className="container mx-auto flex items-center py-5 font-semibold text-zinc-900 dark:text-zinc-300"
    >
      <nav className="flex items-center gap-4 sm:gap-10">
        <NavItem title="about" scrollToSection={scrollToSection} />
        <NavItem title="projects" scrollToSection={scrollToSection} />
      </nav>

      <div className="ml-auto flex items-center gap-4 sm:gap-10">
        <div className="flex items-center gap-2 ">
          <SunIcon className="max-sm:hidden" />
          <Switch onCheckedChange={toggleTheme} />
          <MoonIcon className="max-sm:hidden" />
        </div>
        <Button onClick={() => scrollToSection("contact")}>Contact</Button>
      </div>
    </motion.header>
  );
}
