import { PaginatedItems } from 'components/Pagination';
import Tabs from 'components/Tabs';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import BarberShopTabOption from './BarberShopTabOption';
import HygieneTabOption from './HygieneTabOption';
import { ProductsController } from './products.controller';
import ProductsTabOption from './ProductsTabOption';

import * as S from './styles';

const products: React.FC = () => {
  const {
    state: { products },
  } = ProductsController();

  const tabs = [
    {
      key: 'Produtos',
      description: 'Produtos',
      renderComponentDesktop: (
        <PaginatedItems
          itemsPerPage={5}
          items={products}
          component={ProductsTabOption}
        />
      ),
      renderComponentMobile: <ProductsTabOption list={products} />,
    },
    {
      key: 'Higiene',
      description: 'Higiene',
      renderComponentDesktop: (
        <PaginatedItems
          itemsPerPage={5}
          items={products}
          component={HygieneTabOption}
        />
      ),
      renderComponentMobile: <HygieneTabOption list={products} />,
    },
    {
      key: 'Barbearia',
      description: 'Barbearia',
      renderComponentDesktop: (
        <PaginatedItems
          itemsPerPage={5}
          items={products}
          component={BarberShopTabOption}
        />
      ),
      renderComponentMobile: <BarberShopTabOption list={products} />,
    },
  ];
  return (
    <MainLayout>
      <S.TitleOut>Escolha os Produtos</S.TitleOut>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Escolha os Produtos</S.Title>
          <Tabs tabConfig={tabs} defaultSelectedTab="Produtos" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default products;
