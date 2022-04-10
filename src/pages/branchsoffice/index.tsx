import React from 'react';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';

import Input from 'components/Input';
import * as S from './styles';
import BranchOfficeCard from './BranchOfficeCard';

const branchsoffice: React.FC = () => {
  return (
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
  );
};

export default branchsoffice;
