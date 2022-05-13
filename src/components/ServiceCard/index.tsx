/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import React, { ComponentType, useState } from 'react';

import * as S from './styles';

interface ServiceCardProps {
  list: Array<Service>;
}

const ServiceCard: ComponentType<ServiceCardProps> = ({ list }) => {
  const { push } = useRouter();
  const [hasProfessional, setHasProfessional] = useState(false);
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');
      if (cart) {
        const parsedCart = JSON.parse(cart);
        const lastItemCart = parsedCart[parsedCart.length - 1];
        lastItemCart.professionalId && setHasProfessional(true);
        return parsedCart;
      }
    }

    return [];
  });

  const handleClickCard = (service: Service) => {
    const lastItem = cart.pop();
    const newService = {
      ...lastItem,
      service,
      serviceId: service.id,
    };
    const newCart = [...cart, newService];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
    push(
      hasProfessional
        ? {
            pathname: `/ps1/schedule`,
          }
        : {
            pathname: `/ps1/chooseprofessional`,
          },
    );
  };

  return (
    <>
      {list?.map((item, index) => (
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
