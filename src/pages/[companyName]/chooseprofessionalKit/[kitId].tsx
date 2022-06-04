/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Company } from 'models/company';
import { Professional } from 'models/types/professional';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ChooseProfessionalCard from '../../../components/ChooseProfessionalCard';

import * as S from './styles';

const chooseprofessional: React.FC = () => {
  const { push, query, isReady } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const idKit = query.kitId;
  const {
    states: { professionals },
  } = useGlobal();
  const [service, setService] = useState<Service>();
  const [professionalsByService, setProfessionalsByService] = useState<
    Array<Professional>
  >([]);
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        const parsedCart = JSON.parse(cart);
        const {
          service: { services, serviceIds },
        } = parsedCart[parsedCart.length - 1];
        const getProfessionalsByService = professionals.filter(professional =>
          professional.serviceIds.includes('XE4iGeaeKZe48FkOVAvk'),
        );
        const getService = services.find(
          (service: any) => service.id === query.kitId,
        );
        setProfessionalsByService(getProfessionalsByService);
        setService(getService);
        return parsedCart;
      }
    }

    return [];
  });

  const handleClickCard = (professional: Professional) => {
    const lastItem = cart.pop();
    const serviceIndex = lastItem.service.services.findIndex(
      (service: any) => service.id === query.kitId,
    );

    lastItem.service.services[serviceIndex] = {
      ...lastItem.service.services[serviceIndex],
      professional,
      professionalId: professional.id,
    };

    const newCart = [...cart, lastItem];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
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
