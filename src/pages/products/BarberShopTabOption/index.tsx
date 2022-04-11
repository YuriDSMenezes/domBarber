import ProductOrServiceCard from 'components/ProsuctOrServiceCard';
import React from 'react';

import * as S from './styles';

const BarberShopTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ProductsContainer>
        <ProductOrServiceCard title="Pente" />
        <ProductOrServiceCard title="Pente" />
        <ProductOrServiceCard title="Pente" />
        <ProductOrServiceCard title="Pente" />
        <ProductOrServiceCard title="Pente" />
        <ProductOrServiceCard title="Pente" />
        <ProductOrServiceCard title="Pente" />
        <ProductOrServiceCard title="Pente" />
      </S.ProductsContainer>
    </S.Container>
  );
};

export default BarberShopTabOption;
