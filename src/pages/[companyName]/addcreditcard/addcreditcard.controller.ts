import { getClientByClientId } from 'cases/client/getClientByClientId';
import { getClientFromLocalStorage } from 'cases/client/getClientFromLocalStorage';
import { updateClientByClientId } from 'cases/client/updateClientByClientId';
import { getCompanyFromLocalStorage } from 'cases/company/getCompanyFromLocalStorage';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import { useGlobal } from 'hooks/Global';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

interface CreditCardData {
  number: string;
  expiry: string;
  name: string;
  cvc: string;
  brand: string | undefined;
  fieldFocused: 'number' | 'expiry' | 'name' | 'cvc';
}

interface iEncryptCard {
  publicKey: string;
  holder: string;
  number: string;
  expMonth: number;
  expYear: number;
  securityCode: number;
}

export const useAddCreditCard = () => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();
  const [client, setClient] = useState();

  const PagSeguro = useCallback(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      return window.PagSeguro;
    }
    return null;
  }, []);

  const encriptCard = ({
    publicKey,
    holder,
    number,
    expMonth,
    expYear,
    securityCode,
  }: iEncryptCard) => {
    try {
      const encrypt = PagSeguro()?.encryptCard({
        publicKey,
        holder,
        number,
        expMonth,
        expYear,
        securityCode,
      });
      if (encrypt?.errors?.lenght > 0 && encrypt?.hasErrors) {
        throw new Error('Cartão de Credito Inválido.');
      }
      return encrypt.encryptedCard;
    } catch (error) {
      return undefined;
    }
  };

  const [creditCardData, setCreditCardData] = useState<CreditCardData>({
    number: '',
    expiry: '',
    name: '',
    cvc: '',
    brand: '',
    fieldFocused: 'number',
  });

  const registerCreditCard = async () => {
    try {
      const encryptedCard = encriptCard({
        publicKey: getCompanyFromLocalStorage()?.pagseguro?.publicKey,
        holder: creditCardData.name,
        number: creditCardData.number,
        securityCode: Number(creditCardData.cvc),
        expMonth: Number(creditCardData.expiry.split('/')[0]),
        expYear: Number(creditCardData.expiry.split('/')[1]),
      });
      const creditCard = {
        id: creditCardData.number,
        main: true,
        token: encryptedCard,
        brand: creditCardData.brand,
        name: creditCardData.name,
        number: creditCardData.number,
        month: Number(creditCardData.expiry.split('/')[0]),
        year: Number(creditCardData.expiry.split('/')[1]),
      };
      if (typeof window !== 'undefined') {
        const clientLocal = localStorage.getItem('@domBarber:client');
        if (clientLocal) {
          const parsedClient = JSON.parse(clientLocal);
          if (!parsedClient.cards) {
            parsedClient.cards = [];
          }
          const allCards = parsedClient?.cards;
          allCards.push(creditCard);
          const newClientCard = {
            ...parsedClient,
            cards: [parsedClient.cards, allCards],
          };
          localStorage.setItem(
            '@domBarber:client',
            JSON.stringify(newClientCard),
          );
        }
      }
      await updateClientByClientId(
        client.id,
        { ...client, cards: [...client.cards, creditCard] },
        company.id,
      );
      return push({
        pathname: `/[companyName]/methodpayment`,
        query: { companyName: company?.app?.url },
      });
    } catch (error) {
      return null;
    }
  };

  const getClient = async () => {
    const client = await getClientByClientId(
      getClientFromLocalStorage().id,
      company.id,
      getUserTokenFromLocalStorage(),
    );
    setClient(client);
  };

  useEffect(() => {
    getClient();
  }, []);

  return {
    states: { creditCardData },
    actions: { setCreditCardData, registerCreditCard },
  };
};
