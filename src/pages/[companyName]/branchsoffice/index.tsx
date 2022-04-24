import React from 'react';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';

import Input from 'components/Input';
import MainLayout from 'layouts/MainLayout';
import * as S from './styles';
import BranchOfficeCard from './BranchOfficeCard';

const branchsoffice: React.FC = () => {
  return (
    <MainLayout>
      <S.TitleOut>Filiais</S.TitleOut>
      <S.SubTitleOut>Conheça nossas Filiais</S.SubTitleOut>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Filiais</S.Title>
          <S.SubTitle>Conheça nossas Filiais</S.SubTitle>
          <Input search secondary placeholder="Pesquisar local" />
          <S.BranchsOfficeListContainer>
            <BranchOfficeCard />
            <BranchOfficeCard />
            <BranchOfficeCard />
            <BranchOfficeCard />
            <BranchOfficeCard />
            <BranchOfficeCard />
            <BranchOfficeCard />
          </S.BranchsOfficeListContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default branchsoffice;
