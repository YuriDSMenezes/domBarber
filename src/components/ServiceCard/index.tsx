/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal } from 'hooks/Global';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import React, { ComponentType, useState } from 'react';

import * as S from './styles';

interface ServiceCardProps {
  list: Array<Service>;
  isKit?: boolean;
}

const ServiceCard: ComponentType<ServiceCardProps> = ({ list, isKit }) => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();
  const [hasProfessional, setHasProfessional] = useState(false);
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');
      if (cart) {
        const parsedCart = JSON.parse(cart);
        const lastItemCart = parsedCart[parsedCart.length - 1];
        lastItemCart.professionalId &&
          !lastItemCart.serviceId &&
          setHasProfessional(true);
        return parsedCart;
      }
    }

    return [];
  });

  const handleClickCard = (service: Service) => {
    if (!hasProfessional) {
      const newService = {
        service,
        serviceId: service.id,
      };
      const newCart = [...cart, newService];
      setCart(newCart);
      if (typeof window !== 'undefined') {
        localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
      }
    } else {
      const lastItemCart = cart[cart.length - 1];
      const newLastItemCart = {
        ...lastItemCart,
        service,
        serviceId: service.id,
      };
      cart.pop();
      const newCart = [...cart, newLastItemCart];
      if (typeof window !== 'undefined') {
        localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
      }
    }

    if (isKit) {
      push({
        pathname: `/[companyName]/choosekit`,
        query: { companyName: company?.app?.url },
      });
    } else {
      push(
        hasProfessional
          ? {
              pathname: `/[companyName]/schedule`,
              query: { companyName: company?.app?.url },
            }
          : {
              pathname: `/[companyName]/chooseprofessional`,
              query: { companyName: company?.app?.url },
            },
      );
    }
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
            <S.AddressText>São Miguel, São Paulo Rua 22</S.AddressText>
            <S.TimeAndPointsText>{`Tempo: ${item.runtime} min  | Acumule ${item.pointsGenerated} pontos`}</S.TimeAndPointsText>
          </S.InformationContainer>
        </S.Container>
      ))}
    </>
  );
};

export default ServiceCard;
