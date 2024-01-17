import { screen, render } from '@testing-library/react';
import { AppHeader, NavigationItem } from './appHeader';
import { BrowserRouter } from 'react-router-dom';

jest.mock('@salt-ds/core', () => ({
  ...jest.requireActual('@salt-ds/core'),
  useResponsiveProp: jest.fn().mockReturnValue(false),
}));

const dummyNavItems: NavigationItem[] = [
  { id: 'home', to: 'home', label: 'Home', reloadDocument: false },
  { id: 'error', to: 'error', label: 'Error', reloadDocument: false },
];

describe('AppHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppHeader />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with navigation', () => {
    render(<AppHeader items={dummyNavItems} />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('desktop-navigation')).toBeTruthy();
  });
});
