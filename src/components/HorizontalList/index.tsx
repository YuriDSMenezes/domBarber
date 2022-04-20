import Router from 'next/router';
import { useState } from 'react';
import * as S from './styles';

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
      {array.map(({ item, url }: any) => (
        <S.Item onClick={() => handleClick(url)}>{item}</S.Item>
      ))}
    </S.Container>
  );
};
