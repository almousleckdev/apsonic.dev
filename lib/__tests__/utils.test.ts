import { describe, it, expect } from 'vitest';
import { cn, formatCurrency, formatDate } from '../utils';

describe('cn utility', () => {
    it('merges tailwind classes correctly', () => {
        const result = cn('px-4 py-2', 'bg-red-500', { 'hover:bg-red-600': true });
        expect(result).toContain('px-4');
        expect(result).toContain('py-2');
        expect(result).toContain('bg-red-500');
        expect(result).toContain('hover:bg-red-600');
    });

    it('handles conditional classes', () => {
        const isActive = true;
        const isError = false;
        const result = cn('base', isActive && 'active', isError && 'error');
        expect(result).toContain('base');
        expect(result).toContain('active');
        expect(result).not.toContain('error');
    });
});

describe('formatCurrency', () => {
    it('formats USD correctly', () => {
        expect(formatCurrency(100)).toContain('$100.00');
    });

    it('formats other currencies', () => {
        expect(formatCurrency(100, 'EUR')).toContain('€100.00');
    });
});

describe('formatDate', () => {
    it('formats date string correctly', () => {
        const result = formatDate('2025-01-25');
        expect(result).toContain('January 25, 2025');
    });

    it('handles Date objects', () => {
        const date = new Date(2025, 0, 25);
        const result = formatDate(date);
        expect(result).toContain('January 25, 2025');
    });
});
