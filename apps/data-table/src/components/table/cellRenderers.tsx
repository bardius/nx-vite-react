import { CellRenderer } from '@bardius/common-ui';
import { Text } from '@salt-ds/core';

import styles from './cellRenderers.module.scss';

const priceCellRenderer: CellRenderer<number | undefined> = data => {
  const displayedValue =
    typeof data !== 'number'
      ? ''
      : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data);

  const textColorClassName = data && data < 0 ? 'text-red' : 'text-blue';

  return (
    <>
      <Text
        className={`${styles['saltGridBaseCell-valueContainer']} ${styles[textColorClassName]}`}
        title={data?.toString()}>
        {displayedValue}
      </Text>
      <div className={styles['saltGridCell-columnSeparator']}></div>
      <div className={styles['saltGridCell-rowSeparator']}></div>
    </>
  );
};

export { priceCellRenderer };
