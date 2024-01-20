import { RouteObject } from 'react-router-dom';
import { App } from '../app/App';
import { FinancialInstrumentsPage } from '../pages/FinancialInstrumentsPage';
import { ErrorPage } from '../pages/ErrorPage';

//
const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <FinancialInstrumentsPage />,
      },
      {
        path: 'home',
        element: <FinancialInstrumentsPage />,
      },
      {
        path: 'error',
        element: <ErrorPage />,
      },
    ],
  },
];

export { routerConfig };
