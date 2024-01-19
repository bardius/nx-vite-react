import { SortByOrder } from '@bardius/common-ui';
import { AssetClassData } from '../../../hooks/useDummyData';

const assetClassOrderMapping = ['Equities', 'Macro', 'Credit'];

const assetClassComparator = (a: AssetClassData, b: AssetClassData, order: SortByOrder): number => {
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
