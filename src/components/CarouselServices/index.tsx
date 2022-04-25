import Button from 'components/Button';
import { useState } from 'react';
import * as S from './styles';

interface CarouselProps {
  src: Array<string>;
  size: 'lg' | 'md' | 'sm';
  services?: boolean;
}

export const CarouselService = ({ src, size, services }: CarouselProps) => {
  const [item, setItem] = useState<number>(2);

  return (
    <S.Container>
      {src.map((srcImage, index) => {
        return (
          <S.Content onMouseEnter={() => setItem(index)}>
            <S.Item
              size={size}
              key={index}
              srcImage={srcImage}
              active={item === index}
            >
              {services ? (
                <>
                  <S.BlurContainer />
                  {item === index && (
                    <S.Texts className={item === index && 'showText'}>
                      <p>Corte na Tesoura</p>
                      <span>
                        {' '}
                        com finalização na escova e pomada modeladora
                      </span>
                    </S.Texts>
                  )}
                  {item === index && (
                    <S.ButtonContainer
                      className={item === index && 'showButton'}
                    >
                      <Button text="Agendar" />
                    </S.ButtonContainer>
                  )}
                </>
              ) : (
                <S.Description>Marcos Nunes</S.Description>
              )}
            </S.Item>
          </S.Content>
        );
      })}
    </S.Container>
  );
};
