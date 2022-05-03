import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import React, { ComponentType, useState } from 'react';

import * as S from './styles';

interface ServiceCardProps {
  list: Array<Service>;
}

const ServiceCard: ComponentType<ServiceCardProps> = ({ list }) => {
  const { push } = useRouter();
  const [cart, setCart] = useState<Array<{}>>(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const handleClickCard = (item: Service) => {
    setCart((oldState: any) => [
      ...oldState,
      { service: item, serviceId: item.id },
    ]);
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        '@domBarber:cart',
        JSON.stringify([...cart, { service: item, serviceId: item.id }]),
      );
    }
    push({
      pathname: `/ps1/professionals`,
    });
  };

  return (
    <>
      {list.map((item, index) => (
        <S.Container key={index} onClick={() => handleClickCard(item)}>
          <S.ImgContainer>
            <img
              src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg?size=626&ext=jpg&ga=GA1.2.1657761803.1635638400"
              alt="Imagem do Serviço"
            />
          </S.ImgContainer>
          <S.InformationContainer>
            <S.TitleAndPriceText>
              <S.ServiceTitle>{item.description}</S.ServiceTitle>
              <S.ServicePrice>{item.price}</S.ServicePrice>
            </S.TitleAndPriceText>
            <S.AddressText>
              São Miguel, São PauloRua 22, zona sulPauloRua 22, zona sul
            </S.AddressText>
            <S.TimeAndPointsText>{`Tempo: ${item.runtime} min  | Acumule ${item.pointsGenerated} pontos`}</S.TimeAndPointsText>
          </S.InformationContainer>
        </S.Container>
      ))}
    </>
  );
};

export default ServiceCard;
