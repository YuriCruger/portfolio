import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="dark:bg-dark group h-64 overflow-hidden rounded-md bg-zinc-500/30 shadow-md shadow-zinc-900 hover:scale-95 dark:shadow-zinc-700">
      <div className="h-full w-full group-hover:hidden">
        <Image
          src={image}
          alt="market project"
          height={0}
          width={0}
          sizes="100vw"
          className="h-full w-full "
        />
      </div>

      <div className="hidden h-full flex-col gap-1 p-3 text-center group-hover:flex">
        <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-300">
          {title}
        </h3>
        <p className="text-sm text-zinc-900 dark:text-zinc-400">
          {description}
        </p>
        <Button className="mt-auto">View project</Button>
      </div>
    </div>
  );
}
