import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Product } from 'models/types/product';
import { useGlobal } from 'hooks/Global';
import * as S from './styles';

interface ProductsProps {
  list: Array<Product>;
}

const ProductsCard: React.FC<ProductsProps> = ({ list }) => {
  const { push, isReady } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const handleClickCard = (product: Product, index: number) => {
    const newProduct = {
      product,
      productId: product.id,
    };
    const newCart = [...cart, newProduct];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }

    push({
      pathname: `/[companyName]/chooseproduct/[index]`,
      query: { companyName: company?.app?.url, index },
    });
  };

  return (
    <S.Container>
      {list?.map((product: Product, index: number) => (
        <S.Content key={index} onClick={() => handleClickCard(product, index)}>
          <img src={product.images[0]?.url} alt={product.name} />
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
