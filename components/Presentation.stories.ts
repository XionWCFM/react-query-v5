import type { Meta, StoryObj } from '@storybook/react';
import Presentation from './Presentation';
const meta = {
  title: 'Example/Presentation',
  component: Presentation,
  tags: ['autodocs'],
} satisfies Meta<typeof Presentation>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: '안녕하세요',
  },
};
