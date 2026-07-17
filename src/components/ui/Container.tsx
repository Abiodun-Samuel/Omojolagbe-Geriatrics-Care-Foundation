import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  size?: "prose" | "content" | "wide";
  className?: string;
};

const sizeMap = {
  prose: "max-w-(--container-prose)",
  content: "max-w-(--container-content)",
  wide: "max-w-(--container-wide)",
} as const;

export function Container({
  children,
  size = "content",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
