interface ProfileInfoRowProps {
  nameLabel: string;
  fieldValue: string;
}

export function ProfileInfoRow({ nameLabel, fieldValue }: ProfileInfoRowProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-300">
        {nameLabel}:
      </span>
      <p className="text-lg tracking-widest text-zinc-700 dark:text-zinc-400">
        {fieldValue}
      </p>
    </div>
  );
}
