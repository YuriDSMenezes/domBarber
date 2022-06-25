import React, { HTMLAttributes } from 'react';
import { MastercardLogo, PixLogo } from '../../../../../public/assets';

import * as S from './styles';

interface CardProps {
  brand?: Array<string>;
  number?: number;
}
interface MethodPaymentItemProps extends HTMLAttributes<HTMLDivElement> {
  methodPaymentName: string;
  paymentMethod?: 'pix' | 'creditCard' | 'money' | 'card';
  card?: CardProps;
}

const MethodPaymentItem: React.FC<MethodPaymentItemProps> = ({
  methodPaymentName,
  paymentMethod = 'pix',
  card,
  ...rest
}) => {
  const hideFirstTwelveDigitsCard = (number: number) => {
    let hiddenNumber = '';
    number
      .toString()
      .split('')
      .forEach((n, index) => {
        if (index === 4) {
          hiddenNumber += ' ';
        }
        if (index === 8) {
          hiddenNumber += ' ';
        }
        if (index === 12) {
          hiddenNumber += ' ';
        }
        if (index < 12) {
          hiddenNumber += '*';
          return;
        }
        hiddenNumber += n;
      });
    return hiddenNumber;
  };
  return (
    <S.Container {...rest}>
      <S.Content>
        <S.PaymentMethodImgContainer>
          <img
            src={paymentMethod === 'pix' ? PixLogo.src : MastercardLogo.src}
            alt="Pix"
          />
        </S.PaymentMethodImgContainer>
        <S.PaymentMethodTextContainer>
          <S.PaymentMethodNameText>
            {paymentMethod === 'card'
              ? `${
                  // @ts-ignore
                  card?.brand[0].toUpperCase() + card?.brand.substring(1)
                } • ${methodPaymentName}`
              : methodPaymentName}
          </S.PaymentMethodNameText>
          {paymentMethod === 'card' && (
            <S.NumberOfCardText>
              {hideFirstTwelveDigitsCard(card?.number || 0)}
            </S.NumberOfCardText>
          )}
        </S.PaymentMethodTextContainer>
      </S.Content>
    </S.Container>
  );
};

export default MethodPaymentItem;
