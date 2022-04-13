import TagButton from 'components/TagButton';
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

import * as S from './styles';

const ChooseProfessionalCard: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.ImgNameAndRatingProfessional>
          <S.ProfessionalImgContainer>
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Paulo R."
            />
          </S.ProfessionalImgContainer>
          <S.ProfessionalName>Paulo R.</S.ProfessionalName>
          <StarRatingComponent
            name="ratingProfessional"
            value={Math.round(Math.random() * 5)}
          />
        </S.ImgNameAndRatingProfessional>
        <S.EspecialistContainer>
          <S.ProfessionalEspecialistText>
            Especialidades:
          </S.ProfessionalEspecialistText>
          <S.EspecialitiesContainer>
            <TagButton text="Barba + Cabelo" size="small" />
            <TagButton text="Barba + Cabelo" size="small" />
            <TagButton text="Barba + Cabelo" size="small" />
            <TagButton text="Barba + Cabelo" size="small" />
            <TagButton text="Barba + Cabelo" size="small" />
          </S.EspecialitiesContainer>
        </S.EspecialistContainer>
      </S.Content>
    </S.Container>
  );
};

export default ChooseProfessionalCard;
