import React from 'react';
import ServiceCard from 'components/ServiceCard';

import * as S from './styles';

const KitsAndCombosTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ServiceCard list={[]} />
        <ServiceCard list={[]} />
        <ServiceCard list={[]} />
        <ServiceCard list={[]} />
        <ServiceCard list={[]} />
        <ServiceCard list={[]} />
        <ServiceCard list={[]} />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default KitsAndCombosTabOption;
