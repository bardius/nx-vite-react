import { ColumnSortComparator, SortBy, SortByOrder } from '@bardius/common-ui';
import { ascend, clone, descend, filter, find, isEmpty, prop, propEq, sortWith } from 'ramda';

export type ComparatorsConfig = {
  // Custom column comparator
  [key: string]: ColumnSortComparator;
};

// Sort a dataset based on one or multiple comparators
const sortByMultipleComparators = <T>(
  data: T[],
  comparators: ComparatorsConfig,
  sortBy?: SortBy[],
) => {
  if (isEmpty(sortBy)) {
    return data;
  }

  // Aggregate comparators based on sortBy state and column configs
  const sortingComparators: ColumnSortComparator[] = [];

  sortBy?.forEach(sortByConfig => {
    if (comparators[sortByConfig.dataKey]) {
      // Custom comparators
      const customComparator: ColumnSortComparator = (a, b) =>
        comparators[sortByConfig.dataKey](a, b, sortByConfig.order);
      sortingComparators.push(customComparator);
    } else {
      // Default comparators
      sortingComparators.push(
        sortByConfig.order === 'ASC'
          ? ascend(prop(sortByConfig.dataKey))
          : descend(prop(sortByConfig.dataKey)),
      );
    }
  });

  // Aggregate comparators
  const sorter = sortWith(sortingComparators);

  // Return sorted data set
  return sorter(data);
};

// Given a sortBy order, calculate the next toggled value
const getNextSortByOrder = (order: SortByOrder): SortByOrder => {
  if (!order) {
    return 'ASC';
  } else if (order === 'ASC') {
    return 'DESC';
  }

  return undefined;
};

// Calculate the value of the sortBy state after a new sortBy item  is toggled
const getNextSortByState = (dataKey: string, sortByState: SortBy[]): SortBy[] => {
  const nextSortByState = clone(sortByState);
  const existingSortByItem = find<SortBy>(propEq(dataKey, 'dataKey'))(nextSortByState);

  // Update value on existing items or create new one if needed
  if (existingSortByItem) {
    existingSortByItem.order = getNextSortByOrder(existingSortByItem.order);
  } else {
    nextSortByState.push({
      priority: nextSortByState.length,
      dataKey: dataKey,
      order: getNextSortByOrder(undefined),
    });
  }

  // Remove sorting that does not have ASC/DESC order and update the priority of the sorting items
  return filter(item => Boolean(item.order), nextSortByState).map((item, index) => {
    item.priority = index;
    return item;
  });
};

export { sortByMultipleComparators, getNextSortByOrder, getNextSortByState };
