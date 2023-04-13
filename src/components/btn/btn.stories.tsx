import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonTwo } from './btn';

export default {
  args: {
    children: 'Submit',
    onClick: () => alert(),
  },
  component: ButtonTwo,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'ButtonTwo',
} as ComponentMeta<typeof ButtonTwo>;

const Template: ComponentStory<typeof ButtonTwo> = (arg) => (
  <ButtonTwo {...arg} />
);

export const primary = Template.bind({});

primary.args = {
  block: false,
  size: 'md',
  variant: 'primary',
};

export const Secondary = Template.bind({});
primary.args = {
  block: true,
  size: 'md',
  variant: 'secondary',
};
