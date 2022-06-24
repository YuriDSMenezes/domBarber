import { Splide, SplideSlide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import { useGlobal } from 'hooks/Global';
import { useCart } from 'hooks/useCart';
import { Product } from 'models/types/product';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import { useState } from 'react';

import * as S from './styles';

interface CarouselProps {
  items: Array<any>;
  size: 'lg' | 'md' | 'sm';
  professional?: boolean;
}

export const Carousel = ({ items, size, professional }: CarouselProps) => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const { addProfessional } = useCart();

  const handleClickCard = (item: Professional | Product) => {
    if (professional) {
      addProfessional(item);
      // push({
      //   pathname: `/[companyName]/newservice`,
      //   query: { companyName: company?.app?.url },
      // });
    }
    // if (!professional) {
    //   const newCart = [...cart];
    //   newCart.push({ product: item, productId: item.id });
    //   setCart(newCart);
    //   if (typeof window !== 'undefined') {
    //     localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    //   }
    //   push({
    //     pathname: `/ps1/cart`,
    //   });
    // }
  };

  return (
    <Splide options={{ perPage: 3, pagination: false, slideFocus: true }}>
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <S.Item
            size={size}
            key={index}
            srcImage={item?.image || (item?.images && item?.images[0]?.url)}
            onClick={() => handleClickCard(item)}
          >
            <S.Texts>
              <p>{item.title || item.name}</p>
              <span>{` ${item.description || item.nick}`}</span>
            </S.Texts>
          </S.Item>
        </SplideSlide>
      ))}
    </Splide>
  );
};
