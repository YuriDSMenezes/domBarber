// eslint-disable-next-line import/no-unresolved
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useRouter } from 'next/router';

import { useCart } from 'hooks';
import { Professional } from 'models/types/professional';
import { useGlobal } from 'hooks/Global';
import Image from 'next/image';
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
          <S.Item key={index} onClick={() => handleClickCard(item)}>
            {item.image && (
              <Image src={item.image} objectFit="cover" layout="fill" />
            )}
          </S.Item>
          <S.Texts>
            <p>{item.name}</p>
          </S.Texts>
        </SplideSlide>
      ))}
    </Splide>
  );
};
