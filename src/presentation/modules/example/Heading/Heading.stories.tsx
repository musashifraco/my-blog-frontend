// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Heading',
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

//👇 Throws a type error it the args don't match the component props

export const Light: Story = {
  args: {
    children: 'Light Theme'
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};


export const Dark: Story = {
  args: {
    children: 'Dark Theme',
    colorDark: false
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
