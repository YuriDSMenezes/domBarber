import { useState } from 'react';

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
