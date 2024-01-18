import { FC, ReactNode } from 'react';
import { find, propEq } from 'ramda';
import { SortableAlphaIcon, SortAscendIcon, SortDescendIcon } from '@salt-ds/icons';
import { Button } from '@salt-ds/core';
import { ColumnConfig } from '../tableHeader/tableHeader';

import styles from './tableHeaderActions.module.scss';

// Available column header features
export type ColumnHeaderActions = {
  sorting: boolean;
};

export type SortByActionOnChange = undefined | ((sortBy: SortBy) => void);

// Configurations for the header action buttons
export type ColumnActionsConfig = {
  sorting: {
    callback: SortByActionOnChange;
    values: SortBy[];
  };
};

export interface TableHeaderActionsProps {
  columnConfig: ColumnConfig;
  actionsConfig: ColumnActionsConfig;
}

// Possible sortBy order values
export type SortByOrder = 'ASC' | 'DESC' | undefined;

export interface SortBy {
  // When multiple sortBy exist, the priority that this sorting will be applied
  priority: number;
  // The property to sort by
  dataKey: string;
  // Sorting order
  order: SortByOrder;
}

// Given a sortBy order, calculate the next toggled value
const getNextSortByOrder = (order: SortByOrder): SortByOrder => {
  if (!order) {
    return 'ASC';
  } else if (order === 'ASC') {
    return 'DESC';
  }

  return undefined;
};

// Given a sortBy order get the desired Icon
const getSortingIcon = (order: SortByOrder): ReactNode => {
  switch (order) {
    case 'ASC':
      return <SortAscendIcon />;
    case 'DESC':
      return <SortDescendIcon />;
    default:
      return <SortableAlphaIcon />;
  }
};

const TableHeaderActions: FC<TableHeaderActionsProps> = ({ columnConfig, actionsConfig }) => {
  if (!columnConfig.actions) {
    return null;
  }

  const columnSortOrder = find(propEq(columnConfig.dataKey, 'dataKey'))(
    actionsConfig.sorting.values,
  ) as SortBy | undefined;
  const sortingCallback = () => {
    const nextOrder = getNextSortByOrder(columnSortOrder?.order);

    actionsConfig.sorting.callback &&
      actionsConfig.sorting.callback({
        priority: columnSortOrder?.priority ?? 0,
        dataKey: columnConfig.dataKey,
        order: nextOrder,
      });
  };

  const shouldShowSorting =
    columnConfig.actions?.sorting && typeof actionsConfig.sorting.callback === 'function';

  return (
    <div className={styles['saltGridHeaderCell-actions']}>
      {shouldShowSorting && (
        <Button variant='secondary' onClick={sortingCallback} title={'Sort Column'}>
          {getSortingIcon(columnSortOrder?.order)}
        </Button>
      )}
    </div>
  );
};

export { TableHeaderActions };
