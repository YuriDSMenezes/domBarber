import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import KitCard from './KitCard';

import * as S from './styles';

const choosekit: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark" mediumSize>
        <S.Content>
          <S.Title>Kit Barba Total</S.Title>
          <S.Description>
            Defina a data e hora para cada serviço do seu Kit
          </S.Description>
          <S.KitsContainer>
            <KitCard />
            <KitCard />
          </S.KitsContainer>
          <Button text="Confirmar Agendamento" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default choosekit;
