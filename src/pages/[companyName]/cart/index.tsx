/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from 'components/Button';
import { Modal } from 'components/Modal';
import { TextArea } from 'components/TextArea/styles';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { ArrowDownIcon } from '../../../../public/assets';
import { ItemCollapse } from '../../../components/itemCollapse';
import { KitCard } from './kitCard';

const Cart = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const isCombo = false;
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const handleOpenModal = () => setOpenModal(!openModal);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <MainLayout>
      <Modal show={openModal}>
        <S.Title>Atenção</S.Title>
        <S.MediumText>Confirmar o cancelamento do agendamento ?</S.MediumText>
        <S.MediumText>Qual o motivo ?</S.MediumText>
        <TextArea />
        <S.Row>
          <Button white text="Voltar" onClick={handleCloseModal} />
          <Button text="Confirmar" />
        </S.Row>
      </Modal>
      <BottomSheetFixedLayout theme="dark">
        <S.Container>
          <S.Title onClick={handleOpenModal}>Carrinho</S.Title>
          {cart.map((cItem: any, index: number) => (
            <>
              {cItem?.service?.services ? (
                <KitCard kit={cItem} />
              ) : (
                <ItemCollapse
                  key={index}
                  professional={cItem?.professional}
                  service={cItem?.service}
                  product={cItem?.product}
                  date={cItem?.start || undefined}
                />
              )}
            </>
          ))}
          <S.Total>
            <S.LargeText>Total</S.LargeText>
            <S.LargeText>
              {currencyFormat({
                value: cart.reduce(
                  (acc: number, curr: any) =>
                    (acc += curr?.service?.price || curr?.product?.price),
                  0,
                ),
                currencyPrefix: 'R$',
              })}
            </S.LargeText>
            <S.Line />
          </S.Total>
          <S.Buttons>
            <S.Row>
              <Button
                white
                text="Adicionar Produto"
                onClick={() =>
                  push({
                    pathname: `/[companyName]/products`,
                    query: { companyName: company?.app?.url },
                  })
                }
              />
              <Button
                white
                text="Adicionar Serviço"
                onClick={() => {
                  push({
                    pathname: `/[companyName]/newservice`,
                    query: { companyName: company?.app?.url },
                  });
                }}
              />
            </S.Row>
            <Button
              text="Confirmar Agendamento"
              onClick={() => {
                push({
                  pathname: `/[companyName]/scheduleconfirmed`,
                  query: { companyName: company?.app?.url },
                });
              }}
            />
          </S.Buttons>
        </S.Container>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default Cart;
