import Button from 'components/Button';
import { useGlobal, useCart } from 'hooks';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { KitService } from 'models/types/kit';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import KitCard from './KitCard';

import * as S from './styles';

const choosekit: React.FC = () => {
  const {
    states: { company },
  } = useGlobal();
  const { getLastItemCart } = useCart();

  const { push } = useRouter();

  const canSchedule = useCallback(() => {
    let isScheduled = true;
    // @ts-ignore
    getLastItemCart?.service?.services?.forEach((service: any) => {
      if (!service.start) {
        isScheduled = false;
      }
    });
    return isScheduled;
  }, [getLastItemCart]);

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark" mediumSize>
        <S.Content>
          <S.Title>Kit Barba Total</S.Title>
          <S.Description>
            Defina a data e hora para cada serviço do seu Kit
          </S.Description>
          <S.KitsContainer>
            {getLastItemCart?.service?.services?.map(
              (service: KitService, index: number) => (
                <KitCard service={service} key={index} />
              ),
            )}
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
