import { Outlet } from 'react-router-dom';
import { AppLayout } from '@bardius/common-ui';
import { headerNavItems } from '../constants/navigation';
import { errorLogger } from '../services/telemetry';
import { DummyDataProvider } from '../contexts/DummyDataProvider';

// Application layout orchestration using outlet to render child route components
const App = () => {
  return (
    <div id='app' data-testid='app'>
      <AppLayout headerNavItems={headerNavItems} logger={errorLogger}>
        <DummyDataProvider>
          <Outlet />
        </DummyDataProvider>
      </AppLayout>
    </div>
  );
};

export { App };
