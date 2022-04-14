import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { PagSeguroLogo, SecureOrderLogo } from '../../../public/assets';

import * as S from './styles';

const checkout: React.FC = () => {
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
            <S.ContainerRow>
              <S.Column>
                <S.ServiceTitle>Corte Simples</S.ServiceTitle>
                <S.ServicePoints>Acumule 20 Pontos</S.ServicePoints>
              </S.Column>
              <S.Column>
                <S.ServicePriceText>R$ 39,90</S.ServicePriceText>
              </S.Column>
            </S.ContainerRow>
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
                <S.PaymentMethodTitle>Forma de Pagamento</S.PaymentMethodTitle>
              </S.Column>
              <S.Column>
                <S.ActionChangePaymentMethod>
                  Trocar
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
                <S.ServicePriceText>R$ 39,90</S.ServicePriceText>
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
