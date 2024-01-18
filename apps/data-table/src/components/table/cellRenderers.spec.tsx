import { render } from '@testing-library/react';
import { priceCellRenderer } from './cellRenderers';

describe('Cell Renderers', () => {
  describe('Price Cell Render', () => {
    it('should render with blue color for positive numbers', () => {
      const { baseElement } = render(priceCellRenderer(1234.56));
      expect(baseElement).toBeTruthy();
      expect(baseElement.querySelector('.text-blue')).toBeTruthy();
    });

    it('should render with red color for negative numbers', () => {
      const { baseElement } = render(priceCellRenderer(-1234.56));
      expect(baseElement).toBeTruthy();
      expect(baseElement.querySelector('.text-red')).toBeTruthy();
    });
  });
});
