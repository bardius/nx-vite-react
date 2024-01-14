import { render } from '@testing-library/react';

import TableCell from './tableCell';

describe('TableCell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableCell />);
    expect(baseElement).toBeTruthy();
  });
});
