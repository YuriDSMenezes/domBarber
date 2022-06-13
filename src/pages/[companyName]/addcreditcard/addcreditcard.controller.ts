import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import { environment } from 'environments/environment.prod';
import { useGlobal } from 'hooks/Global';
import { useCallback, useState } from 'react';
import api from 'services/api';

interface CreditCardData {
  number: string;
  expiry: string;
  name: string;
  cvc: string;
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
      console.log(encrypt);
      return encrypt.encryptedCard;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  const [creditCardData, setCreditCardData] = useState<CreditCardData>({
    number: '',
    expiry: '',
    name: '',
    cvc: '',
    fieldFocused: 'number',
  });

  const registerCreditCard = async () => {
    try {
      const encryptedCard = encriptCard({
        publicKey:
          'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+ZqgD892U9/HXsa7XqBZUayPquAfh9xx4iwUbTSUAvTlmiXFQNTp0Bvt/5vK2FhMj39qSv1zi2OuBjvW38q1E374nzx6NNBL5JosV0+SDINTlCG0cmigHuBOyWzYmjgca+mtQu4WczCaApNaSuVqgb8u7Bd9GCOL4YJotvV5+81frlSwQXralhwRzGhj/A57CGPgGKiuPT+AOGmykIGEZsSD9RKkyoKIoc0OS8CPIzdBOtTQCIwrLn2FxI83Clcg55W8gkFSOS6rWNbG5qFZWMll6yl02HtunalHmUlRUL66YeGXdMDC2PuRcmZbGO5a/2tbVppW6mfSWG3NPRpgwIDAQAB',
        holder: creditCardData.name,
        number: creditCardData.number,
        securityCode: Number(creditCardData.cvc),
        expMonth: Number(creditCardData.expiry.split('/')[0]),
        expYear: Number(creditCardData.expiry.split('/')[1]),
      });
      const params = new URLSearchParams([
        ['cardBin', creditCardData.number.substring(0, 6)],
      ]);
      const responseBrandCard = await api.get(`pagseguro/card/brand`, {
        params,
        headers: {
          ProjectId: environment.projectId,
          CompanyId: company.id,
          publickey:
            'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr+ZqgD892U9/HXsa7XqBZUayPquAfh9xx4iwUbTSUAvTlmiXFQNTp0Bvt/5vK2FhMj39qSv1zi2OuBjvW38q1E374nzx6NNBL5JosV0+SDINTlCG0cmigHuBOyWzYmjgca+mtQu4WczCaApNaSuVqgb8u7Bd9GCOL4YJotvV5+81frlSwQXralhwRzGhj/A57CGPgGKiuPT+AOGmykIGEZsSD9RKkyoKIoc0OS8CPIzdBOtTQCIwrLn2FxI83Clcg55W8gkFSOS6rWNbG5qFZWMll6yl02HtunalHmUlRUL66YeGXdMDC2PuRcmZbGO5a/2tbVppW6mfSWG3NPRpgwIDAQAB',
          Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
        },
      });
      console.log(responseBrandCard);
      const creditCard = {
        main: true,
        token: encryptedCard,
        brand: 'visa',
        name: creditCardData.name,
        number: creditCardData.number,
        month: Number(creditCardData.expiry.split('/')[0]),
        year: Number(creditCardData.expiry.split('/')[1]),
      };
    } catch (error) {}
  };

  return {
    states: { creditCardData },
    actions: { setCreditCardData, registerCreditCard },
  };
};
