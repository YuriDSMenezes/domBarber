import React from 'react';
import ProsuctOrServiceCard from '../../../components/ProsuctOrServiceCard';

import * as S from './styles';

const KitsAndCombosTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ServicesContainer>
        <ProsuctOrServiceCard title="Cabelo e Barba" />
        <ProsuctOrServiceCard title="Cabelo e Barba" />
        <ProsuctOrServiceCard title="Cabelo e Barba" />
        <ProsuctOrServiceCard title="Cabelo e Barba" />
        <ProsuctOrServiceCard title="Cabelo e Barba" />
        <ProsuctOrServiceCard title="Cabelo e Barba" />
        <ProsuctOrServiceCard title="Cabelo e Barba" />
      </S.ServicesContainer>
    </S.Container>
  );
};

export default KitsAndCombosTabOption;
