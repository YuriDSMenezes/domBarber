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

const Cart = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const [openCollapse, setOpenCollapse] = useState(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [service, setService] = useState<Service>();
  const [professional, setProfessional] = useState<Professional>();
  const [date, setDate] = useState<string>();
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

  const handleClickCard = (item: any) => {
    setCart((oldState: any) => [...oldState, item]);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify([...cart, item]));
    }
    push({
      pathname: `/ps1/scheduleconfirmed`,
    });
  };

  const handleClickService = () => {
    const hasService = {};
    cart.push(hasService);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(cart));
    }
  };

  const handleOpenCollapse = () => setOpenCollapse(!openCollapse);
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
          <div>
            {isCombo ? (
              <S.ItemContainer>
                <S.ItemDescription>
                  <S.OrangeTitle>Kit barba total</S.OrangeTitle>
                  <S.SmallText>Barba Simples + Barboterapia</S.SmallText>
                  <S.Row>
                    <div>
                      <S.MediumText>R$ 19,90</S.MediumText>
                      <S.SmallText>20 Pontos</S.SmallText>
                    </div>
                    <div>
                      <S.MediumText>R$ 19,90</S.MediumText>
                      <S.SmallText>20 Pontos</S.SmallText>
                    </div>
                  </S.Row>
                </S.ItemDescription>
                <S.ItemPhoto>
                  <S.MediumText>Profissionais</S.MediumText>
                  <S.Row>
                    <div>
                      <S.Photo>
                        <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
                      </S.Photo>
                      <S.SmallText>Paulo R.</S.SmallText>
                    </div>
                    <div>
                      <S.Photo>
                        <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" />
                      </S.Photo>
                      <S.SmallText>Paulo R.</S.SmallText>
                    </div>
                  </S.Row>
                </S.ItemPhoto>
                <S.Arrow onClick={handleOpenCollapse}>
                  <img src={ArrowDownIcon.src} alt="Ícone de abrir colapse" />
                </S.Arrow>
                <S.Line />
                {openCollapse && (
                  <ItemCollapse
                    professional={cart[cart.length - 1]?.professional}
                    service={cart[cart.length - 1]?.service}
                    date={cart[cart.length - 1]?.start}
                  />
                )}
              </S.ItemContainer>
            ) : (
              cart.map((cItem, index: number) => (
                <ItemCollapse
                  key={index}
                  professional={cItem?.professional}
                  service={cItem?.service}
                  product={cItem?.product}
                  date={cItem?.start || ''}
                />
              ))
            )}
            <S.Total>
              <S.LargeText>Total</S.LargeText>
              <S.LargeText>
                {currencyFormat({
                  value: cart.reduce(
                    (acc, curr) =>
                      (acc += curr?.service?.price || curr?.product?.price),
                    0,
                  ),
                  currencyPrefix: 'R$',
                })}
              </S.LargeText>
              <S.Line />
            </S.Total>
          </div>
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
                  handleClickService();
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
