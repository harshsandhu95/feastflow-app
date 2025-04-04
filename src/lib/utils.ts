import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRole(input?: string): string | undefined {
  if (!input) return;

  const parts = input.split(':');
  if (parts.length === 2 && parts[0] && parts[1]) {
    return parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  }

  return;
}
