import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useState } from 'react';
import { ArrowDownIcon } from '../../../public/assets';
import { ItemCollapse } from './itemCollapse';
import * as S from './styles';

const Cart = () => {
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleOpenCollapse = () => setOpenCollapse(!openCollapse);

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Title>Carrinho</S.Title>
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
        </S.ItemContainer>
        {openCollapse && <ItemCollapse />}
        <S.Total>
          <S.LargeText>Total</S.LargeText>
          <S.LargeText>R$ 39,90</S.LargeText>
          <S.Line />
        </S.Total>
        <S.Buttons>
          <S.Row>
            <Button white text="Adicionar Produto" />
            <Button white text="Adicionar Serviço" />
          </S.Row>
          <Button text="Confirmar Agendamento" />
        </S.Buttons>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default Cart;
