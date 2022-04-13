import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import ChooseProfessionalCard from './ChooseProfessionalCard';

import * as S from './styles';

const chooseprofessional: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Escolha um Profissional</S.Title>
          <S.ChooseProfessionalContainer>
            <ChooseProfessionalCard />
            <ChooseProfessionalCard />
            <ChooseProfessionalCard />
            <ChooseProfessionalCard />
          </S.ChooseProfessionalContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default chooseprofessional;
