import React, { ReactNode, useState } from 'react';

import * as S from './styles';
import { useTabsController } from './tabs.controller';

interface Tab {
  key: string;
  description: string;
  renderComponent: ReactNode;
}

interface TabsProps {
  tabConfig: Array<Tab>;
  defaultSelectedTab: string;
}

const Tabs: React.FC<TabsProps> = ({ tabConfig, defaultSelectedTab }) => {
  const { states, actions } = useTabsController({ defaultSelectedTab });
  return (
    <S.Container>
      <S.TabsContainer>
        {tabConfig.map(tab => (
          <S.TabContainer
            key={tab.key}
            selectedTab={tab.key === states.selectedTab}
            onClick={() => actions.handleSwitchTab(tab.key)}
          >
            <S.TabText>{tab.description}</S.TabText>
          </S.TabContainer>
        ))}
      </S.TabsContainer>
      <S.ContainerTabRenderedComponent>
        {
          tabConfig.filter(tab => tab.key === states.selectedTab)[0]
            .renderComponent
        }
      </S.ContainerTabRenderedComponent>
    </S.Container>
  );
};

export default Tabs;