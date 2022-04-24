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
    state: { services },
  } = ProductsController();

  const tabs = [
    {
      key: 'Produtos',
      description: 'Produtos',
      renderComponent: <ProductsTabOption services={services} />,
    },
    {
      key: 'Higiene',
      description: 'Higiene',
      renderComponent: <HygieneTabOption />,
    },
    {
      key: 'Barbearia',
      description: 'Barbearia',
      renderComponent: <BarberShopTabOption />,
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
