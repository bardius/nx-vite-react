import { useEffect, useState } from 'react';
import sampleData from '../../__fixtures__/sampleData.json';

export type AssetClassData = {
  uniqueDataRowId?: number;
  ticker: string;
  price: number | null;
  assetClass: string;
};

// TODO: get from msw mocked request instead of json and move dummy to unit tests
const dataDummy: AssetClassData[] = [
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
].concat(sampleData);

const useDummyData = (): AssetClassData[] => {
  const [data, setData] = useState<AssetClassData[]>([]);

  useEffect(() => {
    setData(dataDummy);
  }, []);

  return data;
};

export { useDummyData };
