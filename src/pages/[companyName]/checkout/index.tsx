import Button from 'components/Button';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { PagSeguroLogo, SecureOrderLogo } from '../../../../public/assets';
import MethodPaymentItem from './MethodPaymentItem';

import * as S from './styles';

const checkout: React.FC = () => {
  const { push } = useRouter();
  const {
    states: { company, selectedCardPayment },
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
      <BottomSheetFixedLayout>
        <S.Content>
          <S.Title>Pagamento</S.Title>
          <S.LogosContainer>
            <img src={PagSeguroLogo.src} alt="PagSeguro" />
            <img src={SecureOrderLogo.src} alt="Compra Segura" />
          </S.LogosContainer>
          <S.DeatailPaymentContainer>
            {cart.map(itemCart => (
              <S.ContainerRow>
                <S.Column>
                  <S.ServiceTitle>
                    {itemCart?.service?.description ||
                      itemCart?.product?.description}
                  </S.ServiceTitle>
                  <S.ServicePoints>
                    Acumule{' '}
                    {itemCart?.service?.pointsGenerated ||
                      itemCart?.product?.pointsGenerated}{' '}
                    Pontos
                  </S.ServicePoints>
                </S.Column>
                <S.Column>
                  <S.ServicePriceText>
                    {currencyFormat({
                      value:
                        itemCart?.service?.price || itemCart?.product?.price,
                      currencyPrefix: 'R$',
                    })}
                  </S.ServicePriceText>
                </S.Column>
              </S.ContainerRow>
            ))}
            <S.ContainerRow>
              <S.Column>
                <S.PointsTitle>Saldo de Pontos</S.PointsTitle>
              </S.Column>
              <S.Column>
                <S.PointsTitle>0 Pontos</S.PointsTitle>
              </S.Column>
            </S.ContainerRow>
            <S.ContainerRow>
              <S.Column>
                {selectedCardPayment ? (
                  <MethodPaymentItem
                    card={selectedCardPayment}
                    methodPaymentName="Cartão de Crédito"
                    paymentMethod="card"
                  />
                ) : (
                  <S.PaymentMethodTitle>
                    Forma de Pagamento
                  </S.PaymentMethodTitle>
                )}
              </S.Column>
              <S.Column>
                <S.ActionChangePaymentMethod
                  onClick={() =>
                    push({
                      pathname: `/[companyName]/methodpayment`,
                      query: { companyName: company?.app?.url },
                    })
                  }
                >
                  {selectedCardPayment ? 'Trocar' : 'Selecionar'}
                </S.ActionChangePaymentMethod>
              </S.Column>
            </S.ContainerRow>
            <S.ContainerRow>
              <S.Column>
                <S.DiscountTitle>Cupom de Desconto</S.DiscountTitle>
              </S.Column>
            </S.ContainerRow>
            <S.ContainerRow>
              <S.Column>
                <S.TotalTitle>Total</S.TotalTitle>
              </S.Column>
              <S.Column>
                <S.ServicePriceText>
                  {currencyFormat({
                    value: cart.reduce(
                      (acc, curr) =>
                        (acc += curr?.service?.price || curr?.product?.price),
                      0,
                    ),
                    currencyPrefix: 'R$',
                  })}
                </S.ServicePriceText>
              </S.Column>
            </S.ContainerRow>
          </S.DeatailPaymentContainer>
          <Button text="Confirmar" green />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default checkout;
