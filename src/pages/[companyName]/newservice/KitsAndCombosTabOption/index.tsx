import React from 'react';
import ServiceCard from 'components/ServiceCard';

import { Service } from 'models/types/service';
import * as S from './styles';

interface ServiceProps {
  list: Array<Service>;
}

const KitsAndCombosTabOption: React.FC<ServiceProps> = ({ list }) => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ServiceCard list={list} />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default KitsAndCombosTabOption;
