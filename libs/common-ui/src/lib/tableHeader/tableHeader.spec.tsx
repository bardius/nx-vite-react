import { render } from '@testing-library/react';
import { ColumnConfig, TableHeader } from './tableHeader';
import { SortBy } from '../tableHeaderActions/tableHeaderActions';

const dummyConfig: ColumnConfig[] = [
  {
    dataKey: 'ticker',
    title: 'Ticker',
  },
  {
    dataKey: 'price',
    title: 'Price',
  },
  {
    dataKey: 'assetClass',
    title: 'AssetClass',
  },
];
const dummySorting: SortBy[] = [{ priority: 0, dataKey: 'ticker', order: 'ASC' }];

describe('TableHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableHeader config={dummyConfig} sortBy={dummySorting} />);
    expect(baseElement).toBeTruthy();
  });
});
