import { render, screen } from '@testing-library/react';
import { Table, TableConfig } from './table';
import { SortBy } from '../tableHeader/tableHeader';
import { RowData } from '../tableRow/tableRow';

const dummyConfig: TableConfig = {
  columns: [
    {
      dataKey: 'ticker',
      title: 'Ticker',
      actions: {
        sorting: true,
      },
    },
    {
      dataKey: 'price',
      title: 'Price',
      actions: {
        sorting: true,
      },
    },
    {
      dataKey: 'assetClass',
      title: 'Asset Class',
      actions: {
        sorting: true,
      },
    },
  ],
};
const dummyData: RowData[] = [
  {
    uniqueDataRowId: 1,
    ticker: 'ALPHA',
    price: 3150.67,
    assetClass: 'Credit',
  },
  {
    uniqueDataRowId: 2,
    ticker: 'BETA',
    price: 3791.37,
    assetClass: 'Equities',
  },
];
const dummySorting: SortBy[] = [{ priority: 0, dataKey: 'ticker', order: 'ASC' }];

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table config={dummyConfig} data={dummyData} sortBy={dummySorting} />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render without data', () => {
    render(<Table config={dummyConfig} data={[]} sortBy={dummySorting} />);
    expect(screen.getByTestId('no_data_row')).toBeTruthy();
  });
});
