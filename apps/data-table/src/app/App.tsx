import { Outlet } from 'react-router-dom';
import { AppLayout } from '@bardius/common-ui';
import { headerNavItems } from '../constants/navigation';
import { errorLogger } from '../services/telemetry';

// Application layout orchestration using outlet to render child route components
const App = () => {
  return (
    <div id='app' data-testid='app'>
      <AppLayout headerNavItems={headerNavItems} logger={errorLogger}>
        <Outlet />
      </AppLayout>
    </div>
  );
};

export { App };
