import { Outlet } from 'react-router-dom';
import { AppLayout } from '@bardius/common-ui';
import { ErrorInfo } from 'react';
import { headerNavItems } from '../constants/navigation';

// TODO: split logger into separate file
const errorLogger = (error: Error, info: ErrorInfo) => {
  // Do something with the error, e.g. log to an external API
  console.error(error);
};

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
