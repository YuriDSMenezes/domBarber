/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal, useCart } from 'hooks';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import ChooseProfessionalCard from '../../../components/ChooseProfessionalCard';

import * as S from './styles';

const chooseprofessional: React.FC = () => {
  const { push, query, isReady } = useRouter();
  const {
    states: { company, professionals },
  } = useGlobal();
  const { getLastItemCart, addProfessionalKit } = useCart();

  const [professionalsByService, setProfessionalsByService] = useState<
    Array<Professional>
  >([]);

  const idKit = query.kitId;

  useEffect(() => {
    const service = getLastItemCart?.service;
    if (service) {
      const serviceIds = service.serviceIds.map(item => item);
      const getProfessionalsByService = professionals.filter(professional =>
        professional.serviceIds.filter(item => serviceIds.includes(item)),
      );
      setProfessionalsByService(getProfessionalsByService);
    }
  }, []);

  const handleClickCard = (professional: Professional) => {
    addProfessionalKit(professional, idKit);
    if (isReady) {
      push({
        pathname: `/[companyName]/schedulekit/[kitId]`,
        query: {
          companyName: company?.app?.name,
          kitId: idKit,
        },
      });
    }
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

export default chooseprofessional;
