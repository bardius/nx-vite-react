import { ReactNode } from 'react';
import { defaultUniqueRowIdKeyName, RowRenderer, TableCell } from '@bardius/common-ui';

import styles from './rowRenderers.module.scss';

const getAssetClassColor = (assetClass: string) => {
  switch (assetClass.toLowerCase()) {
    case 'credit':
      return 'green';
    case 'macro':
      return 'white';
    case 'equities':
      return 'blue';
    default:
      return 'transparent';
  }
};

const assetClassRowRenderer: RowRenderer = (
  rowConfig,
  rowData,
  uniqueRowIdKeyName: string = defaultUniqueRowIdKeyName,
) => {
  const tableCells: ReactNode[] = [];

  for (const [columnKey, cellValue] of Object.entries(rowData)) {
    if (columnKey !== uniqueRowIdKeyName) {
      const uniqueKey = `${rowData[uniqueRowIdKeyName]}_cell_${columnKey}`;
      tableCells.push(
        <TableCell
          key={uniqueKey}
          dataTestId={uniqueKey}
          data={cellValue}
          cellRenderer={rowConfig[columnKey].cellRenderer}
          logger={rowConfig[columnKey].logger}
          customClassName={styles[`bgColor-${getAssetClassColor(rowData.assetClass)}`]}
        />,
      );
    }
  }

  return tableCells;
};

export { assetClassRowRenderer };
