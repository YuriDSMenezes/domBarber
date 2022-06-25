// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRouter } from 'next/router';

import { useCart } from 'hooks/UseCart';
import { Professional } from 'models/types/professional';
import { useGlobal } from 'hooks/Global';
import * as S from './styles';

interface CarouselProps {
  items: Array<Professional>;
  size: 'lg' | 'md' | 'sm';
}

export const CarouselProfessional = ({ items, size }: CarouselProps) => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();
  const { addProfessional } = useCart();

  const handleClickCard = (item: Professional) => {
    addProfessional(item);
    push({
      pathname: `/[companyName]/newservice`,
      query: { companyName: company?.app?.url, professionalId: item.id },
    });
  };

  return (
    <Splide options={{ perPage: 3, pagination: false, slideFocus: true }}>
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <S.Item
            size={size}
            key={index}
            srcImage={item?.image || item?.image}
            onClick={() => handleClickCard(item)}
          >
            <S.Texts>
              <p>{item.name}</p>
              <span>{` ${item.nick}`}</span>
            </S.Texts>
          </S.Item>
        </SplideSlide>
      ))}
    </Splide>
  );
};
