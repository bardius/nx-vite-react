import { render } from '@testing-library/react';
import { assetClassRowRenderer } from './rowRenderers';

describe('Row Renderers', () => {
  describe('Asset Class Color Row Render', () => {
    const dummyRowConfig = {
      assetClass: {},
    };

    it('should render with white color for Macro asset class', () => {
      const { baseElement } = render(
        <table>
          <tr>{assetClassRowRenderer(dummyRowConfig, { assetClass: 'Macro' })}</tr>
        </table>,
      );
      expect(baseElement).toBeTruthy();
      expect(baseElement.querySelector('.bgColor-white')).toBeTruthy();
    });

    it('should render with blue color for Equities asset class', () => {
      const { baseElement } = render(
        <table>
          <tr>{assetClassRowRenderer(dummyRowConfig, { assetClass: 'Equities' })}</tr>
        </table>,
      );
      expect(baseElement).toBeTruthy();
      expect(baseElement.querySelector('.bgColor-blue')).toBeTruthy();
    });

    it('should render with green color for Credit asset class', () => {
      const { baseElement } = render(
        <table>
          <tr>{assetClassRowRenderer(dummyRowConfig, { assetClass: 'Credit' })}</tr>
        </table>,
      );
      expect(baseElement).toBeTruthy();
      expect(baseElement.querySelector('.bgColor-green')).toBeTruthy();
    });
  });
});
