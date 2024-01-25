import { dummyData } from '../contexts/defautDataState';

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

// TODO: get from msw mocked request instead of json file import
// Hook to provide dummy financial instruments data
const useDummyData = (): FinancialInstrumentsData[] => {
  return dummyData;
};

export { useDummyData };
