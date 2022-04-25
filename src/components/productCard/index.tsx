import { Service } from 'models/types/service';
import React from 'react';

import * as S from './styles';

interface ProductCardProps {
  list: Array<Service>;
}

const ProductCard: React.FC<ProductCardProps> = ({ list }) => {
  return (
    <>
      {list?.map(item => (
        <S.Container>
          <S.ImgContainer>
            <img
              src="https://img.freepik.com/fotos-gratis/cliente-fazendo-o-corte-de-cabelo-em-um-salao-de-barbearia_1303-20861.jpg?size=626&ext=jpg&ga=GA1.2.1657761803.1635638400"
              alt="Imagem do Serviço"
            />
          </S.ImgContainer>
          <S.InformationContainer>
            <S.TitleAndPriceText>
              <S.ProductTitle>{item.description}</S.ProductTitle>
              <S.ProductPrice>{item.price}</S.ProductPrice>
            </S.TitleAndPriceText>
            <S.AddressText>
              São Miguel, São PauloRua 22, zona sulPauloRua 22, zona sul
            </S.AddressText>
            <S.TimeAndPointsText>{`Tempo: 20 min  | Acumule 20 pontos`}</S.TimeAndPointsText>
          </S.InformationContainer>
        </S.Container>
      ))}
    </>
  );
};

export default ProductCard;
