import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import * as S from './styles';

const ProfessionalCard: React.FC = () => {
  return (
    <S.Container>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <S.ProfessionalInformationContainer>
        <S.ProfessionalName>Paulo R.</S.ProfessionalName>
        <S.ProfessionalRatingContainer>
          <StarRatingComponent
            name="ratingProfessional"
            value={Math.round(Math.random() * 5)}
          />
        </S.ProfessionalRatingContainer>
      </S.ProfessionalInformationContainer>
    </S.Container>
  );
};

export default ProfessionalCard;
