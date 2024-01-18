import { Text } from '@salt-ds/core';
import { SortBy, Table, TableConfig } from '@bardius/common-ui';
import { priceCellRenderer } from '../components/table/cellRenderers';
import { assetClassRowRenderer } from '../components/table/rowRenderers';

const config: TableConfig = {
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
      cellRenderer: priceCellRenderer,
    },
    {
      dataKey: 'assetClass',
      title: 'Asset Class',
      actions: {
        sorting: true,
      },
    },
  ],
  rowRenderer: assetClassRowRenderer,
  onSortByChange: console.log,
};

const data = [
  {
    uniqueDataRowId: 1,
    ticker: 'ALPHA',
    price: 3150.67,
    assetClass: 'Credit',
  },
  {
    uniqueDataRowId: 2,
    ticker: 'BETA',
    price: -3791.37,
    assetClass: 'Equities',
  },
  {
    uniqueDataRowId: 3,
    ticker: 'GAMMA',
    price: 0,
    assetClass: 'Macro',
  },
  {
    uniqueDataRowId: 4,
    ticker: 'Delta',
    price: null,
    assetClass: 'undefined',
  },
];

const sortBy = [
  { priority: 0, dataKey: 'ticker', order: 'ASC' } as SortBy,
  { priority: 0, dataKey: 'price', order: 'DESC' } as SortBy,
];

const HomePage = () => {
  return (
    <div data-testid={'page'}>
      <Text styleAs={'h2'}>Welcome data-table</Text>
      <Table config={config} data={data} sortBy={sortBy} />
    </div>
  );
};

export { HomePage };
