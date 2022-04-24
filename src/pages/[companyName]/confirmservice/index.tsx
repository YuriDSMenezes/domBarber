import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';

import * as S from './styles';

const confirmservice: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark" mediumSize>
        <S.Content>
          <S.Title>Barboterapia</S.Title>
          <S.ServiceTimeText>Tempo: 20 min</S.ServiceTimeText>
          <S.ServicePointsText>Acumule 20 pontos</S.ServicePointsText>
          <S.ServicePriceText>R$ 19,90</S.ServicePriceText>
          <S.ServiceDescriptionText>
            Toalha quente para dilatar os poros e fortalecedor para estimular o
            crescimento.
          </S.ServiceDescriptionText>
          <S.ChooseOneProfessionalText>
            Escolha um Profissional:
          </S.ChooseOneProfessionalText>
          <S.ProfessionalOptions>
            <S.ProfessionalOption selected>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Paulo R."
              />
            </S.ProfessionalOption>
            <S.ProfessionalOption>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Paulo R."
              />
            </S.ProfessionalOption>
            <S.ProfessionalOption>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Paulo R."
              />
            </S.ProfessionalOption>
            <S.ProfessionalOption>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Paulo R."
              />
            </S.ProfessionalOption>
            <S.ProfessionalOption>
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Paulo R."
              />
            </S.ProfessionalOption>
          </S.ProfessionalOptions>
          <Button text="Agendar" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default confirmservice;
