import { useEffect, useState } from 'react';
import sampleData from '../../__fixtures__/sampleData.json';

// TODO: if we know ticker is unique we can remove uniqueDataRowId
export type FinancialInstrumentsData = {
  // Unique ID for each data item
  uniqueDataRowId?: number;
  // Ticker field
  ticker: string;
  // Price field
  price: number | null;
  // Asset Class field
  assetClass: string;
};

const dataDummy: FinancialInstrumentsData[] = [
  {
    uniqueDataRowId: 1,
    ticker: 'ALPHA2',
    price: 3150.67,
    assetClass: 'Credit',
  },
  {
    uniqueDataRowId: 2,
    ticker: 'BETA2',
    price: -3791.37,
    assetClass: 'Equities',
  },
  {
    uniqueDataRowId: 3,
    ticker: 'GAMMA2',
    price: 0,
    assetClass: 'Macro',
  },
  {
    uniqueDataRowId: 4,
    ticker: 'DELTA2',
    price: null,
    assetClass: 'undefined',
  },
  {
    uniqueDataRowId: 5,
    ticker: 'GAMMA3',
    price: 1.0,
    assetClass: 'Macro',
  },
  {
    uniqueDataRowId: 6,
    ticker: 'BETA3',
    price: -3791.37,
    assetClass: 'Macro',
  },
  {
    uniqueDataRowId: 7,
    ticker: 'BETA4',
    price: 3150.67,
    assetClass: 'Credit',
  },
].concat(sampleData as never[]);

// TODO: get from msw mocked request instead of json file import
// Hook to provide dummy financial instruments data
const useDummyData = (): FinancialInstrumentsData[] => {
  const [data, setData] = useState<FinancialInstrumentsData[]>([]);

  useEffect(() => {
    setData(dataDummy);
  }, []);

  return data;
};

export { useDummyData };
