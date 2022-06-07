import Button from 'components/Button';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { KitService } from 'models/types/kit';
import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
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
        setKit(cartParsed[cartParsed.length - 1]);
        return cartParsed;
      }
    }

    return [];
  });

  const canSchedule = useCallback(() => {
    let isScheduled = true;
    kit?.service?.services?.forEach(service => {
      if (!service.start) {
        isScheduled = false;
      }
    });
    return isScheduled;
  }, [kit]);

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark" mediumSize>
        <S.Content>
          <S.Title>Kit Barba Total</S.Title>
          <S.Description>
            Defina a data e hora para cada serviço do seu Kit
          </S.Description>
          <S.KitsContainer>
            {kit?.service?.services?.map((service: KitService) => (
              <KitCard service={service} />
            ))}
          </S.KitsContainer>
          {canSchedule() ? (
            <Button
              text="Confirmar Agendamento"
              onClick={() =>
                push({
                  pathname: `/[companyName]/cart`,
                  query: {
                    companyName: company?.app?.name,
                  },
                })
              }
            />
          ) : (
            <Button disabled text="Agende todos os serviços" />
          )}
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default choosekit;
