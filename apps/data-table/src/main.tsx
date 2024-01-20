import './developerTools';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SaltProvider } from '@salt-ds/core';
import { AppRouter } from './router/AppRouter';

import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <SaltProvider mode='dark'>
      <RouterProvider router={AppRouter} />
    </SaltProvider>
  </StrictMode>,
);
