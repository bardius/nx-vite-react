import { FC, ReactNode } from 'react';
import { Text } from '@salt-ds/core';
import { ErrorBoundary } from 'react-error-boundary';
import { CellRenderer, ErrorLogger } from '../tableCell/tableCell';

import styles from './tableHeader.module.scss';

// Available column header features
export type ColumnHeaderActions = {
  sorting: boolean;
};

export interface ColumnConfig<T = unknown> {
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
}

export type SortByOrder = 'ASC' | 'DESC' | undefined;

export interface SortBy {
  // When multiple sortBy exist, the priority that this sorting will be applied
  priority: number;
  // The property to sort by
  dataKey: string;
  // Sorting order
  order: SortByOrder;
}

export type HeaderRenderer = (title?: string) => ReactNode;

export interface TableHeaderProps {
  // Table column configuration
  config: ColumnConfig[];
  // Sorting configuration
  sortBy: SortBy[];
  // Column sorting value change handler
  onSortByChange?: (sortBy: SortBy[]) => void;
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

const TableHeader: FC<TableHeaderProps> = ({ config, sortBy, onSortByChange }) => {
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
              <div className={'actions'}></div>
              <div className={styles['saltGridHeaderCell-regularSeparator']}></div>
            </ErrorBoundary>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export { TableHeader };
