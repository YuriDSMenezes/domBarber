import { getCompanyFromLocalStorage } from 'cases/company/getCompanyFromLocalStorage';
import { useCallback } from 'react';

interface iEncryptCard {
  publicKey: string;
  holder: string;
  number: string;
  expMonth: number;
  expYear: number;
  securityCode: number;
}

const encrypt = ({
  publicKey,
  holder,
  number,
  expMonth,
  expYear,
  securityCode,
}: iEncryptCard) => {
  const PagSeguro = useCallback((): any => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      return window.PagSeguro;
    }
  }, []);
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

export const encryptCard = async selectedCard => {
  try {
    const encryptedCard = encrypt({
      publicKey: getCompanyFromLocalStorage()?.pagseguro?.publicKey,
      holder: selectedCard.name,
      number: selectedCard.number,
      securityCode: Number(selectedCard.cvc),
      expMonth: Number(selectedCard.expiry.split('/')[0]),
      expYear: Number(selectedCard.expiry.split('/')[1]),
    });

    const creditCard = {
      id: selectedCard.number,
      main: true,
      token: encryptedCard,
      brand: selectedCard.brand,
      name: selectedCard.name,
      number: selectedCard.number,
      month: Number(selectedCard.expiry.split('/')[0]),
      year: Number(selectedCard.expiry.split('/')[1]),
    };
    return creditCard;
  } catch (error) {
    return console.error(error);
  }
};
