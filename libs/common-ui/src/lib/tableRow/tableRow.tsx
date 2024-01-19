import { FC, ReactElement } from 'react';
import { isEmpty } from 'ramda';
import { CellRenderer, ErrorLogger, TableCell } from '../tableCell/tableCell';

import styles from './tableRow.module.scss';

export interface RowData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface RowConfig {
  [key: string]: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cellRenderer?: CellRenderer<any>;
    logger?: ErrorLogger;
  };
}

export type RowRenderer<T = RowData> = (
  rowConfig: RowConfig,
  rowData: T,
  uniqueRowIdKeyName?: string,
  logger?: ErrorLogger,
) => ReactElement[];

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
      />,
    );
  });

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
