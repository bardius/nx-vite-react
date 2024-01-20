import { assetClassComparator } from '../../../../src/components/table/comparators/sortByComparators';
import { FinancialInstrumentsData } from '../../../../src/hooks/useDummyData';

const dummyData: FinancialInstrumentsData[] = [
  {
    ticker: 'ALPHA',
    price: 3150.67,
    assetClass: 'Credit',
  },
  {
    ticker: 'BETA',
    price: -3791.37,
    assetClass: 'Equities',
  },
  {
    ticker: 'GAMMA',
    price: 0,
    assetClass: 'Macro',
  },
];

describe('Asset class comparator', () => {
  it('should sort "ASC" based on the spec', () => {
    const sorted = dummyData.sort((a, b) => assetClassComparator(a, b, 'ASC'));
    expect(sorted[0].assetClass).toBe('Equities');
    expect(sorted[1].assetClass).toBe('Macro');
    expect(sorted[2].assetClass).toBe('Credit');
  });
  it('should sort "DESC" based on the spec', () => {
    const sorted = dummyData.sort((a, b) => assetClassComparator(a, b, 'DESC'));
    expect(sorted[2].assetClass).toBe('Equities');
    expect(sorted[1].assetClass).toBe('Macro');
    expect(sorted[0].assetClass).toBe('Credit');
  });
});
