import Button from 'components/Button';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import KitCard from './KitCard';

import * as S from './styles';

const choosekit: React.FC = () => {
  const {
    states: { company },
  } = useGlobal();
  const [kit, setKit] = useState<[]>();

  const { push } = useRouter();

  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        const cartParsed = JSON.parse(cart);
        setKit(cartParsed);
        return cartParsed;
      }
    }

    return [];
  });

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark" mediumSize>
        <S.Content>
          <S.Title>Kit Barba Total</S.Title>
          <S.Description>
            Defina a data e hora para cada serviço do seu Kit
          </S.Description>
          <S.KitsContainer>
            {kit?.map(({ service }: any) => (
              <KitCard services={service?.services} />
            ))}
          </S.KitsContainer>
          <Button text="Confirmar Agendamento" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default choosekit;
