import { useCallback, useEffect } from 'react';

interface iEncryptCard {
  publicKey: string;
  holder: string;
  number: string;
  expMonth: number;
  expYear: number;
  securityCode: number;
}

export const useMethodPaymentController = () => {
  // eslint-disable-next-line consistent-return
  const PagSeguro = useCallback((): any => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      return window.PagSeguro;
    }
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
      console.error(error);
      return undefined;
    }
  };

  return {
    states: {},
    actions: { PagSeguro, encriptCard },
  };
};
