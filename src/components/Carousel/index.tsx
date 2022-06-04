import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Button from 'components/Button';
import * as S from './styles';

interface CarouselProps {
  items: Array<{
    image?: string;
    title: string;
    description?: string;
  }>;
  size: 'lg' | 'md' | 'sm';
  services?: boolean;
}

export const Carousel = ({ items, size, services }: CarouselProps) => {
  return (
    <Splide options={{ perPage: 3, pagination: false, slideFocus: true }}>
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <S.Item
            size={size}
            key={index}
            srcImage={item?.image}
            active={index === 2}
          >
            {services ? (
              <>
                <S.BlurContainer />
                {index === 2 && (
                  <S.Texts>
                    <p>{item.title}</p>
                    <span>{` ${item.description}`}</span>
                  </S.Texts>
                )}
                {index === 2 && (
                  <S.ButtonContainer>
                    <Button text="Agendar" />
                  </S.ButtonContainer>
                )}
              </>
            ) : (
              <S.Description>{item.title}</S.Description>
            )}
          </S.Item>
        </SplideSlide>
      ))}
    </Splide>
  );
};
