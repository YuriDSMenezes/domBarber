import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { ImgAboutApp } from '../../../public/assets';

import * as S from './styles';

const aboutapp: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout>
        <S.Content>
          <S.ImgContainer>
            <img src={ImgAboutApp.src} alt="About" />
          </S.ImgContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default aboutapp;
