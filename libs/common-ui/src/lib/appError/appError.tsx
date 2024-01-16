import { FC } from 'react';
import { AriaAnnouncerProvider, Card } from '@salt-ds/core';
import { ContentStatus } from '@salt-ds/lab';
import { FallbackProps } from 'react-error-boundary/dist/declarations/src/types';

import styles from './appError.module.scss';

const AppError: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <AriaAnnouncerProvider>
      <Card className={styles['saltCard-error']} data-testid={'error-app'}>
        <ContentStatus
          status='error'
          title={`There's been a system error${error.title ? ': ' + error.title : ''}`}
          message={`${error.message}, It should be temporary, so please try again.`}
        />
      </Card>
    </AriaAnnouncerProvider>
  );
};

export { AppError };
