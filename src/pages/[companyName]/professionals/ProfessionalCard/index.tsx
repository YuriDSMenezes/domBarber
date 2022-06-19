import React from 'react';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import StarRatingComponent from 'react-star-rating-component';
import { useGlobal } from 'hooks/Global';
import * as S from './styles';

interface ProfessionalsProps {
  list: Array<Professional>;
}

const ProfessionalCard: React.FC<ProfessionalsProps> = ({ list }) => {
  const { push, isReady } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  const handleClickCard = (professional: Professional) => {
    push({
      query: { id: professional.id, companyName: company?.app?.url },
      pathname: `/[companyName]/confirmprofessional`,
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
