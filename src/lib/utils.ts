// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Menggabungkan class Tailwind secara kondisional & mencegah bentrok style.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}