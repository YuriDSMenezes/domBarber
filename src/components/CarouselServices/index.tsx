import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

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
      { service: item, serviceId: item.id, start: undefined },
    ]);
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        '@domBarber:cart',
        JSON.stringify([...cart, { service: item, serviceId: item.id }]),
      );
    }
    push({
      pathname: `/ps1/chooseprofessional`,
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
        perPage: 4,
        breakpoints: {
          400: {
            perPage: 3,
          },
        },
      }}
    >
      {services?.map((item, index) => (
        <SplideSlide key={index}>
          <S.Item size={size} srcImage={item?.images[0]?.url} active={active}>
            {services ? (
              <>
                <S.BlurContainer srcImage={item.images[0]?.url} />
                <S.Texts className="showText">
                  <p>{item.description}</p>
                  <span>{` ${item.description}`}</span>
                </S.Texts>
                <S.ButtonContainer className="showButton">
                  <Button text="Agendar" />
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
