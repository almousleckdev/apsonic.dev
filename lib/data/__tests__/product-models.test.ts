import { describe, it, expect } from 'vitest';
import { filterProducts, getProductById, getAvailableDisplacements, PRODUCT_MODELS } from '../product-models';

describe('Product Data Business Logic', () => {
    describe('filterProducts', () => {
        it('returns all products when no filters are applied', () => {
            const result = filterProducts({});
            expect(result.length).toBe(PRODUCT_MODELS.length);
        });

        it('filters by category (type)', () => {
            const result = filterProducts({ type: 'underbone' });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(p => p.category === 'underbone')).toBe(true);
        });

        it('filters by displacement', () => {
            const result = filterProducts({ displacement: 125 });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(p => p.displacement === 125)).toBe(true);
        });

        it('filters by search term (model name)', () => {
            const result = filterProducts({ search: 'AP110-A' });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(p => p.model.toLowerCase().includes('ap110-a'))).toBe(true);
        });

        it('filters by search term (brand name)', () => {
            const result = filterProducts({ search: 'APSONIC' });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(p => p.brand.toLowerCase().includes('apsonic'))).toBe(true);
        });

        it('returns empty array when no results match search', () => {
            const result = filterProducts({ search: 'NonExistentBike' });
            expect(result.length).toBe(0);
        });

        it('combines multiple filters (category and displacement)', () => {
            const result = filterProducts({ type: 'street', displacement: 125 });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(p => p.category === 'street' && p.displacement === 125)).toBe(true);
        });
    });

    describe('getAvailableDisplacements', () => {
        it('returns a sorted list of unique displacements', () => {
            const result = getAvailableDisplacements();
            expect(result).toEqual([...new Set(result)].sort((a, b) => a - b));
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe('getProductById', () => {
        it('returns the correct product for a valid ID', () => {
            const firstProduct = PRODUCT_MODELS[0];
            const result = getProductById(firstProduct.id);
            expect(result).toEqual(firstProduct);
        });

        it('returns undefined for an invalid ID', () => {
            const result = getProductById('non-existent-id');
            expect(result).toBeUndefined();
        });
    });
});
