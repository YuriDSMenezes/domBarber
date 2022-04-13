import Button from 'components/Button';
import TagButton from 'components/TagButton';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

import * as S from './styles';

const confirmprofessional: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout
        theme="dark"
        mediumSize
        imgSrc="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
      >
        <S.Content>
          <S.Title>Paulo Ribeiro</S.Title>
          <StarRatingComponent
            name="ratingProfessional"
            value={Math.round(Math.random() * 5)}
          />
          <S.ViewMoreLink>Avaliações</S.ViewMoreLink>
          <S.ProfessionalDescriptionText>
            Somos uma Barbearia focada na melhor experência que podemos oferecer
          </S.ProfessionalDescriptionText>
          <S.ChooseOneEspecialityText>
            Escolha uma Especialidade:
          </S.ChooseOneEspecialityText>
          <S.EspecialityOptionsContainer>
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
            <TagButton text="Barba + Cabelo" />
          </S.EspecialityOptionsContainer>
          <Button text="Agendar" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default confirmprofessional;
