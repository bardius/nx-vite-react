import { FC, useEffect, useState } from 'react';
import { Text } from '@salt-ds/core';
import { ColumnConfig, TableHeader } from '../tableHeader/tableHeader';
import { SortBy, SortByActionOnChange } from '../tableHeaderActions/tableHeaderActions';
import {
  defaultUniqueRowIdKeyName,
  RowConfig,
  RowData,
  RowRenderer,
  TableRow,
} from '../tableRow/tableRow';

import styles from './table.module.scss';
import rowStyles from '../tableRow/tableRow.module.scss';
import cellStyles from '../tableCell/tableCell.module.scss';

export interface TableConfig<T = RowData> {
  // Columns configuration & settings
  columns: ColumnConfig[];
  // Component to render the table row. Default is TableRow component.
  rowRenderer?: RowRenderer<T>;
  // Dataset keyName that signifies a unique rowData id. Default is "uniqueDataRowId"
  uniqueRowIdKeyName?: string;
}

export interface TableProps<T extends RowData> {
  // Table configuration
  config: TableConfig<T>;
  // Table data to populate columns and cells
  data?: T[];
  // Optional sorting configuration
  sortBy?: SortBy[];
  // Callback to invoke when sortBy action is triggered
  onSortByChange: SortByActionOnChange;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table: FC<TableProps<any>> = ({ config, data, sortBy, onSortByChange = [] }) => {
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
          onSortByChange={onSortByChange as SortByActionOnChange}
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
            <tr className={rowStyles['saltGridTableRow']} data-testid={`no_data_row`}>
              <td
                className={`${cellStyles['saltGridCell']}`}
                data-testid='no_data_cell'
                colSpan={totalColumns}>
                <Text disabled={true} styleAs={'notation'}>
                  No data to display
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
