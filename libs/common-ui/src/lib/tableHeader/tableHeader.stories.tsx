import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './tableHeader';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TableHeader> = {
  component: TableHeader,
  title: 'TableHeader',
};
export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TableHeader!/gi)).toBeTruthy();
  },
};
