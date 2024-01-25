import sampleData from '../../__fixtures__/sampleData.json';
import { FinancialInstrumentsData } from '../hooks/useDummyData';

const dummyData: FinancialInstrumentsData[] = [
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

export type DummyDataState = {
  dummyData: FinancialInstrumentsData[];
};

const defaultDataState: DummyDataState = {
  dummyData: [],
};

export { defaultDataState, dummyData };
