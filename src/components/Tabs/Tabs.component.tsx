import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';
import styles from './Tabs.module.scss';
import classNames from 'classnames';

export const TabsComponent: React.FC<TabsProps> = ({
  tabsList,
  defaultTab = tabsList[0].name,
  tabClassName,
  tabpanelClassName,
  tabStyle,
  tabpanelStyle,
}) => {
  const [current, setCurremt] = useState(defaultTab);

  const tabClass = classNames(styles.tabs_container, tabClassName);

  return (
    <>
      <div className={tabClass} style={tabStyle}>
        {tabsList.map((e, i) => (
          <button
            key={e.name}
            role="tab"
            type="button"
            id={`tab-${i + 1}`}
            aria-selected={e.name === current}
            aria-controls={`tabpanel-${i + 1}`}
            onClick={() => setCurremt(e.name)}
          >
            {e.name}
          </button>
        ))}
      </div>
      {tabsList.map((e, i) => (
        <div
          key={e.name}
          role="tabpanel"
          id={`tabpanel-${i + 1}`}
          aria-labelledby={`tab-${i + 1}`}
          hidden={e.name !== current}
          className={tabpanelClassName}
          style={tabpanelStyle}
        >
          {e.value}
        </div>
      ))}
    </>
  );
};
