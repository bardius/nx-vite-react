import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './tableCell';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TableCell> = {
  component: TableCell,
  title: 'TableCell',
};
export default meta;
type Story = StoryObj<typeof TableCell>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TableCell!/gi)).toBeTruthy();
  },
};
