/** Joins class names, dropping falsy values. Keeps conditional styling readable. */
export type ClassValue = string | number | false | null | undefined;

export const cn = (...classes: ClassValue[]): string =>
  classes.filter(Boolean).join(' ');
