import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import RegisterPointCard from './RegisterPointCard';

import * as S from './styles';

const points: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Pontuação</S.Title>
          <S.AvaliablePointsText>Pontos Disponíveis:</S.AvaliablePointsText>
          <S.AvaliablePointsValue>80 Pontos</S.AvaliablePointsValue>
          <S.PointsHistoryContainer>
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
            <RegisterPointCard />
          </S.PointsHistoryContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default points;
