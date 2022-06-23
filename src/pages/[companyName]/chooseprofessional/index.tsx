/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { setCookies, getCookie, getCookies } from 'cookies-next';
import { GetServerSideProps } from 'next';
import api from 'services/api';
import ChooseProfessionalCard from '../../../components/ChooseProfessionalCard';

import * as S from './styles';

const chooseprofessional: React.FC = ({ professionals }) => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();
  const [professionalsByService, setProfessionalsByService] = useState<
    Array<Professional>
  >([]);
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');
      if (cart) {
        const parsedCart = JSON.parse(cart);
        const { serviceId } = parsedCart[parsedCart.length - 1];
        const getProfessionalsByService = professionals.filter(professional =>
          professional.serviceIds.includes(serviceId),
        );
        setProfessionalsByService(getProfessionalsByService);
        return parsedCart;
      }
    }

    return [];
  });

  const handleClickCard = (professional: Professional) => {
    const lastItem = cart.pop();
    const newProfessional = {
      ...lastItem,
      professional,
      professionalId: professional.id,
    };
    const newCart = [...cart, newProfessional];
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
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
            {professionalsByService?.map((professional, index) => (
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = getCookies({ req, res });
  const token = cookies['@domBarber:token'];
  const client = cookies['@domBarber:client'];
  const company = cookies['@domBarber:company'];
  const parsedClient = JSON.parse(client);
  const companyId = company.replace(/"/g, '');
  const paramsGetAuth = new URLSearchParams([['companyId', companyId]]);
  const professionals = await api.get(`professional`, {
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

export default chooseprofessional;
