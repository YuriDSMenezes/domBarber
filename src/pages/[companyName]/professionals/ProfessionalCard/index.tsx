import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import * as S from './styles';

interface ProfessionalsProps {
  list: Array<Professional>;
}

const ProfessionalCard: React.FC<ProfessionalsProps> = ({ list }) => {
  const { push } = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [cart, setCart] = useState<Array<{}>>(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const handleClickCard = (professional: Professional) => {
    const lastItem = cart.pop();
    const newProfessional = {
      ...lastItem,
      professional,
      pofessionalId: professional.id,
    };
    const newCart = [...cart, newProfessional];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
    push({
      pathname: `/ps1/schedule`,
    });
  };

  return (
    <S.Container>
      {list?.map((professional, index) => (
        <S.Content key={index} onClick={() => handleClickCard(professional)}>
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Paulo R."
          />
          <S.ProfessionalInformationContainer>
            <S.ProfessionalName>{professional.name}</S.ProfessionalName>
            <S.ProfessionalRatingContainer>
              <StarRatingComponent
                name="ratingProfessional"
                value={Math.round(Math.random() * 5)}
              />
            </S.ProfessionalRatingContainer>
          </S.ProfessionalInformationContainer>
        </S.Content>
      ))}
    </S.Container>
  );
};

export default ProfessionalCard;
