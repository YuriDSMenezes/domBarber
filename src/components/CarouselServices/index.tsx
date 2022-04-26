import Button from 'components/Button';
import { useState } from 'react';
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

export const CarouselService = ({ items, size, services }: CarouselProps) => {
  const [sItem, setSItem] = useState<number>(2);
  return (
    <S.Container>
      {items.map((item, index) => {
        return (
          <S.Content key={index} onMouseEnter={() => setSItem(index)}>
            <S.Item size={size} srcImage={item?.image} active={sItem === index}>
              {services ? (
                <>
                  <S.BlurContainer srcImage={item.image} />
                  {sItem === index && (
                    <>
                      <S.Texts className={sItem === index ? 'showText' : ''}>
                        <p>{item.title}</p>
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
                <S.Description>{item.title}</S.Description>
              )}
            </S.Item>
          </S.Content>
        );
      })}
    </S.Container>
  );
};
