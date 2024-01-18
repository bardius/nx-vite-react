import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Table',
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      onSortByChange: console.log,
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
        price: -3791.37,
        assetClass: 'Equities',
      },
      {
        uniqueDataRowId: 3,
        ticker: 'GAMMA',
        price: 0,
        assetClass: 'Macro',
      },
      {
        uniqueDataRowId: 4,
        ticker: 'Delta',
        price: null,
        assetClass: 'undefined',
      },
    ],
    sortBy: [{ priority: 0, dataKey: 'ticker', order: 'ASC' }],
  },
  argTypes: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Ticker/gi)).toBeTruthy();
    expect(canvas.findByText(/ALPHA/gi)).toBeTruthy();
  },
};
