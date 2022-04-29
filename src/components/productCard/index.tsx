import { Product } from 'models/types/product';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import * as S from './styles';

interface ProductCardProps {
  list: Array<Product>;
}

const ProductCard: React.FC<ProductCardProps> = ({ list }) => {
  const { push } = useRouter();
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [{}];
  });

  const handleClickCard = (product: Product) => {
    setCart((oldState: any) => [...oldState, { product }]);
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        '@domBarber:cart',
        JSON.stringify([...cart, product]),
      );
    }
    push({
      pathname: `/ps1/chooseprofessional`,
    });
  };

  return (
    <>
      {list?.map((product, index) => (
        <S.Container key={index} onClick={() => handleClickCard(product)}>
          <S.ImgContainer>
            <img
              src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg?size=626&ext=jpg&ga=GA1.2.1657761803.1635638400"
              alt="Imagem do Serviço"
            />
          </S.ImgContainer>
          <S.InformationContainer>
            <S.TitleAndPriceText>
              <S.ProductTitle>{product.description}</S.ProductTitle>
              <S.ProductPrice>{product.price}</S.ProductPrice>
            </S.TitleAndPriceText>
            <S.AddressText>
              São Miguel, São PauloRua 22, zona sul PauloRua 22, zona sul
            </S.AddressText>
            <S.TimeAndPointsText>{`Tempo: 20 min  | Acumule ${product.pointsGenerated} pontos`}</S.TimeAndPointsText>
          </S.InformationContainer>
        </S.Container>
      ))}
    </>
  );
};

export default ProductCard;
