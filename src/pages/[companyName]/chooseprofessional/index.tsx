/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import React from 'react';
import nookies from 'nookies';
import { GetServerSideProps } from 'next';
import api from 'services/api';
import { useCart } from 'hooks/UseCart';
import ChooseProfessionalCard from '../../../components/ChooseProfessionalCard';

import * as S from './styles';

interface ProfessionalProps {
  professionals: Array<Professional>;
}

const chooseprofessional: React.FC<ProfessionalProps> = ({ professionals }) => {
  const {
    states: { company },
  } = useGlobal();
  const { addProfessional } = useCart();
  const { push } = useRouter();

  const handleClickCard = (professional: Professional) => {
    addProfessional(professional);
    push({
      pathname: `/[companyName]/schedule`,
      query: { companyName: company?.app?.url },
    });
  };

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Escolha um Profissional</S.Title>
          <S.ChooseProfessionalContainer>
            {professionals?.map((professional, index) => (
              <ChooseProfessionalCard
                key={index}
                professional={professional}
                onClick={() => {
                  handleClickCard(professional);
                }}
              />
            ))}
          </S.ChooseProfessionalContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = nookies.get(context);
  const token = cookies['@domBarber:token'];
  const client = cookies['@domBarber:client'];
  const company = cookies['@domBarber:company'];
  const parsedClient = JSON.parse(client);
  const companyId = company.replace(/"/g, '');
  const tokenWithoutQuotes = token.replace(/"/g, '');
  const paramsGetAuth = new URLSearchParams([['companyId', companyId]]);
  const { serviceId } = context.query;
  const professionals = await api.get(`professional`, {
    headers: {
      Authorization: `Bearer ${tokenWithoutQuotes}`,
      ProjectId: parsedClient?.projectId,
    },
    params: paramsGetAuth,
  });
  if (typeof serviceId === 'string') {
    const professionalsByServiceId = professionals.data.filter(
      (professional: Professional) =>
        professional.serviceIds.includes(serviceId),
    );
    return {
      props: { professionals: professionalsByServiceId },
    };
  }
  return { props: { professionals: professionals.data } };
};

export default chooseprofessional;
