import { TableConfig } from '@bardius/common-ui';
import { assetClassComparator } from '../table/comparators/sortByComparators';
import { priceCellRenderer } from '../table/cellRenderers/cellRenderers';
import { assetClassRowRenderer } from '../table/rowRenderers/rowRenderers';
import { FinancialInstrumentsData } from '../../hooks/useDummyData';

const financialInstrumentsTableConfig: TableConfig<FinancialInstrumentsData> = {
  columns: [
    {
      dataKey: 'assetClass',
      title: 'Asset Class',
      actions: {
        sorting: true,
      },
      sortingComparator: assetClassComparator,
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
      dataKey: 'ticker',
      title: 'Ticker',
      actions: {
        sorting: true,
      },
    },
  ],
  uniqueRowIdKeyName: 'ticker',
  rowRenderer: assetClassRowRenderer,
};

export { financialInstrumentsTableConfig };
