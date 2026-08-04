type ClassValue = string | number | null | undefined | false;

/** Concatena classes condicionais sem dependência externa. */
export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}
