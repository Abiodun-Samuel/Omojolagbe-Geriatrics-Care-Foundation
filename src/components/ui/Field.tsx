import type { ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

type FieldWrapProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

/** Label + control + inline error, wired with aria-describedby / aria-invalid. */
export function FieldWrap({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: FieldWrapProps) {
  const hintId = hint ? `${htmlFor}-hint` : undefined;
  const errorId = error ? `${htmlFor}-error` : undefined;

  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 text-sm font-semibold text-ink-800"
      >
        {label}
        {required && (
          <span className="ml-1 text-danger" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-sm text-ink-500">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p
          id={errorId}
          className="mt-1.5 flex items-center gap-1.5 text-sm text-danger"
        >
          <AlertCircle size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

/** Honeypot field: visually hidden, ignored by real users, catches bots. */
export function Honeypot({
  register,
}: {
  register: Record<string, unknown>;
}) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="company">Company</label>
      <input
        id="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register}
      />
    </div>
  );
}
