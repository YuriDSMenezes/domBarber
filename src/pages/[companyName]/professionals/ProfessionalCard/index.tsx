import React from 'react';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import StarRatingComponent from 'react-star-rating-component';
import * as S from './styles';

interface ProfessionalsProps {
  list: Array<Professional>;
}

const ProfessionalCard: React.FC<ProfessionalsProps> = ({ list }) => {
  const { push, isReady } = useRouter();
  const handleClickCard = (professional: Professional) => {
    push({
      query: { id: professional.id },
      pathname: `/ps1/confirmprofessional`,
    });
  };

  return (
    <S.Container>
      {list?.map((professional, index) => (
        <S.Content key={index} onClick={() => handleClickCard(professional)}>
          <img src={professional.image} alt="Paulo R." />
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
