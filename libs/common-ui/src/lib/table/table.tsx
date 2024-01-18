import { FC, useEffect, useState } from 'react';
import { ColumnConfig, SortBy, TableHeader } from '../tableHeader/tableHeader';
import {
  defaultUniqueRowIdKeyName,
  RowConfig,
  RowData,
  RowRenderer,
  TableRow,
} from '../tableRow/tableRow';

import styles from './table.module.scss';

export interface TableConfig<T = RowData> {
  // Columns configuration & settings
  columns: ColumnConfig[];
  // Component to render the table row. Default is TableRow component.
  rowRenderer?: RowRenderer<T>;
  // Dataset keyName that signifies a unique rowData id. Default is "uniqueDataRowId"
  uniqueRowIdKeyName?: string;
  // Callback to invoke when sortBy action is triggered
  onSortByChange?: (sortBy: SortBy[]) => void;
}

export interface TableProps<T = RowData> {
  // Table configuration
  config: TableConfig<T>;
  // Table data to populate columns and cells
  data?: T[];
  // Optional sorting configuration
  sortBy?: SortBy[];
}

// export type ColumnSortFunction = (a: unknown, b: unknown) => number;
// sortingType: 'alphanumeric' | 'numeric' | ColumnSortFunction;

const Table: FC<TableProps> = ({ config, data, sortBy = [] }) => {
  // const onSortByClick = useCallback(
  //   (dataKey: string, order: SortByOrder) => {
  //     const nextSortBy: SortBy = {
  //       priority: 0,
  //       dataKey,
  //       order,
  //     };
  //     setSortBy([nextSortBy])
  //   },
  //   [sortBy],
  // );
  const [rowConfig, setRowConfig] = useState<RowConfig>();
  const hasData = data && data.length > 0;
  const totalColumns = config.columns.length;

  useEffect(() => {
    const nextRowConfig: RowConfig = {};

    config.columns.forEach(column => {
      nextRowConfig[column.dataKey] = {
        cellRenderer: column.cellRenderer,
        logger: column.logger,
      };
    });

    setRowConfig(nextRowConfig);
  }, [config]);

  return (
    <div className={`${styles['saltGrid']} saltGrid`} data-testid={'table'}>
      <table>
        <TableHeader
          config={config.columns}
          sortBy={sortBy}
          onSortByChange={config.onSortByChange}
        />
        <tbody>
          {hasData && rowConfig ? (
            data.map(rowData => (
              <TableRow
                key={`${rowData[config.uniqueRowIdKeyName ?? defaultUniqueRowIdKeyName]}_row`}
                rowRenderer={config.rowRenderer}
                rowData={rowData}
                uniqueRowIdKeyName={config.uniqueRowIdKeyName}
                rowConfig={rowConfig}
              />
            ))
          ) : (
            <tr>
              <td data-testid='no_data_row' colSpan={totalColumns}>
                No data to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
