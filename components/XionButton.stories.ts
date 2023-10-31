import type { Meta, StoryObj } from '@storybook/react';

import XionButton from './XionButton';
const meta = {
  title: 'Example/XionButton',
  component: XionButton,

  tags: ['autodocs'],
} satisfies Meta<typeof XionButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '안녕하세요',
  },
};
export const Default: Story = {
  args: {
    variant: 'default',
    children: '안녕하세요',
  },
};
