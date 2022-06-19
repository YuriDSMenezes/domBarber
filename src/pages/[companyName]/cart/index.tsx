/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from 'components/Button';
import { Modal } from 'components/Modal';
import { TextArea } from 'components/TextArea/styles';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { createSchedule } from 'cases/schedule/createSchedule';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import CardSlide from 'components/CardSlide';
import * as S from './styles';
import { ItemCollapse } from '../../../components/itemCollapse';
import { KitCard } from './kitCard';

const Cart = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [indexItem, setIndexItem] = useState<number | undefined>();
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const [clientId, setClientId] = useState(() => {
    if (typeof window !== 'undefined') {
      const clientId = localStorage.getItem('@domBarber:client');

      if (clientId) {
        return JSON.parse(clientId);
      }
    }
    return null;
  });
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

  useEffect(() => {
    setTimeout(() => setSelectedIndex(0), 500);
    setTimeout(() => setSelectedIndex(undefined), 1000);
  }, []);

  const deleteToCart = (index: number) => {
    cart.splice(index, 1);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(cart));
    }
    setCart(cart);
  };

  const editSchedule = (item: any, index: string) => {
    if (item.professional) {
      push({
        pathname: `/[companyName]/schedule/editcart/[index]`,
        query: { companyName: company?.app?.url, index },
      });
    } else {
      push({
        pathname: `/[companyName]/confirmkit/edit/[index]`,
        query: { companyName: company?.app?.url, index },
      });
    }
  };

  return (
    <MainLayout>
      <Modal show={openModal}>
        <S.ModalTitle>Atenção</S.ModalTitle>
        <S.ModalText>Confirmar o cancelamento do agendamento ?</S.ModalText>
        <S.ModalQuestion>Qual o motivo ?</S.ModalQuestion>
        <TextArea rows={8} />
        <S.ModalRow>
          <Button white text="Voltar" onClick={handleCloseModal} />
          <Button
            text="Confirmar"
            onClick={() => {
              deleteToCart(indexItem);
              setOpenModal(false);
            }}
          />
        </S.ModalRow>
      </Modal>
      <BottomSheetFixedLayout theme="dark">
        <S.Container>
          <S.Title onClick={handleOpenModal}>Carrinho</S.Title>
          <div style={{ height: '400px', overflow: 'scroll' }}>
            {cart.map((cItem: any, index: number) => (
              <div style={{ margin: '20px 0' }}>
                {cItem?.service?.services ? (
                  <KitCard item={cItem} index={index} />
                ) : (
                  <CardSlide
                    key={index}
                    swiped={selectedIndex === index}
                    onClick={() => {
                      if (selectedIndex === index) {
                        setSelectedIndex(undefined);
                      } else {
                        setSelectedIndex(index);
                      }
                    }}
                    firstAction={() => {
                      setOpenModal(true);
                      setIndexItem(index);
                    }}
                    secondAction={() => editSchedule(cItem, index)}
                  >
                    <ItemCollapse
                      key={index}
                      professional={cItem?.professional}
                      service={cItem?.service}
                      product={cItem?.product}
                      date={cItem?.start || undefined}
                    />
                  </CardSlide>
                )}
              </div>
            ))}
          </div>
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
                createSchedule({
                  companyId: company.id,
                  token: getUserTokenFromLocalStorage(),
                  from: 'pro-app',
                  clientId: clientId?.id,
                  schedules: cart,
                });
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
