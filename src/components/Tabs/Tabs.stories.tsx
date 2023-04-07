import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs, TabsProps, TabProps } from '.';

const list: TabProps[] = [
  {
    name: 'Інформація про проект',
    value: 'test value 1'
  },
  {
    name: 'Підбір позицій',
    value: 'test value 2'
  },
  {
    name: 'Комерційна пропозиція',
    value: 'test value 3'
  },
]

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: TabsProps) => (
  <Tabs {...args} />
);

export const tabs = Template.bind({});

tabs.args = {
  tabsList: list,
}