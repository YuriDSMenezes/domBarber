import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { DomBarberLogo } from '../../../public/assets';

import * as S from './styles';

const about: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Sobre Nós</S.Title>
          <S.ImgContainer>
            <img src={DomBarberLogo.src} alt="Logo Dombarber" />
          </S.ImgContainer>
          <S.Text>
            Somos uma Barbearia focada na melhor experência que podemos oferecer
          </S.Text>
          <S.Text>Nossos Valores</S.Text>
          <S.Text>
            Somos uma Barbearia focada na melhor experência que podemos oferecer
          </S.Text>
          <S.Text>Objetivos</S.Text>
          <S.Text>
            Somos uma Barbearia focada na melhor experência que podemos oferecer
          </S.Text>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default about;
