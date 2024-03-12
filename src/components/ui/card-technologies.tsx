interface CardTechnologiesProps {
  isTechMenuOpen: boolean;
  projectIndex: number;
  technologies: string[];
}

export function CardTechnologies({
  isTechMenuOpen,
  projectIndex,
  technologies,
}: CardTechnologiesProps) {
  return (
    <div
      className={`absolute right-0 top-12 z-10 w-full origin-top rounded-md p-3 shadow duration-500 
      ${isTechMenuOpen ? "scale-y-100" : "scale-y-0"} 
      ${projectIndex % 2 === 0 ? "bg-zinc-300 text-zinc-800 shadow-white" : "bg-zinc-800 text-zinc-300 shadow-zinc-800"}
      `}
    >
      <span className="mb-5 font-bold">Technologies</span>
      {technologies.map((tech, index) => (
        <p key={index} className="tracking-wider">
          {tech}
        </p>
      ))}
    </div>
  );
}
