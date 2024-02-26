import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="group h-[170px] overflow-hidden rounded-md bg-gray-500/30 shadow-md shadow-zinc-900 transition-all hover:scale-95 dark:bg-zinc-800 dark:shadow-zinc-700 sm:h-[210px] lg:h-[320px] xl:h-[350px]">
      <div className="h-full w-full group-hover:hidden">
        <Image
          src={image}
          alt="market project"
          height={0}
          width={0}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="hidden h-full flex-col gap-1 overflow-auto p-3 text-center group-hover:flex">
        <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-300 lg:text-2xl">
          {title}
        </h3>
        <p className="text-sm text-zinc-900 dark:text-zinc-400 lg:text-base">
          {description}
        </p>
        <Button className="mt-auto">View project</Button>
      </div>
    </div>
  );
}
