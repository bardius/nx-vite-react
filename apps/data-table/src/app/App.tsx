import { Outlet } from 'react-router-dom';
import { AppLayout } from '@bardius/common-ui';
import { headerNavItems } from '../constants/navigation';

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
