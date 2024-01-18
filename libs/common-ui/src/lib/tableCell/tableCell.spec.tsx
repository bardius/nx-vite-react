import { render, screen } from '@testing-library/react';
import { TableCell } from './tableCell';

describe('TableCell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableCell data={'Dummy Data'} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render successfully with non string data', () => {
    render(<TableCell data={{}} />);
    expect(screen.getByText('[object Object]')).toBeTruthy();
  });
});
