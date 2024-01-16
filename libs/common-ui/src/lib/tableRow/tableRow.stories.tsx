import type { Meta, StoryObj } from '@storybook/react';
import { TableRow } from './tableRow';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TableRow> = {
  component: TableRow,
  title: 'TableRow',
};
export default meta;
type Story = StoryObj<typeof TableRow>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TableRow!/gi)).toBeTruthy();
  },
};
