import { ErrorInfo, FC, PropsWithChildren } from 'react';
import { BorderItem, BorderLayout, FlexItem, FlexLayout } from '@salt-ds/core';
import { ErrorBoundary } from 'react-error-boundary';
import { AppError } from '../appError/appError';
import { AppHeader, NavigationItem } from '../appHeader/appHeader';
import { AppFooter } from '../appFooter/appFooter';

import styles from './appLayout.module.scss';

export interface AppLayoutProps {
  headerNavItems?: NavigationItem[];
  logger?: (error: Error, info: ErrorInfo) => void;
}

const AppLayout: FC<PropsWithChildren<AppLayoutProps>> = ({ children, headerNavItems, logger }) => {
  return (
    <BorderLayout data-testid={'app-layout'}>
      <BorderItem position='north'>
        <AppHeader items={headerNavItems} />
      </BorderItem>
      <BorderItem position='center'>
        <ErrorBoundary fallbackRender={AppError} onError={logger}>
          <FlexLayout className={styles['container-page']} align='center' justify={'center'}>
            <FlexItem align='center'>{children}</FlexItem>
          </FlexLayout>
        </ErrorBoundary>
      </BorderItem>
      <BorderItem position='south'>
        <AppFooter />
      </BorderItem>
    </BorderLayout>
  );
};

export { AppLayout };
