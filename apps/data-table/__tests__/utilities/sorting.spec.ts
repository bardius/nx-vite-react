import { SortBy } from '@bardius/common-ui';
import {
  sortByMultipleComparators,
  getNextSortByOrder,
  getNextSortByState,
} from '../../src/utilities/sorting';

const dummyData = [
  {
    ticker: 'BETA',
    price: 3150.67,
    assetClass: 'Credit',
  },
  {
    ticker: 'BETA',
    price: -3150.67,
    assetClass: 'Credit',
  },
  {
    ticker: 'ALPHA',
    price: 3150.67,
    assetClass: 'Credit',
  },
];

const dummyComparatorsConfig = {};

const dummySortBy: SortBy[] = [
  { priority: 0, dataKey: 'ticker', order: 'ASC' },
  { priority: 1, dataKey: 'price', order: 'DESC' },
];

describe('Utilities: Sorting', () => {
  describe('sortByMultipleComparators', () => {
    it('should sort based on sortBy values', () => {
      const sorted = sortByMultipleComparators(dummyData, dummyComparatorsConfig, dummySortBy);
      expect(sorted[0].ticker).toBe('ALPHA');
      expect(sorted[1].ticker).toBe('BETA');
      expect(sorted[2].ticker).toBe('BETA');
      expect(sorted[2].price).toBe(-3150.67);
    });

    it('should not sort if no sortBy is provided', () => {
      const sorted = sortByMultipleComparators(dummyData, dummyComparatorsConfig);
      expect(sorted[0].ticker).toBe('BETA');
      expect(sorted[1].ticker).toBe('BETA');
      expect(sorted[1].price).toBe(-3150.67);
      expect(sorted[2].ticker).toBe('ALPHA');
    });
  });

  describe('getNextSortByOrder', () => {
    it('should calculate next order in none exists', () => {
      const order = getNextSortByOrder(undefined);
      expect(order).toBe('ASC');
    });
  });

  describe('getNextSortByState', () => {
    it('should calculate next order in none exists', () => {
      const state = getNextSortByState('ticker', dummySortBy);
      const finalState = getNextSortByState('price', state);
      expect(finalState[0].order).toBe('DESC');
      expect(finalState[1]).toBeUndefined();
    });
  });
});
