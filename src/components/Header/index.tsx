"use client";
import { NavItem } from "./components/NavItem";
import { Button } from "../ui/button";

export function Header() {
  const scrollToSection = (section: string) => {
    const sectionSelected = document.querySelector(`#${section}`);
    if (sectionSelected) {
      sectionSelected.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="container mx-auto flex items-center py-5">
      <nav className="flex items-center gap-10">
        <NavItem title="Home" scrollToSection={scrollToSection} />
        <NavItem title="Projects" scrollToSection={scrollToSection} />
      </nav>

      <div className="ml-auto">
        <Button onClick={() => scrollToSection("contact")}>Contact</Button>
      </div>
    </header>
  );
}
