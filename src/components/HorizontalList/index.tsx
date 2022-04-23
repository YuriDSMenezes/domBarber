import { useState } from 'react';
import * as S from './styles';

export const HorizontalList = () => {
  const [itemSelected, setItemSelected] = useState<number>(0);

  const array = [
    'Promoções',
    'Agenda',
    'Serviços',
    'Produtos',
    'Profissionais',
    'Produtos',
    'Agenda',
    'Serviços',
    'Profissionais',
  ];

  const handleClick = (index: number) => setItemSelected(index);

  return (
    <S.Container>
      {array.map((item: string, index: number) => (
        <S.Item
          key={`${item}${index}`}
          onClick={() => handleClick(index)}
          active={index === itemSelected}
        >
          {item}
        </S.Item>
      ))}
    </S.Container>
  );
};
