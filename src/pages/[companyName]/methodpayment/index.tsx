import { getClientByClientId } from 'cases/client/getClientByClientId';
import { getClientFromLocalStorage } from 'cases/client/getClientFromLocalStorage';
import { getUserIdFromLocalStorage } from 'cases/user/getUserIdFromLocalStorage';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import Button from 'components/Button';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useMethodPaymentController } from './methodPayment.controller';
import MethodPaymentItem from './MethodPaymentItem';

import * as S from './styles';

const methodpayment: React.FC = () => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();

  const [client, setClient] = useState();
  const [cards, setCards] = useState([]);

  const {
    actions: { encriptCard },
  } = useMethodPaymentController();

  const getClient = async () => {
    const client = await getClientByClientId(
      getClientFromLocalStorage().id,
      company.id,
      getUserTokenFromLocalStorage(),
    );
    setClient(client);
    setCards(client.cards);
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="light">
        <S.Content>
          <S.Title>Forma de Pagamento</S.Title>
          <S.PaymentMethodsContainer>
            <MethodPaymentItem
              methodPaymentName="Pix"
              paymentMethod="pix"
              onClick={() => console.log('PIX')}
            />
            {cards.map(card => (
              <MethodPaymentItem
                methodPaymentName="Cartão de Crédito"
                paymentMethod="card"
              />
            ))}
          </S.PaymentMethodsContainer>
          <Button
            text="Adicionar Novo Cartão"
            green
            onClick={() =>
              push({
                pathname: `/[companyName]/addcreditcard`,
                query: { companyName: company?.app?.url },
              })
            }
          />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default methodpayment;
