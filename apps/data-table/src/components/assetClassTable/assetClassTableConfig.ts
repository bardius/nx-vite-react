import { TableConfig } from '@bardius/common-ui';
import { assetClassComparator } from '../table/comparators/sortByComparators';
import { priceCellRenderer } from '../table/cellRenderers/cellRenderers';
import { assetClassRowRenderer } from '../table/rowRenderers/rowRenderers';
import { AssetClassData } from '../../hooks/useDummyData';

const assetClassTableConfig: TableConfig<AssetClassData> = {
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

export { assetClassTableConfig };
