interface ProfileInfoRowProps {
  nameLabel: string;
  fieldValue: string;
}

export function ProfileInfoRow({ nameLabel, fieldValue }: ProfileInfoRowProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-bold uppercase text-zinc-800 dark:text-zinc-300 sm:text-lg sm:tracking-widest">
        {nameLabel}:
      </span>
      <p className="text-zinc-700 dark:text-zinc-400 sm:text-lg sm:tracking-widest">
        {fieldValue}
      </p>
    </div>
  );
}
