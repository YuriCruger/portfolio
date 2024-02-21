"use client";
import Image from "next/image";
import Logo from "@public/logo.jpg";
import { NavItem } from "./components/NavItem";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="container mx-auto flex items-center">
      <div>
        <Image
          src={Logo}
          width={0}
          height={0}
          sizes="100vw"
          alt="Logo"
          className="h-20 w-20"
        />
      </div>

      <nav className="ml-32 flex items-center gap-10">
        <NavItem title="Home" />
        <NavItem title="Projects" />
      </nav>

      <div className="ml-auto">
        <Button className="text-zinc-800 hover:bg-zinc-700 hover:text-zinc-300">
          Contact
        </Button>
      </div>
    </header>
  );
}
