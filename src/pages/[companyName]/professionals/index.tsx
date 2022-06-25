import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { GetServerSideProps } from 'next';
import React from 'react';
import { getCookies } from 'cookies-next';
import api from 'services/api';
import ProfessionalCard from './ProfessionalCard';

import * as S from './styles';

const professionals: React.FC = ({ professionals }) => {
  return (
    <MainLayout>
      <S.TitleOut>Lista de Profissionais</S.TitleOut>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Lista de Profissionais</S.Title>
          <S.ProfissionalsContainer>
            <S.DesktopProfessionals>
              <ProfessionalCard list={professionals} />
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = getCookies({ req, res });
  const token = cookies['@domBarber:token'];
  const client = cookies['@domBarber:client'];
  const company = cookies['@domBarber:company'];
  const parsedClient = JSON.parse(client);
  const companyId = company.replace(/"/g, '');
  const paramsGetAuth = new URLSearchParams([['companyId', companyId]]);
  const professionals = await api.get('professional', {
    headers: {
      Authoriazation: `Bearer ${token}`,
      ProjectId: parsedClient?.projectId,
    },
    params: paramsGetAuth,
  });

  return {
    props: { professionals: professionals.data },
  };
};

export default professionals;
