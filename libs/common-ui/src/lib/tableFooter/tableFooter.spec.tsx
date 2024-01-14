import { render } from '@testing-library/react';

import TableFooter from './tableFooter';

describe('TableFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableFooter />);
    expect(baseElement).toBeTruthy();
  });
});
