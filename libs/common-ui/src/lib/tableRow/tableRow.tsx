import { FC, ReactNode } from 'react';
import { isEmpty } from 'ramda';
import { CellRenderer, ErrorLogger, TableCell } from '../tableCell/tableCell';

import styles from './tableRow.module.scss';

export interface RowData {
  [key: string]: unknown;
}

export interface RowConfig {
  [key: string]: {
    cellRenderer?: CellRenderer<unknown>;
    logger?: ErrorLogger;
  };
}

export type RowRenderer<T = RowData> = (
  rowConfig: RowConfig,
  rowData: T,
  uniqueRowIdKeyName?: string,
  logger?: ErrorLogger,
) => ReactNode[];

export interface TableRowProps<T = RowData> {
  // optional custom row renderer
  rowRenderer?: RowRenderer<T>;
  // Row configuration
  rowConfig: RowConfig;
  // Data to populate row cells with
  rowData?: T;
  // Unique row Id property name. Should exist in provided rowData. Defaults to "uniqueDataRowId"
  uniqueRowIdKeyName?: string;
}

const defaultUniqueRowIdKeyName = 'uniqueDataRowId';

const defaultRowRenderer: RowRenderer = (
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
        />,
      );
    }
  }

  return tableCells;
};

const TableRow: FC<TableRowProps> = ({
  rowData,
  rowConfig,
  rowRenderer = defaultRowRenderer,
  uniqueRowIdKeyName = defaultUniqueRowIdKeyName,
}) => {
  const isValidData = rowData && rowData.constructor === Object && !isEmpty(rowData);

  return (
    <tr
      className={styles['saltGridTableRow']}
      data-testid={`${(rowData as RowData)[uniqueRowIdKeyName]}_row`}>
      {isValidData && rowRenderer(rowConfig, rowData, uniqueRowIdKeyName)}
    </tr>
  );
};

export { TableRow, defaultUniqueRowIdKeyName };
