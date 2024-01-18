import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Table',
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default = {
  args: {
    config: {
      columns: [
        {
          dataKey: 'ticker',
          title: 'Ticker',
          actions: {
            sorting: true,
          },
        },
        {
          dataKey: 'price',
          title: 'Price',
          actions: {
            sorting: true,
          },
        },
        {
          dataKey: 'assetClass',
          title: 'Asset Class',
          actions: {
            sorting: true,
          },
        },
      ],
    },
    data: [
      {
        uniqueDataRowId: 1,
        ticker: 'ALPHA',
        price: 3150.67,
        assetClass: 'Credit',
      },
      {
        uniqueDataRowId: 2,
        ticker: 'BETA',
        price: 3791.37,
        assetClass: 'Equities',
      },
    ],
    sortBy: [{ priority: 0, dataKey: 'ticker', order: 'ASC' }],
  },
  argTypes: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ALPHA/gi)).toBeTruthy();
    expect(canvas.getByText(/Ticker/gi)).toBeTruthy();
  },
};