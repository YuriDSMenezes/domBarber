import ProductOrServiceCard from 'components/ProsuctOrServiceCard';
import { Service } from 'models/types/service';
import React from 'react';

import * as S from './styles';

interface MobileProductsProps {
  services: Array<Service>;
}

const ProductsTabOption: React.FC<MobileProductsProps> = ({ services }) => {
  return (
    <S.Container>
      <S.ProductsContainer>
        {services.map(service => (
          <ProductOrServiceCard title="Pente" />
        ))}
      </S.ProductsContainer>
    </S.Container>
  );
};

export default ProductsTabOption;
