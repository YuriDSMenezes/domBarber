import React from 'react';
import ServiceCard from '../ServiceCard';

import * as S from './styles';

const HairTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default HairTabOption;
