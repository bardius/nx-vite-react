import { ColumnConfig, SortBy, SortByActionOnChange } from '@bardius/common-ui';
import { useCallback, useEffect, useState } from 'react';
import { clone } from 'ramda';
import {
  ComparatorsConfig,
  getNextSortByState,
  sortByMultipleComparators,
} from '../utilities/sorting';

export interface SortingHook<T> {
  // Sorted data set
  sortedData?: T[];
  // SortBy state
  sortBy: SortBy[];
  // Callback to invoke when a sortBy item is toggled
  onSortByChange: SortByActionOnChange;
}

// Hook to provide sorted data, sort by config and change callback
const useDataSorting = <T>(
  data?: readonly T[],
  sortBy?: SortBy[],
  columnsConfig?: ColumnConfig[],
): SortingHook<T> => {
  const [sortedData, setSortedData] = useState<T[]>(clone(data ?? []));
  const [sortByState, setSortByState] = useState<SortBy[]>(sortBy ?? []);

  // Callback to update sort by config value
  const onSortByChange = useCallback(
    (dataKey: string) => {
      setSortByState(getNextSortByState(dataKey, sortByState));
    },
    [sortByState],
  );

  useEffect(() => {
    const comparators: ComparatorsConfig = {};

    columnsConfig?.forEach(config => {
      if (config.sortingComparator) {
        comparators[config.dataKey] = config.sortingComparator;
      }
    });

    const nextSortedData: T[] = sortByMultipleComparators(
      clone(data ?? []),
      comparators,
      sortByState,
    );

    setSortedData(nextSortedData);
  }, [data, sortByState, columnsConfig]);

  return {
    sortedData: sortedData,
    sortBy: sortByState,
    onSortByChange: onSortByChange,
  };
};

export { useDataSorting };
