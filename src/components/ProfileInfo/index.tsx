interface ProfileInfoProps {
  title: string;
  description: string;
}

export function ProfileInfo({ title, description }: ProfileInfoProps) {
  const upperCaseTitle = title.toLocaleUpperCase();
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold tracking-widest text-zinc-800">
        {upperCaseTitle}:
      </span>
      <p className="text-lg tracking-widest text-zinc-700">{description}</p>
    </div>
  );
}
