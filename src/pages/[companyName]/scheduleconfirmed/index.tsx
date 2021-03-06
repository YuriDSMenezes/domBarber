import AppointmentCard from 'components/AppointmentCard';
import Button from 'components/Button';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { OutlinedCheckIcon } from '../../../../public/assets';
import KitCard from '../cart/kitCard';

import * as S from './styles';

const scheduleconfirmed: React.FC = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.ContainerImgConfirmation>
            <img src={OutlinedCheckIcon.src} alt="Checked" />
          </S.ContainerImgConfirmation>
          <S.Title>Agendamento Confirmado!</S.Title>
          <S.MessageText>Você pode realizar o pagamento no Local</S.MessageText>
          <S.AppointmentsContainer>
            {cart.map((itemCart, index) =>
              itemCart?.service?.services ? (
                <div>
                  <KitCard item={itemCart} key={index} noCollapse />
                </div>
              ) : (
                <AppointmentCard appointment={itemCart} key={index} />
              ),
            )}
          </S.AppointmentsContainer>
          <S.TotalAppointmentContainer>
            <S.TotalText>Total</S.TotalText>
            <S.TotalValue>
              {currencyFormat({
                value: cart.reduce(
                  (acc, curr) =>
                    (acc += curr?.service?.price || curr?.product?.price),
                  0,
                ),
                currencyPrefix: 'R$',
              })}
            </S.TotalValue>
          </S.TotalAppointmentContainer>
          <S.QuestionUserText>Deseja pagar Agora?</S.QuestionUserText>
          <Button
            text="Clique Aqui"
            onClick={() =>
              push({
                pathname: `/[companyName]/checkout`,
                query: { companyName: company?.app?.url },
              })
            }
          />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default scheduleconfirmed;
