import { Outlet } from 'react-router-dom';
import { AppLayout } from '@bardius/common-ui';
import { ErrorInfo } from 'react';
import { headerNavItems } from '../constants/navigation';

// TODO: split logger into separate file
const errorLogger = (error: Error, info: ErrorInfo) => {
  // Do something with the error, e.g. log to an external API
};

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
