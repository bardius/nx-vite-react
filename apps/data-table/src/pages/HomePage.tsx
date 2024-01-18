import { Text } from '@salt-ds/core';
import { SortBy, Table } from '@bardius/common-ui';

const config = {
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
    price: 3791.37,
    assetClass: 'Equities',
  },
];

const sortBy = [{ priority: 0, dataKey: 'ticker', order: 'ASC' } as SortBy];

const HomePage = () => {
  return (
    <div data-testid={'page'}>
      <Text styleAs={'h2'}>Welcome data-table</Text>
      <Table config={config} data={data} sortBy={sortBy} />
    </div>
  );
};

export { HomePage };
