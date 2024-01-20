import { render } from '@testing-library/react';
import { RowConfig, RowData, TableRow } from './tableRow';

const dummyRowData: RowData = {
  uniqueDataRowId: 1,
  ticker: 'BETA',
  price: 3150.67,
  assetClass: 'Credit',
};

const dummyRowConfig: RowConfig = {
  ticker: {},
  price: {},
  assetClass: {},
};

describe('TableRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TableRow rowData={dummyRowData} rowConfig={dummyRowConfig} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render cells as per provided config', () => {
    const { getByTestId } = render(<TableRow rowData={dummyRowData} rowConfig={dummyRowConfig} />);
    expect(getByTestId(/1_cell_ticker/gi)).toBeTruthy();
    expect(getByTestId(/1_cell_price/gi)).toBeTruthy();
    expect(getByTestId(/1_cell_assetClass/gi)).toBeTruthy();
  });
});
