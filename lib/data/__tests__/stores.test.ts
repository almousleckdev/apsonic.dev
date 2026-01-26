import { describe, it, expect } from 'vitest';
import { filterStores, getCountries, STORES } from '../stores';

describe('Store Data Business Logic', () => {
    describe('filterStores', () => {
        it('filters by type (dealer)', () => {
            const result = filterStores(STORES, { type: 'dealer' });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(s => s.type === 'dealer')).toBe(true);
        });

        it('filters by type (service)', () => {
            const result = filterStores(STORES, { type: 'service' });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(s => s.type === 'service')).toBe(true);
        });

        it('returns all stores if type is "all"', () => {
            const result = filterStores(STORES, { type: 'all' });
            expect(result.length).toBe(STORES.length);
        });

        it('filters by country', () => {
            const result = filterStores(STORES, { type: 'all', country: 'Ghana' });
            expect(result.length).toBeGreaterThan(0);
            expect(result.every(s => s.country.toLowerCase().includes('ghana'))).toBe(true);
        });

        it('filters by search term (name, address, city, country)', () => {
            // Search by name
            const searchByName = filterStores(STORES, { type: 'all', search: 'Sogakofe' });
            expect(searchByName.length).toBeGreaterThan(0);
            expect(searchByName[0].name).toContain('Sogakofe');

            // Search by city
            const searchByCity = filterStores(STORES, { type: 'all', search: 'Accra' });
            expect(searchByCity.length).toBeGreaterThan(0);
            expect(searchByCity.every(s => s.city === 'Accra')).toBe(true);
        });

        it('returns empty array when no store matches search', () => {
            const result = filterStores(STORES, { type: 'all', search: 'Mars Colony' });
            expect(result.length).toBe(0);
        });
    });

    describe('getCountries', () => {
        it('returns unique sorted countries', () => {
            const countries = getCountries(STORES);
            const expected = Array.from(new Set(STORES.map(s => s.country))).sort();
            expect(countries).toEqual(expected);
        });
    });
});
