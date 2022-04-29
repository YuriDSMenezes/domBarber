import { PaginatedItems } from 'components/Pagination';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import ProfessionalCard from './ProfessionalCard';
import { ProfessionalsController } from './professionals.controller';

import * as S from './styles';

const professionals: React.FC = () => {
  const {
    state: { professionals },
  } = ProfessionalsController();

  return (
    <MainLayout>
      <S.TitleOut>Profissionais</S.TitleOut>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Profissionais</S.Title>
          <S.ProfissionalsContainer>
            <S.DesktopProfessionals>
              <PaginatedItems
                items={professionals}
                itemsPerPage={5}
                component={ProfessionalCard}
              />
            </S.DesktopProfessionals>
            <S.MobileProfessionals>
              <ProfessionalCard list={professionals} />
            </S.MobileProfessionals>
          </S.ProfissionalsContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default professionals;
