import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import ProfessionalCard from './ProfessionalCard';

import * as S from './styles';

const professionals: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Profissionais</S.Title>
          <S.ProfissionalsContainer>
            <ProfessionalCard />
            <ProfessionalCard />
            <ProfessionalCard />
            <ProfessionalCard />
            <ProfessionalCard />
            <ProfessionalCard />
          </S.ProfissionalsContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default professionals;
