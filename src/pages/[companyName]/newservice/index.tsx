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
    state: { services, kits },
  } = NewServiceController();
  const {
    states: { company },
  } = useGlobal();

  const tabs = [
    {
      key: 'Cabelo',
      description: 'Cabelo',
      renderComponentMobile: <BarberShopTabOption list={services} />,
    },
    {
      key: 'Barba',
      description: 'Barba',
      renderComponentMobile: <BeardTabOption list={services} />,
    },
    {
      key: 'Kits/Combo',
      description: 'Kits/Combo',
      renderComponentMobile: <KitsAndCombosTabOption list={kits} />,
    },
  ];

  return (
    <MainLayout>
      {/* <SEO company={company} /> */}
      <S.TitleOut>Escolha um Serviço</S.TitleOut>
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
