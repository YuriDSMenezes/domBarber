import React from 'react';
import { useRouter } from 'next/router';
import { Product } from 'models/types/product';
import * as S from './styles';

interface ProductsProps {
  list: Array<Product>;
}

const ProductsCard: React.FC<ProductsProps> = ({ list }) => {
  const { push, isReady } = useRouter();
  const handleClickCard = (professional: Product) => {
    push({
      query: { id: professional.id },
      pathname: `/ps1/cart`,
    });
  };

  return (
    <S.Container>
      {list?.map((product: Product, index: number) => (
        <S.Content key={index} onClick={() => handleClickCard(product)}>
          <img src={product.images[0]} alt={product.name} />
          <S.ServiceInformationContainer>
            <S.ServiceDescription>
              <S.ServiceName>{product.name}</S.ServiceName>
              <S.ServicePoints>
                Acumule {product.pointsGenerated} pontos
              </S.ServicePoints>
            </S.ServiceDescription>
            <S.ServicePrice>
              <S.SignMoney>R$</S.SignMoney>
              <S.Price>{product.price}</S.Price>
            </S.ServicePrice>
          </S.ServiceInformationContainer>
        </S.Content>
      ))}
    </S.Container>
  );
};

export default ProductsCard;
