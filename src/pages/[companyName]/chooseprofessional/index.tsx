import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ChooseProfessionalCard from './ChooseProfessionalCard';

import * as S from './styles';

const chooseprofessional: React.FC = () => {
  const { push } = useRouter();
  const [professionals, setProfessionals] = useState<Array<Professional>>([]);
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        const parsedCart = JSON.parse(cart);
        setProfessionals(parsedCart);
        return parsedCart;
      }
    }

    return [];
  });

  const handleClickCard = (item: Professional) => {
    setCart((oldState: any) => [...oldState, item]);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify([...cart, item]));
    }
    push({
      pathname: `/ps1/schedule`,
    });
  };

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Escolha um Profissional</S.Title>
          <S.ChooseProfessionalContainer>
            {professionals.map((professional, index) => (
              <ChooseProfessionalCard
                key={index}
                professional={professional}
                onClick={() => handleClickCard(professional)}
              />
            ))}
          </S.ChooseProfessionalContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default chooseprofessional;
