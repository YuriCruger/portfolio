"use client";
import { NavItem } from "./components/NavItem";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function Header() {
  const scrollToSection = (section: string) => {
    const sectionSelected = document.querySelector(`#${section}`);
    if (sectionSelected) {
      sectionSelected.scrollIntoView({ behavior: "smooth" });
    }
  };

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible,
      }}
      className="container mx-auto flex items-center py-5"
    >
      <nav className="flex items-center gap-4 sm:gap-10">
        <NavItem title="Home" scrollToSection={scrollToSection} />
        <NavItem title="Projects" scrollToSection={scrollToSection} />
        <NavItem title="Skills" scrollToSection={scrollToSection} />
      </nav>

      <div className="ml-auto">
        <Button onClick={() => scrollToSection("contact")}>Contact</Button>
      </div>
    </motion.header>
  );
}
