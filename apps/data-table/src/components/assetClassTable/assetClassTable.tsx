import { FC } from 'react';
import { SortBy, Table } from '@bardius/common-ui';
import { assetClassTableConfig } from './assetClassTableConfig';
import { useDataSorting } from '../../hooks/useDataSorting';
import { AssetClassData } from '../../hooks/useDummyData';

export interface AssetClassTableProps {
  data: AssetClassData[];
}

const sortByPreset: SortBy[] = [
  {
    priority: 0,
    dataKey: 'assetClass',
    order: 'ASC',
  },
  {
    priority: 1,
    dataKey: 'price',
    order: 'DESC',
  },
  {
    priority: 2,
    dataKey: 'ticker',
    order: 'ASC',
  },
];

const AssetClassTable: FC<AssetClassTableProps> = ({ data }) => {
  const { sortedData, sortBy, onSortByChange } = useDataSorting<AssetClassData>(
    data,
    sortByPreset,
    assetClassTableConfig.columns,
  );

  return (
    <Table
      config={assetClassTableConfig}
      data={sortedData}
      sortBy={sortBy}
      onSortByChange={onSortByChange}
    />
  );
};

export { AssetClassTable };
