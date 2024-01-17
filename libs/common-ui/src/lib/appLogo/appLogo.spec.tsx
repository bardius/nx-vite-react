import { render } from '@testing-library/react';
import { AppLogo } from './appLogo';

describe('AppLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppLogo />);
    expect(baseElement).toBeTruthy();
  });
});
