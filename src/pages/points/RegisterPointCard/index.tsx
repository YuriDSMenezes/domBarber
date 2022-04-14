import React from 'react';

import * as S from './styles';

const RegisterPointCard: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.PointContainer>
          <S.PointValueText>20</S.PointValueText>
          <S.PointsText>Pontos</S.PointsText>
        </S.PointContainer>
        <S.DescriptionContainer>
          <S.ServiceTitle>Corte Simples</S.ServiceTitle>
          <S.ServiceDescription>Corte de Cabelo Simples</S.ServiceDescription>
        </S.DescriptionContainer>
        <S.PercentContainer>
          <S.PercentText>0%</S.PercentText>
        </S.PercentContainer>
      </S.Content>
    </S.Container>
  );
};

export default RegisterPointCard;
