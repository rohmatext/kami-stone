import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function nf(value: number | string) {
    return new Intl.NumberFormat('id').format(Number(value));
}
