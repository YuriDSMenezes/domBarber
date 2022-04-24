import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import MethodPaymentItem from './MethodPaymentItem';

import * as S from './styles';

const methodpayment: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="light">
        <S.Content>
          <S.Title>Forma de Pagamento</S.Title>
          <S.PaymentMethodsContainer>
            <MethodPaymentItem methodPaymentName="Pix" paymentMethod="pix" />
            <MethodPaymentItem
              methodPaymentName="Cartão de Crédito"
              paymentMethod="card"
            />
          </S.PaymentMethodsContainer>
          <Button text="Adicionar Novo Cartão" green />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default methodpayment;
