import { render } from '@testing-library/react';
import { RowConfig, RowData, TableRow } from './tableRow';

const dummyRowData: RowData = {
  uniqueDataRowId: 1,
  ticker: 'ALPHA',
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
});
