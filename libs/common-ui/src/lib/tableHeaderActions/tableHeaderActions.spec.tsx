import { render } from '@testing-library/react';
import { ColumnActionsConfig, TableHeaderActions } from './tableHeaderActions';
import { ColumnConfig } from '../tableHeader/tableHeader';

const dummyConfig: ColumnConfig = {
  dataKey: 'ticker',
  title: 'Ticker',
};
const dummyActionsConfig: ColumnActionsConfig = {
  sorting: {
    callback: jest.fn,
    values: [{ priority: 0, dataKey: 'ticker', order: 'ASC' }],
  },
};

describe('TableHeaderActions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TableHeaderActions columnConfig={dummyConfig} actionsConfig={dummyActionsConfig} />,
    );
    expect(baseElement).toBeTruthy();
  });
});
