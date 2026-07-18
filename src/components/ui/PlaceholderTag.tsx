import { FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

/** Visibly marks placeholder content the client will swap (Phase 5.7, D7).
 *  A thin wrapper over the shared Badge so it stays part of one system. */
export function PlaceholderTag({
  label = "Sample content",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Badge tone="neutral" size="sm" icon={FlaskConical} className={className}>
      {label}
    </Badge>
  );
}
