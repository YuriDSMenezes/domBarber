import { useState } from 'react';

interface CreditCardData {
  number: string;
  expiry: string;
  name: string;
  cvc: string;
  fieldFocused: 'number' | 'expiry' | 'name' | 'cvc';
}

export const useAddCreditCard = () => {
  const [creditCardData, setCreditCardData] = useState<CreditCardData>({
    number: '',
    expiry: '',
    name: '',
    cvc: '',
    fieldFocused: 'number',
  });

  return {
    states: { creditCardData },
    actions: { setCreditCardData },
  };
};
