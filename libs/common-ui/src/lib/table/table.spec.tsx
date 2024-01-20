import { render } from '@testing-library/react';
import { Table, TableConfig } from './table';
import { RowData } from '../tableRow/tableRow';
import { SortBy } from '../tableHeaderActions/tableHeaderActions';

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
  it('should render with data', () => {
    const { baseElement, getAllByTestId } = render(
      <Table
        config={dummyConfig}
        data={dummyData}
        sortBy={dummySorting}
        onSortByChange={undefined}
      />,
    );
    expect(baseElement).toBeTruthy();
    expect(getAllByTestId(/_row/gi).length).toBe(dummyData.length);
  });

  it('should render without data', () => {
    const { getByTestId } = render(
      <Table config={dummyConfig} data={[]} sortBy={dummySorting} onSortByChange={undefined} />,
    );
    expect(getByTestId('no_data_row')).toBeTruthy();
  });
});
