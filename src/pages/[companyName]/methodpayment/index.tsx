import { getClientByClientId } from 'cases/client/getClientByClientId';
import { getClientFromLocalStorage } from 'cases/client/getClientFromLocalStorage';
import { getInstallments } from 'cases/installments/getInstallments';
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
    states: { company, cardInfos },
    actions: { setSelectedCardPayment },
  } = useGlobal();
  const { push } = useRouter();

  const [client, setClient] = useState();
  const [cards, setCards] = useState([]);

  const {
    states: { encrypty },
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

  const getAllInstallments = async () => {
    const response = await getInstallments(
      company?.id,
      getClientFromLocalStorage().id,
      getUserTokenFromLocalStorage(),
      'creditCard',
      '5',
    );
    if (window !== 'undefined') {
      localStorage.setItem('@domBarber:installments', response);
    }
  };

  useEffect(() => {
    getClient();
  }, []);

  useEffect(() => {
    Object.keys(company).length > 0 && getAllInstallments();
  }, [client, company]);

  console.log(cardInfos, 'aaaa');

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
                card={card}
                methodPaymentName="Cartão de Crédito"
                paymentMethod="card"
                onClick={() => {
                  setSelectedCardPayment(card);
                  push({
                    pathname: `/[companyName]/checkout`,
                    query: { companyName: company?.app?.url },
                  });
                }}
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
