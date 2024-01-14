import { RouteObject } from 'react-router-dom';
import { App } from '../app/App';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'error',
        element: <ErrorPage />,
      },
    ],
  },
];

export { routerConfig };
