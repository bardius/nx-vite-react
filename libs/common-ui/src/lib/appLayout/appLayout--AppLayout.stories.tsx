import type { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from './appLayout';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AppLayout> = {
  component: AppLayout,
  title: 'AppLayout',
};
export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AppLayout!/gi)).toBeTruthy();
  },
};
