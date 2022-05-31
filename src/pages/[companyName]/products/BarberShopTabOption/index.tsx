import ServiceCard from 'components/ServiceCard';
import { Product } from 'models/types/product';
import React from 'react';

import * as S from './styles';

interface ProductProps {
  list: Array<Product>;
}

const BarberShopTabOption: React.FC<ProductProps> = ({ list }) => {
  return (
    <S.Container>
      <S.ProductsContainer>
        <ServiceCard list={list} />
      </S.ProductsContainer>
    </S.Container>
  );
};

export default BarberShopTabOption;
