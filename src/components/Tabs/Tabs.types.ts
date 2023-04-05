export type TabsProps = {
  tabsList: TabProps[];
  defaultTab?: TabProps;
  tabClassName?: string;
  tabpanelClassName?: string;
  tabStyle?: React.CSSProperties;
  tabpanelStyle?: React.CSSProperties;
}

export type TabProps = {
  name: string;
  value: React.ReactNode;
}