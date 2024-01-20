import { FC, memo, ReactNode, useMemo } from 'react';
import { Text } from '@salt-ds/core';
import { ErrorBoundary } from 'react-error-boundary';
import { CellRenderer, ErrorLogger } from '../tableCell/tableCell';
import {
  ColumnActionsConfig,
  ColumnHeaderActions,
  SortBy,
  SortByActionOnChange,
  SortByOrder,
  TableHeaderActions,
} from '../tableHeaderActions/tableHeaderActions';

import styles from './tableHeader.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ColumnSortComparator<T = any> = (a: T, b: T, order?: SortByOrder) => number;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ColumnConfig<T = any> {
  // Unique key for retrieving value from dataset
  dataKey: string;
  // Title to display in column head
  title?: string;
  // Component to render within table cell. Default is Text component.
  cellRenderer?: CellRenderer<T>;
  // Component to render the table column header. Default is TableHeaderCell component.
  headerCellRenderer?: HeaderRenderer;
  // Enable/Disable column header features
  actions?: ColumnHeaderActions;
  // Error Boundary logger
  logger?: ErrorLogger;
  // Custom comparator method to be used while sorting by this column data
  sortingComparator?: ColumnSortComparator;
}

export type HeaderRenderer = (title?: string) => ReactNode;

export interface TableHeaderProps {
  // Table column configuration
  config: ColumnConfig[];
  // Sorting configuration
  sortBy?: SortBy[];
  // Column sorting value change handler
  onSortByChange: SortByActionOnChange;
}

const defaultHeaderRenderer: HeaderRenderer = (title?) => {
  return (
    <Text className={styles['saltTableHeaderCell-valueContainer']} title={title}>
      {title}
    </Text>
  );
};

// TODO: this could be a common singleton service
const defaultErrorLogger: ErrorLogger = (error, info) => {
  console.error(error, info);
};

const defaultErrorRenderer = () => <Text>error</Text>;

const TableHeader: FC<TableHeaderProps> = memo(({ config, sortBy, onSortByChange }) => {
  const actionsConfig = useMemo(
    (): ColumnActionsConfig => ({
      sorting: {
        callback: onSortByChange,
        values: sortBy ?? [],
      },
    }),
    [onSortByChange, sortBy],
  );

  return (
    <thead>
      <tr className={styles['saltGridHeaderRow']}>
        {config.map(column => (
          <th className={styles['saltGridHeaderCell']} key={`column_header_${column.dataKey}`}>
            <ErrorBoundary
              fallbackRender={defaultErrorRenderer}
              onError={column.logger ?? defaultErrorLogger}>
              {column.headerCellRenderer
                ? column.headerCellRenderer(column.title)
                : defaultHeaderRenderer(column.title)}
              <TableHeaderActions actionsConfig={actionsConfig} columnConfig={column} />
              <div className={styles['saltGridHeaderCell-regularSeparator']}></div>
            </ErrorBoundary>
          </th>
        ))}
      </tr>
    </thead>
  );
});

export { TableHeader };
