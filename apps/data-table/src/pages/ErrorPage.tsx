import { useRouteError } from 'react-router-dom';

export interface AppRouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as AppRouteError | undefined;

  return (
    <div id='error-page' data-testid={'error-page'}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error && (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
};

export { ErrorPage };
