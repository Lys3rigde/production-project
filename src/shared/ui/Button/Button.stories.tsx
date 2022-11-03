import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Button, { ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  theme: ButtonTheme.CLEAR,
  children: 'Text',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: 'Text',
  disabled: true,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  theme: ButtonTheme.CLEAR_INVERTED,
  children: 'Text',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Text',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Text',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Text',
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  theme: ButtonTheme.OUTLINE,
  children: 'Text',
  size: ButtonSize.XL,
};

export const Background = Template.bind({});
Background.args = {
  theme: ButtonTheme.BACKGROUND,
  children: 'Text',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  children: 'Text',
};

export const Square = Template.bind({});
Square.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>',
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>',
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  children: '>',
  size: ButtonSize.XL,
};
