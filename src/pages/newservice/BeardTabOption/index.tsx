import React from 'react';
import ProsuctOrServiceCard from '../../../components/ProsuctOrServiceCard';

import * as S from './styles';

const BeardTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ProsuctOrServiceCard title="Barba Simples" />
        <ProsuctOrServiceCard title="Barba Desenhada" />
        <ProsuctOrServiceCard title="Aparar Barba" />
        <ProsuctOrServiceCard title="Hidratar Barba" />
        <ProsuctOrServiceCard title="Lavar Barba" />
        <ProsuctOrServiceCard title="Lavar Barba" />
        <ProsuctOrServiceCard title="Lavar Barba" />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default BeardTabOption;
