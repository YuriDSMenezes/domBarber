import Tabs from 'components/Tabs';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import BarberShopTabOption from './BarberShopTabOption';
import HygieneTabOption from './HygieneTabOption';
import ProductsTabOption from './ProductsTabOption';

import * as S from './styles';

const products: React.FC = () => {
  const tabs = [
    {
      key: 'Produtos',
      description: 'Produtos',
      renderComponent: <ProductsTabOption />,
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
