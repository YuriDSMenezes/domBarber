import Router from 'next/router';
import { useState } from 'react';
import * as S from './styles';

interface HorizontalListItem {
  item: string;
  url: string;
}

export const HorizontalList = () => {
  const [itemSelected, setItemSelected] = useState<number>(0);

  const array = [
    {
      item: 'Promoções',
      url: '',
    },
    {
      item: 'Agenda',
      url: '/schedule',
    },
    {
      item: 'Serviços',
      url: '/newservice',
    },
    {
      item: 'Produtos',
      url: '/products',
    },
    {
      item: 'Profissionais',
      url: '/professionals',
    },
  ];

  const handleClick = (url: string) => Router.push(url);

  return (
    <S.Container>
      {array.map(({ item, url }: HorizontalListItem, index: number) => (
        <S.Item key={`${item}${index}`} onClick={() => handleClick(url)}>
          {item}
        </S.Item>
      ))}
    </S.Container>
  );
};
