interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  const titleUpperCase = title.toLocaleUpperCase();

  return (
    <h2 className="pb-5 text-center text-2xl font-bold text-teal-800 dark:text-cyan-600">
      {titleUpperCase}
    </h2>
  );
}
