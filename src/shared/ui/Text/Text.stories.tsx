import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

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

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'title lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'lorem ipsum lorem ipsum lorem',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'title lorem ipsum',
  text: 'lorem ipsum lorem ipsum lorem',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'title lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'lorem ipsum lorem ipsum lorem',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
