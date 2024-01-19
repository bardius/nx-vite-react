import { render } from '@testing-library/react';
import { BrowserRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import { App } from '../../src/app/App';
import { routerConfig } from '../../src/router/routerConfig';

const mockAppRouter = createMemoryRouter(routerConfig, {
  initialEntries: [''],
});

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />, { wrapper: BrowserRouter });
    expect(baseElement).toBeTruthy();
  });

  it('should have a page title', () => {
    const { getByText } = render(<RouterProvider router={mockAppRouter} />);
    expect(getByText(/Asset Class Breakdown/gi)).toBeTruthy();
  });
});
