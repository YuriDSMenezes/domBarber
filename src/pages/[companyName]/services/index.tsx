import React from 'react';
import { Service } from 'models/types/service';
import MainLayout from 'layouts/MainLayout';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import Tabs from 'components/Tabs';
import ServiceCard from './serviceCard';
import * as S from './styles';
import KitsAndCombosTabOption from '../newservice/KitsAndCombosTabOption';

interface ServiceProps {
  list: Array<Service>;
}

const Services: React.FC<ServiceProps> = () => {
  const {
    states: { services, kits },
  } = useGlobal();

  const tabs = [
    {
      key: 'Serviços',
      description: 'Serviços',
      renderComponentMobile: <ServiceCard list={services} />,
    },
    {
      key: 'Kits/Combo',
      description: 'Kits/Combo',
      renderComponentMobile: <KitsAndCombosTabOption list={kits} />,
    },
  ];

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Lista de Serviços</S.Title>
          <div style={{ display: 'block', overflowY: 'scroll' }}>
            <Tabs tabConfig={tabs} defaultSelectedTab="Serviços" />
          </div>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default Services;
