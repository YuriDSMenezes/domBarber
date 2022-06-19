import { ReactNode, useState } from 'react';

export interface Tab {
  key: string;
  description: string;
  renderComponentMobile: ReactNode;
}

export interface TabsProps {
  tabConfig: Array<Tab>;
  defaultSelectedTab: string;
}

interface TabControllerProps {
  defaultSelectedTab: string;
}

export const useTabsController = ({
  defaultSelectedTab,
}: TabControllerProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);
  const handleSwitchTab = (key: string) => setSelectedTab(key);

  return {
    actions: { handleSwitchTab },
    states: { selectedTab },
  };
};
