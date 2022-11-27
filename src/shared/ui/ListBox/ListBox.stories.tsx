import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  direction: 'bottom left',
  value: '123',
  items: [
    {
      content: '123123123312123123',
      value: '123',
    },

    {
      content: '123123123312123123',
      value: '123',
    },
    {
      content: '123123123312123123',
      value: '123',
    },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: '123',
  items: [
    {
      content: '123123123312123123',
      value: '123',
    },

    {
      content: '123123123312123123',
      value: '123',
    },
    {
      content: '123123123312123123',
      value: '123',
    },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: '123',
  items: [
    {
      content: '123123123312123123',
      value: '123',
    },

    {
      content: '123123123312123123',
      value: '123',
    },
    {
      content: '123123123312123123',
      value: '123',
    },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  value: '123',
  items: [
    {
      content: '123123123312123123',
      value: '123',
    },

    {
      content: '123123123312123123',
      value: '123',
    },
    {
      content: '123123123312123123',
      value: '123',
    },
  ],
};
