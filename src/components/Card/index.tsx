import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export function Card({ title, description, image }: CardProps) {
  return (
    <div className="group h-64 overflow-hidden rounded-md shadow shadow-zinc-700 hover:scale-95">
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
        <h3 className="text-xl font-bold text-zinc-300">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
        <Button className="mt-auto">View project</Button>
      </div>
    </div>
  );
}
