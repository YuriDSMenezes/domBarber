import Button from 'components/Button';
import * as S from './styles';

interface CarouselProps {
  src: Array<string>;
  size: 'lg' | 'md' | 'sm';
  services?: boolean;
}

export const Carousel = ({ src, size, services }: CarouselProps) => {
  return (
    <S.Container>
      {src.map((srcImage, index) => {
        return (
          <S.Item
            size={size}
            key={index}
            srcImage={srcImage}
            active={index === 2}
          >
            {services ? (
              <>
                <S.BlurContainer />
                {index === 2 && (
                  <S.Texts>
                    <p>Corte na Tesoura</p>
                    <span> com finalização na escova e pomada modeladora</span>
                  </S.Texts>
                )}
                {index === 2 && (
                  <S.ButtonContainer>
                    <Button text="Agendar" />
                  </S.ButtonContainer>
                )}
              </>
            ) : (
              <S.Description>Marcos Nunes</S.Description>
            )}
          </S.Item>
        );
      })}
    </S.Container>
  );
};
