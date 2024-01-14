import { render } from '@testing-library/react';

import TableRow from './tableRow';

describe('TableRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableRow />);
    expect(baseElement).toBeTruthy();
  });
});
