import { useState, useEffect } from 'react';
import * as S from './styles';

interface CarouselProps {
  src: Array<string>;
  size: 'lg' | 'md' | 'sm';
}

export const Carousel = ({ src, size }: CarouselProps) => {
  return (
    <S.Container>
      {src.map((srcImage, index) => (
        <S.Item size={size} key={index}>
          <img src={srcImage} alt="teste" width="100%" height="100%" />
        </S.Item>
      ))}
    </S.Container>
  );
};
