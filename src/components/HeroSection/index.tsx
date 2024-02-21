import Image from "next/image";
import me from "@public/me.jpeg";
import { SOCIAL_ICONS } from "@/constants/icons";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="md:h-screen-80 flex flex-col">
      <div className="pointer-events-none absolute top-0">
        <Image
          src="https://images.unsplash.com/photo-1596865249308-2472dc5807d7?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={0}
          height={0}
          sizes="100vw"
          alt="background"
          className="h-screen w-screen object-cover opacity-5"
        />
      </div>

      <div className="container flex flex-col-reverse items-center md:flex-row">
        <div className="flex flex-col justify-center gap-5 md:w-1/2">
          <p className="text-zinc-400">Hello! I am</p>
          <h1 className="text-7xl font-bold text-zinc-100 lg:text-9xl">
            Yuri Cruger
          </h1>
          <p className="text-sm text-zinc-400 md:text-base">
            a determined web developer, ready to embrace new professional
            opportunities. I am open to job offers, eager to apply my skills,
            and contribute to innovative projects. Let's explore possibilities
            and build something amazing together!
          </p>

          <div className="flex items-center gap-5">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.url}
                href={social.url}
                className="text-zinc-300 transition-all hover:text-zinc-400"
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <Image
          src={me}
          alt="Yuri Cruger"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[380px] object-contain sm:h-[500px] md:h-[600px] md:w-1/2"
        />
      </div>

      <div className="container  hidden gap-5 md:flex">
        <div className="h-1 w-10 rounded-md bg-zinc-700" />
        <div className="h-1 w-full rounded-md bg-zinc-700" />
        <div className="h-1 w-10 rounded-md bg-zinc-700" />
      </div>

      <div className="container mt-auto flex pb-2 pt-5 md:justify-center">
        <Button>Portfolio repository</Button>
      </div>
    </section>
  );
}
