import { render } from '@testing-library/react';
import { FinancialInstrumentsTable } from '../../../src/components/financialInstrumentsTable/financialInstrumentsTable';

describe('FinancialInstrumentsTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FinancialInstrumentsTable data={[]} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render without data', () => {
    const { getByText } = render(<FinancialInstrumentsTable data={[]} />);
    expect(getByText(/No data to display/gi)).toBeTruthy();
  });

  it('should render with data', () => {
    const dummyData = [
      {
        ticker: 'BETA',
        price: 3150.67,
        assetClass: 'Credit',
      },
    ];

    const { getByTestId } = render(<FinancialInstrumentsTable data={dummyData} />);
    expect(getByTestId(/BETA_cell_ticker/gi)).toBeTruthy();
    expect(getByTestId(/BETA_cell_price/gi)).toBeTruthy();
    expect(getByTestId(/BETA_cell_assetClass/gi)).toBeTruthy();
  });
});
