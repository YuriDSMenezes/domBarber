import React from 'react';
import ProsuctOrServiceCard from '../../../components/ProsuctOrServiceCard';

import * as S from './styles';

const HairTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ProsuctOrServiceCard />
        <ProsuctOrServiceCard />
        <ProsuctOrServiceCard />
        <ProsuctOrServiceCard />
        <ProsuctOrServiceCard />
        <ProsuctOrServiceCard />
        <ProsuctOrServiceCard />
        <ProsuctOrServiceCard />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default HairTabOption;
