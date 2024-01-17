import type { Meta, StoryObj } from '@storybook/react';
import { TableFooter } from './tableFooter';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TableFooter> = {
  component: TableFooter,
  title: 'TableFooter',
};
export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TableFooter!/gi)).toBeTruthy();
  },
};
