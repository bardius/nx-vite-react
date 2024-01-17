import type { Meta, StoryObj } from '@storybook/react';
import { AppError } from './appError';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AppError> = {
  component: AppError,
  title: 'AppError',
};
export default meta;
type Story = StoryObj<typeof AppError>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AppError!/gi)).toBeTruthy();
  },
};
