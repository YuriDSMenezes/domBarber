import { getUserIdFromLocalStorage } from 'cases/user/getUserIdFromLocalStorage';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import Button from 'components/Button';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React, { useEffect } from 'react';
import { useMethodPaymentController } from './methodPayment.controller';
import MethodPaymentItem from './MethodPaymentItem';

import * as S from './styles';

const methodpayment: React.FC = () => {
  const {
    states: { company },
  } = useGlobal();
  const {
    actions: { encriptCard },
  } = useMethodPaymentController();

  // useEffect(() => {
  //   getClientByUserIdAndCompanyId(
  //     getUserIdFromLocalStorage(),
  //     company?.id,
  //     getUserTokenFromLocalStorage(),
  //   );
  // }, [company]);
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
