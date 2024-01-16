import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id='error-page' data-testid={'page'}>
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
