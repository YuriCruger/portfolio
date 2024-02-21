"use client";
import Image from "next/image";
import Logo from "@public/logo.jpg";
import { NavItem } from "./components/NavItem";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="container mx-auto flex items-center py-5">
      <nav className="flex items-center gap-10">
        <NavItem title="Home" />
        <NavItem title="Projects" />
      </nav>

      <div className="ml-auto">
        <Button>Contact</Button>
      </div>
    </header>
  );
}
