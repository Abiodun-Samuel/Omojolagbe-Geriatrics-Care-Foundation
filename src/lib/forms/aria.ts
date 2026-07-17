/** Compute the aria props a form control needs for its hint/error nodes. */
export function fieldAria(id: string, hasHint: boolean, hasError: boolean) {
  const describedBy =
    [hasHint ? `${id}-hint` : null, hasError ? `${id}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;
  return {
    "aria-describedby": describedBy,
    "aria-invalid": hasError ? (true as const) : undefined,
  };
}
