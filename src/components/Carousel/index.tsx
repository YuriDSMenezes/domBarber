import Image from 'next/image';
import * as S from './styles';

interface CarouselProps {
  src: Array<string>;
  size: 'lg' | 'md' | 'sm';
  services?: boolean;
}

export const Carousel = ({ src, size, services }: CarouselProps) => {
  return (
    <S.Container>
      {src.map((srcImage, index) => (
        <S.Item size={size} key={index} srcImage={srcImage}>
          {services ? (
            <>
              <S.BlurContainer />
              <S.Texts>
                <p>Corte na Tesoura</p>
                <span> com finalização na escova e pomada modeladora</span>
              </S.Texts>
            </>
          ) : (
            <S.Description>Marcos Nunes</S.Description>
          )}
        </S.Item>
      ))}
    </S.Container>
  );
};
