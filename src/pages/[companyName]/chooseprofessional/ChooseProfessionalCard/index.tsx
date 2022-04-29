import TagButton from 'components/TagButton';
import { Professional } from 'models/types/professional';
import React, { HTMLAttributes } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import * as S from './styles';

interface ChooseProfessionalProps extends HTMLAttributes<HTMLDivElement> {
  professional: Professional;
  onClick: () => void;
}

const ChooseProfessionalCard: React.FC<ChooseProfessionalProps> = ({
  name,
  image,
  services,
  onClick,
}: Professional) => {
  return (
    <S.Container onClick={onClick}>
      <S.Content>
        <S.ImgNameAndRatingProfessional>
          <S.ProfessionalImgContainer>
            <img
              src={
                image ||
                'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
              }
              alt={`Foto de perfil do profissional ${name}`}
            />
          </S.ProfessionalImgContainer>
          <S.ProfessionalName>{name}</S.ProfessionalName>
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
            {services?.map(service => (
              <TagButton text={service?.name} size="small" />
            ))}
          </S.EspecialitiesContainer>
        </S.EspecialistContainer>
      </S.Content>
    </S.Container>
  );
};

export default ChooseProfessionalCard;
