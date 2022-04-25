import Tabs from 'components/Tabs';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { PaginatedItems } from 'components/Pagination';
import { appointments } from '../../../../_mocks/appointments';
import BeardTabOption from './BeardTabOption';
import HairTabOption from './HairTabOption';
import KitsAndCombosTabOption from './KitsAndCombosTabOption';

import * as S from './styles';

const newservice: React.FC = () => {
  const tabs = [
    {
      key: 'Cabelo',
      description: 'Cabelo',
      renderComponent: (
        <PaginatedItems
          itemsPerPage={5}
          items={appointments}
          component={HairTabOption}
        />
      ),
    },
    {
      key: 'Barba',
      description: 'Barba',
      renderComponent: <BeardTabOption />,
    },
    {
      key: 'Kits/Combo',
      description: 'Kits/Combo',
      renderComponent: <KitsAndCombosTabOption />,
    },
  ];

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Escolha um Serviço</S.Title>
          <Tabs tabConfig={tabs} defaultSelectedTab="Cabelo" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default newservice;
