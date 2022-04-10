import React from 'react';
import ServiceCard from '../ServiceCard';

import * as S from './styles';

const BeardTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ServiceCard title="Barba Simples" />
        <ServiceCard title="Barba Desenhada" />
        <ServiceCard title="Aparar Barba" />
        <ServiceCard title="Hidratar Barba" />
        <ServiceCard title="Lavar Barba" />
        <ServiceCard title="Lavar Barba" />
        <ServiceCard title="Lavar Barba" />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default BeardTabOption;
