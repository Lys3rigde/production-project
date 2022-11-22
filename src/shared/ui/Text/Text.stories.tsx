import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem',
};

export const Error = Template.bind({});
Error.args = {
  title: 'title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem',
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'lorem ipsum lorem ipsum lorem',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'lorem ipsum lorem ipsum lorem',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'lorem ipsum lorem ipsum lorem',
  text: 'lorem ipsum lorem ipsum lorem',
  size: TextSize.L,
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'lorem ipsum lorem ipsum lorem',
  text: 'lorem ipsum lorem ipsum lorem',
  size: TextSize.S,
};
