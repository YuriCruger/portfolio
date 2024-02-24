import { cn } from "@/utils/cn";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({
  title,
  className,
  ...props
}: SectionTitleProps) {
  const titleUpperCase = title.toLocaleUpperCase();

  return (
    <h2
      {...props}
      className={cn(
        "pb-5 text-center text-2xl font-bold text-teal-800 dark:text-cyan-600",
        className,
      )}
    >
      {titleUpperCase}
    </h2>
  );
}
