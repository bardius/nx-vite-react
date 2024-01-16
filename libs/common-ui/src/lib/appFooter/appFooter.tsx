import { FlexItem, FlexLayout, Text } from '@salt-ds/core';
import { FC } from 'react';

import styles from './appFooter.module.scss';

/* eslint-disable-next-line */
export interface AppFooterProps {}

const AppFooter: FC<AppFooterProps> = () => {
  return (
    <FlexLayout
      className={styles['footer-app']}
      justify='space-between'
      gap={3}
      data-testid={'footer-app'}>
      <FlexItem align='center'>
        <Text>Footer</Text>
      </FlexItem>
    </FlexLayout>
  );
};

export { AppFooter };
