import ProductOrServiceCard from 'components/ProsuctOrServiceCard';
import React from 'react';

import * as S from './styles';

const HygieneTabOption: React.FC = () => {
  return (
    <S.Container>
      <S.ProductsContainer>
        <ProductOrServiceCard title="Shampoo" />
        <ProductOrServiceCard title="Shampoo" />
        <ProductOrServiceCard title="Shampoo" />
        <ProductOrServiceCard title="Shampoo" />
        <ProductOrServiceCard title="Shampoo" />
        <ProductOrServiceCard title="Shampoo" />
        <ProductOrServiceCard title="Shampoo" />
        <ProductOrServiceCard title="Shampoo" />
      </S.ProductsContainer>
    </S.Container>
  );
};

export default HygieneTabOption;
