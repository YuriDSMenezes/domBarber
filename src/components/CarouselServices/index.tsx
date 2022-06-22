import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useGlobal } from 'hooks/Global';

import Button from 'components/Button';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import * as S from './styles';

import '@splidejs/react-splide/css';

interface CarouselProps {
  services: Array<Service>;
  size: 'lg' | 'md' | 'sm';
}

export const CarouselService: React.FC<CarouselProps> = ({
  services,
  size,
}) => {
  const [sItem, setSItem] = useState<number>(2);
  const [active, setActive] = useState<boolean>(false);

  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const [cart, setCart] = useState<Array<{}>>(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const handleClickCard = (service: Service) => {
    const newService = {
      service,
      serviceId: service.id,
    };
    const newCart = [...cart, newService];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
    push({
      pathname: `/[companyName]/chooseprofessional`,
      query: { companyName: company?.app?.url },
    });
  };

  return (
    <Splide
      options={{
        pagination: false,
        slideFocus: true,
        focus: 'center',
        snap: true,
        gap: 20,
        perPage: 5,
        breakpoints: {
          400: {
            perPage: 3,
          },
        },
        type: 'loop',
      }}
    >
      {services?.map((item, index) => (
        <SplideSlide key={index}>
          <S.Item
            size={size}
            srcImage={item.images && item?.images[0]?.url}
            active={active}
            className="item"
            onClick={() => handleClickCard(item)}
          >
            {services ? (
              <>
                <S.BlurContainer
                  srcImage={item.images && item?.images[0]?.url}
                />
                <S.Texts className="showText">
                  <p>{item.description}</p>
                  <span>{` ${item.description}`}</span>
                </S.Texts>
                <S.ButtonContainer className="showButton">
                  <Button smallSize text="Agendar" />
                </S.ButtonContainer>
              </>
            ) : (
              <S.Description>{item.description}</S.Description>
            )}
          </S.Item>
        </SplideSlide>
      ))}
    </Splide>
  );
};
