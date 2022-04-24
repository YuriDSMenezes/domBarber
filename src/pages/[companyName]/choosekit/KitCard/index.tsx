import Button from 'components/Button';
import React from 'react';

import * as S from './styles';

const KitCard: React.FC = () => {
  return (
    <S.Container>
      <S.KitCardTitle>Teste</S.KitCardTitle>
      <S.Content>
        <S.PriceAndPointsContainer>
          <S.PriceText>R$ 19,90</S.PriceText>
          <S.PointsText>20 Pontos</S.PointsText>
        </S.PriceAndPointsContainer>
        <S.DescriptionKit>Escolha a data e hora desse serviço</S.DescriptionKit>
        <S.ActionButtonContainer>
          <Button text="Agendar" smallSize />
        </S.ActionButtonContainer>
      </S.Content>
    </S.Container>
  );
};

export default KitCard;
