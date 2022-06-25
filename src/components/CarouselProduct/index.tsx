import { Splide, SplideSlide } from '@splidejs/react-splide';
// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import { useRouter } from 'next/router';

import { useCart } from 'hooks/UseCart';
import { Product } from 'models/types/product';
import * as S from './styles';

interface CarouselProps {
  items: Array<Product>;
  size: 'lg' | 'md' | 'sm';
  professional?: boolean;
}

export const CarouselProduct = ({ items, size }: CarouselProps) => {
  const { push } = useRouter();
  const { addProduct } = useCart();

  const handleClickCard = (item: Product) => {
    addProduct(item);
    push({
      pathname: `/ps1/cart`,
    });
  };

  return (
    <Splide options={{ perPage: 3, pagination: false, slideFocus: true }}>
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <S.Item
            size={size}
            key={index}
            srcImage={item?.images && item?.images[0]?.url}
            onClick={() => handleClickCard(item)}
          >
            <S.Texts>
              <p>{item.name}</p>
              <span>{` ${item.description}`}</span>
            </S.Texts>
          </S.Item>
        </SplideSlide>
      ))}
    </Splide>
  );
};
