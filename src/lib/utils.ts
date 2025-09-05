import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string): string {
  const words = str.trim().split(/\s+/);

  const capitalizedWords = words.map((word) => {
    const firstChar: string = word[0].toUpperCase();
    const rest: string = word.slice(1);
    return firstChar + rest;
  });

  return capitalizedWords.join(' ');
}
