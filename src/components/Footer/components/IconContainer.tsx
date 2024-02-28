import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface IconContainerProps {
  children: ReactNode;
  className?: string;
}

export function IconContainer({
  children,
  className,
  ...props
}: IconContainerProps) {
  return (
    <div
      {...props}
      className={cn(
        "absolute left-3 top-2.5 translate-y-0 text-zinc-700 dark:text-zinc-500",
        className,
      )}
    >
      {children}
    </div>
  );
}
