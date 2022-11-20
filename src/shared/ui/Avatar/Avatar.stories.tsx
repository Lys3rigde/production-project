import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from 'shared/ui/Avatar/Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: 'https://www.w3schools.com/howto/img_avatar.png',
};

export const Small = Template.bind({});
Small.args = {
  size: 30,
  src: 'https://www.w3schools.com/howto/img_avatar.png',
};
