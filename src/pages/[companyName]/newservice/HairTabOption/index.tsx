import React from 'react';
import ServiceCard from 'components/ServiceCard';

import { Service } from 'models/types/service';
import * as S from './styles';

interface HairProps {
  list: Array<Service>;
}

const HairTabOption: React.FC<HairProps> = ({ list }) => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ServiceCard list={list} />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default HairTabOption;
