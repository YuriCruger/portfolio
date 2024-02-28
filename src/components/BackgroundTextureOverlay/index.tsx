import { cn } from "@/utils/cn";

interface BackgroundTextureOverlayProps {
  className?: string;
}

export function BackgroundTextureOverlay({
  className,
}: BackgroundTextureOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 h-full w-full bg-background-texture bg-cover bg-no-repeat opacity-15 dark:opacity-5",
        className,
      )}
    />
  );
}
