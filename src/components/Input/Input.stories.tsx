
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input, InputProps, InputVariantEnum } from '.';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const input = Template.bind({});

input.args = {
  type: InputVariantEnum.text,
  placeholder: 'Some text',
};
