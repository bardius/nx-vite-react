import { FC } from 'react';
import { SortBy, Table } from '@bardius/common-ui';
import { financialInstrumentsTableConfig } from './financialInstrumentsTableConfig';
import { useDataSorting } from '../../hooks/useDataSorting';
import { FinancialInstrumentsData } from '../../hooks/useDummyData';

export interface FinancialInstrumentsTableProps {
  data: FinancialInstrumentsData[];
}

// Default sortBy presets
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

const FinancialInstrumentsTable: FC<FinancialInstrumentsTableProps> = ({ data }) => {
  // Get sorted data, sort by config and change callback
  const { sortedData, sortBy, onSortByChange } = useDataSorting<FinancialInstrumentsData>(
    data,
    sortByPreset,
    financialInstrumentsTableConfig.columns,
  );

  return (
    <Table
      config={financialInstrumentsTableConfig}
      data={sortedData}
      sortBy={sortBy}
      onSortByChange={onSortByChange}
    />
  );
};

export { FinancialInstrumentsTable };
