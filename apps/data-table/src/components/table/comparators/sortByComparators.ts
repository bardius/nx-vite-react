import { SortByOrder } from '@bardius/common-ui';
import { FinancialInstrumentsData } from '../../../hooks/useDummyData';

// Sort order "ASC" for asset class values
const assetClassOrderMapping = ['Equities', 'Macro', 'Credit'];

// Comparator with custom specified ordering for asset classes
const assetClassComparator = (
  a: FinancialInstrumentsData,
  b: FinancialInstrumentsData,
  order: SortByOrder,
): number => {
  if (!order) {
    return 0;
  }

  const weightOfA = assetClassOrderMapping.indexOf(a.assetClass);
  const weightOfB = assetClassOrderMapping.indexOf(b.assetClass);

  if (weightOfA === weightOfB) {
    return 0;
  }

  const sortOrder = order === 'DESC' ? -1 : 1;

  return weightOfA < weightOfB ? -1 * sortOrder : 1 * sortOrder;
};

export { assetClassComparator };
