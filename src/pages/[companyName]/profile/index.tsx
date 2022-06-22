import { PaginatedItems } from 'components/Pagination';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';

import * as S from './styles';

const professionals: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Minha conta</S.Title>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default professionals;
