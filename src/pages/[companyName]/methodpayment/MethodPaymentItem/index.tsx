import React, { HTMLAttributes } from 'react';
import {
  MastercardLogo,
  MoreOptionsIcon,
  PixLogo,
} from '../../../../../public/assets';

import * as S from './styles';

interface MethodPaymentItemProps extends HTMLAttributes<HTMLDivElement> {
  methodPaymentName: string;
  paymentMethod?: 'pix' | 'card' | 'money';
  card?: any;
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
                  card?.brand[0].toUpperCase() + card?.brand.substring(1)
                } • ${methodPaymentName}`
              : methodPaymentName}
          </S.PaymentMethodNameText>
          {paymentMethod === 'card' && (
            <S.NumberOfCardText>
              {hideFirstTwelveDigitsCard(card.number)}
            </S.NumberOfCardText>
          )}
        </S.PaymentMethodTextContainer>
        <S.PaymentActionContainer>
          <img src={MoreOptionsIcon.src} alt="Mais Opções" />
        </S.PaymentActionContainer>
      </S.Content>
    </S.Container>
  );
};

export default MethodPaymentItem;
