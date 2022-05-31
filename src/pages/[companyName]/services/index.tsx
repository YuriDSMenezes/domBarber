import React from 'react';
import { useRouter } from 'next/router';
import { Service } from 'models/types/service';
import MainLayout from 'layouts/MainLayout';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import ServiceCard from './serviceCard';
import * as S from './styles';

interface ServiceProps {
  list: Array<Service>;
}

const Services: React.FC<ServiceProps> = () => {
  const {
    states: { services },
  } = useGlobal();

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Lista de Serviços</S.Title>
          <div style={{ display: 'block' }}>
            <ServiceCard list={services} />
          </div>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default Services;
