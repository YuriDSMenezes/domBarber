import ProductCard from 'components/productCard';
import { Service } from 'models/types/service';
import React from 'react';

import * as S from './styles';

interface ProductsProps {
  list: Array<Service>;
}

const ProductsTabOption: React.FC<ProductsProps> = ({ list }) => {
  return (
    <S.Container>
      <S.ProductsContainer>
        <ProductCard list={list} />
      </S.ProductsContainer>
    </S.Container>
  );
};

export default ProductsTabOption;
