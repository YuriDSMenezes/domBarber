import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import Card from 'react-credit-cards';
import React from 'react';

import Button from 'components/Button';
import * as S from './styles';
import { useAddCreditCard } from './addcreditcard.controller';

const addcreditcard: React.FC = () => {
  const { states, actions } = useAddCreditCard();
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="light">
        <S.Content>
          <S.Title>Pagamento</S.Title>
          <S.CreditCardContainer>
            <Card
              cvc={states.creditCardData.cvc}
              expiry={states.creditCardData.expiry}
              focused={states.creditCardData.fieldFocused}
              name={states.creditCardData.name}
              number={states.creditCardData.number}
              callback={props => {
                actions.setCreditCardData({
                  ...states.creditCardData,
                  brand: props.issuer,
                });
              }}
            />
          </S.CreditCardContainer>
          <S.CreditCardInputsContainer>
            <S.CreditCardInputContainer>
              <S.CreditCardInputLabel>Numero do Cartão</S.CreditCardInputLabel>
              <S.CreditCardInput
                type="text"
                maxLength={16}
                onFocus={() =>
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    fieldFocused: 'number',
                  })
                }
                onChange={e => {
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    number: e.target.value,
                  });
                }}
              />
            </S.CreditCardInputContainer>
            <S.CreditCardInputContainer>
              <S.CreditCardInputLabel>Nome do Titular </S.CreditCardInputLabel>
              <S.CreditCardInput
                type="text"
                onFocus={() =>
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    fieldFocused: 'name',
                  })
                }
                onChange={e => {
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    name: e.target.value,
                  });
                }}
              />
            </S.CreditCardInputContainer>
            <S.CreditCardInputContainer>
              <S.CreditCardInputLabel>Mês/Ano </S.CreditCardInputLabel>
              <S.CreditCardInput
                type="text"
                onFocus={() =>
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    fieldFocused: 'expiry',
                  })
                }
                onChange={e => {
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    expiry: e.target.value,
                  });
                }}
              />
            </S.CreditCardInputContainer>
            <S.CreditCardInputContainer>
              <S.CreditCardInputLabel>
                Codigo de Segurança{' '}
              </S.CreditCardInputLabel>
              <S.CreditCardInput
                type="text"
                maxLength={3}
                onFocus={() =>
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    fieldFocused: 'cvc',
                  })
                }
                onChange={e => {
                  actions.setCreditCardData({
                    ...states.creditCardData,
                    cvc: e.target.value,
                  });
                }}
              />
            </S.CreditCardInputContainer>
          </S.CreditCardInputsContainer>
          <S.ActionButtonContainer>
            <Button
              text="Confirmar"
              green
              onClick={() => actions.registerCreditCard()}
            />
          </S.ActionButtonContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default addcreditcard;
