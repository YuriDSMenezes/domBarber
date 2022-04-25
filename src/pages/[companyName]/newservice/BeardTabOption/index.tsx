import React from 'react';
import ServiceCard from 'components/ServiceCard';

import * as S from './styles';

const BeardTabOption: React.FC = () => {
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

export default BeardTabOption;
