import { ErrorInfo, FC, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Text } from '@salt-ds/core';

import styles from './tableCell.module.scss';

export type ErrorLogger = (error: Error, info: ErrorInfo) => void;
export type CellRenderer<T> = (data?: T) => ReactNode;

export interface TableCellProps<T = unknown> {
  // Optional custom renderer for cell value
  cellRenderer?: CellRenderer<T>;
  // Cell data
  data?: T;
  // Option custom error logger
  logger?: ErrorLogger;
  // Unique data test id
  dataTestId?: string;
}

const defaultCellRenderer: CellRenderer<unknown> = (data?: unknown) => {
  const displayedValue = data ? data.toString() : '';
  return (
    <>
      <Text className={styles['saltGridBaseCell-valueContainer']} title={displayedValue}>
        {displayedValue}
      </Text>
      <div className={styles['saltGridCell-columnSeparator']}></div>
      <div className={styles['saltGridCell-rowSeparator']}></div>
    </>
  );
};

// TODO: this could be a common singleton service
const defaultErrorLogger: ErrorLogger = (error, info) => {
  console.error(error, info);
};

const defaultErrorRenderer = () => <Text>error</Text>;

const TableCell: FC<TableCellProps> = ({
  cellRenderer = defaultCellRenderer,
  data,
  dataTestId,
  logger = defaultErrorLogger,
}) => {
  return (
    <td className={styles['saltGridCell']} data-testid={dataTestId}>
      <ErrorBoundary fallbackRender={defaultErrorRenderer} onError={logger}>
        {cellRenderer(data)}
      </ErrorBoundary>
    </td>
  );
};

export { TableCell };
