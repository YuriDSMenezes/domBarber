import Tabs from 'components/Tabs';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { PaginatedItems } from 'components/Pagination';
import SEO from 'components/SEO';
import { useGlobal } from 'hooks/Global';
import BeardTabOption from './BeardTabOption';
import HairTabOption from './HairTabOption';
import KitsAndCombosTabOption from './KitsAndCombosTabOption';

import * as S from './styles';
import BarberShopTabOption from '../products/BarberShopTabOption';
import { NewServiceController } from './newservice.controller';

const newservice: React.FC = () => {
  const {
    state: { services },
  } = NewServiceController();
  const {
    states: { company },
  } = useGlobal();

  const tabs = [
    {
      key: 'Cabelo',
      description: 'Cabelo',
      renderComponentDesktop: (
        <PaginatedItems
          itemsPerPage={5}
          items={services}
          component={HairTabOption}
        />
      ),
      renderComponentMobile: <BarberShopTabOption list={services} />,
    },
    {
      key: 'Barba',
      description: 'Barba',
      renderComponentDesktop: (
        <PaginatedItems
          itemsPerPage={5}
          items={services}
          component={HairTabOption}
        />
      ),
      renderComponentMobile: <BeardTabOption list={services} />,
    },
    {
      key: 'Kits/Combo',
      description: 'Kits/Combo',
      renderComponentDesktop: (
        <PaginatedItems
          itemsPerPage={5}
          items={services}
          component={HairTabOption}
        />
      ),
      renderComponentMobile: <KitsAndCombosTabOption list={services} />,
    },
  ];

  return (
    <MainLayout>
      <SEO company={company} />
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
