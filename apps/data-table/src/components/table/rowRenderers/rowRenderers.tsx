import { ReactElement } from 'react';
import { defaultUniqueRowIdKeyName, RowRenderer, TableCell } from '@bardius/common-ui';

import styles from './rowRenderers.module.scss';

// Helper to retrieve color class name per asset class value
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

// Renderer to style rows based on asset class value
const assetClassRowRenderer: RowRenderer = (
  rowConfig,
  rowData,
  uniqueRowIdKeyName: string = defaultUniqueRowIdKeyName,
) => {
  const tableCells: ReactElement[] = [];

  Object.keys(rowConfig).forEach(columnKey => {
    const uniqueKey = `${rowData[uniqueRowIdKeyName]}_cell_${columnKey}`;

    tableCells.push(
      <TableCell
        key={uniqueKey}
        dataTestId={uniqueKey}
        data={rowData[columnKey]}
        cellRenderer={rowConfig[columnKey].cellRenderer}
        logger={rowConfig[columnKey].logger}
        customClassName={styles[`bgColor-${getAssetClassColor(rowData.assetClass)}`]}
      />,
    );
  });

  return tableCells;
};

export { assetClassRowRenderer };
