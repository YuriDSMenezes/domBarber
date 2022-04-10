import React from 'react';

import * as S from './styles';

interface ServiceCardProps {
  title?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title = 'Corte Simples',
}) => {
  return (
    <S.Container>
      <S.ImgContainer>
        <img
          src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg?size=626&ext=jpg&ga=GA1.2.1657761803.1635638400"
          alt="Imagem do Serviço"
        />
      </S.ImgContainer>
      <S.InformationContainer>
        <S.TitleAndPriceText>
          <S.ServiceTitle>{title}</S.ServiceTitle>
          <S.ServicePrice>19,90</S.ServicePrice>
        </S.TitleAndPriceText>
        <S.AddressText>
          São Miguel, São PauloRua 22, zona sulPauloRua 22, zona sul
        </S.AddressText>
        <S.TimeAndPointsText>{`Tempo: 20 min  | Acumule 20 pontos`}</S.TimeAndPointsText>
      </S.InformationContainer>
    </S.Container>
  );
};

export default ServiceCard;
