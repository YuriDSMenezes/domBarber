import Button from 'components/Button';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as S from './styles';

interface CarouselProps {
  services: Array<Service>;
  size: 'lg' | 'md' | 'sm';
}

export const CarouselService: React.FC<CarouselProps> = ({
  services,
  size,
}) => {
  const [sItem, setSItem] = useState<number>(2);

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
    <S.Container>
      {services?.map((item, index) => {
        return (
          <S.Content
            key={index}
            onMouseEnter={() => setSItem(index)}
            onClick={() => handleClickCard(item)}
          >
            <S.Item
              size={size}
              srcImage={item?.images[0]?.url}
              active={sItem === index}
            >
              {services ? (
                <>
                  <S.BlurContainer srcImage={item.images[0]?.url} />
                  {sItem === index && (
                    <>
                      <S.Texts className={sItem === index ? 'showText' : ''}>
                        <p>{item.description}</p>
                        <span>{` ${item.description}`}</span>
                      </S.Texts>
                      <S.ButtonContainer
                        className={sItem === index ? 'showButton' : ''}
                      >
                        <Button text="Agendar" />
                      </S.ButtonContainer>
                    </>
                  )}
                </>
              ) : (
                <S.Description>{item.description}</S.Description>
              )}
            </S.Item>
          </S.Content>
        );
      })}
    </S.Container>
  );
};
