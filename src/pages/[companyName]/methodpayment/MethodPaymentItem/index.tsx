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
}

const MethodPaymentItem: React.FC<MethodPaymentItemProps> = ({
  methodPaymentName,
  paymentMethod = 'pix',
  ...rest
}) => {
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
              ? `Mastercard • ${methodPaymentName}`
              : methodPaymentName}
          </S.PaymentMethodNameText>
          {paymentMethod === 'card' && (
            <S.NumberOfCardText>****2212</S.NumberOfCardText>
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
