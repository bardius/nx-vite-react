import { render } from '@testing-library/react';
import { AppError } from './appError';

describe('AppError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AppError error={{ title: 'Error', message: 'Message' }} resetErrorBoundary={() => {}} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
