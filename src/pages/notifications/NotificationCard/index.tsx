import React from 'react';

import * as S from './styles';

const NotificationCard: React.FC = () => {
  return (
    <S.Container>
      <S.NotificationImgContainer>
        <img
          src="https://a-static.mlcdn.com.br/618x463/kit-aneethun-barber-barba-cabelo-e-bigode-3-produtos-aneethun-profissional/mixlu/10438344896/d88046b428eadf4c8e8848795e8e701f.jpg"
          alt="Shampoo"
        />
      </S.NotificationImgContainer>
      <S.NotificationInformationContainer>
        <S.NotificationTitle>Fim de Ano</S.NotificationTitle>
        <S.NotificationDescription>
          Promoção Fim de ano, faça seu corte no período 20/12 a 25/12 e ganhe
          10% de desconto
        </S.NotificationDescription>
        <S.NotificationObs>Valida até 25 de dezembro de 2021</S.NotificationObs>
      </S.NotificationInformationContainer>
    </S.Container>
  );
};

export default NotificationCard;
