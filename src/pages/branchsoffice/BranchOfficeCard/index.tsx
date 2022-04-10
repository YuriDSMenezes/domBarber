import React from 'react';

import * as S from './styles';

const BranchOfficeCard: React.FC = () => {
  return (
    <S.Container>
      <img src="https://barbeariabrothersbh.com.br/wp-content/uploads/2021/12/IMG_7144-1024x819.jpg" />
      <S.BrachInformationContainer>
        <S.BranchOfficeName>Dombarber</S.BranchOfficeName>
        <S.BranchOfficeAddress>
          São Miguel, São Paulo Rua 22, zona sul
        </S.BranchOfficeAddress>
      </S.BrachInformationContainer>
    </S.Container>
  );
};

export default BranchOfficeCard;
