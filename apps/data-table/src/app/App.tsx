import { Outlet } from 'react-router-dom';
import { AppLayout } from '@bardius/common-ui';
import { headerNavItems } from '../constants/navigation';

import styles from './app.module.scss';

const App = () => {
  return (
    <div id='app' data-testid='app'>
      <AppLayout headerNavItems={headerNavItems}>
        <Outlet />
      </AppLayout>
    </div>
  );
};

export { App };
