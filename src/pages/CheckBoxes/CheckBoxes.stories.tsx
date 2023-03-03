import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBoxesPage } from './CheckBoxes.page';

export default {
  title: 'Pages',
  component: CheckBoxesPage,
} as ComponentMeta<typeof CheckBoxesPage>;

const Template: ComponentStory<typeof CheckBoxesPage> = (args) => <CheckBoxesPage />;

export const CheckBoxes = Template.bind({});