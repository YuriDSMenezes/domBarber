import ChooseProfessionalCard from 'components/ChooseProfessionalCard';
import { PaginatedItems } from 'components/Pagination';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import ProductCard from './productsCard';
import { ListProductsController } from './listproducts.controller';

import * as S from './styles';

const ListProducts: React.FC = () => {
  const {
    state: { products },
  } = ListProductsController();

  return (
    <MainLayout>
      <S.TitleOut>Lista de Produtos</S.TitleOut>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Lista de Produtos</S.Title>
          <S.ProfissionalsContainer>
            <S.DesktopProfessionals>
              <PaginatedItems
                items={products}
                itemsPerPage={5}
                component={ProductCard}
              />
            </S.DesktopProfessionals>
            <S.MobileProfessionals>
              <ProductCard list={products} />
            </S.MobileProfessionals>
          </S.ProfissionalsContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default ListProducts;
