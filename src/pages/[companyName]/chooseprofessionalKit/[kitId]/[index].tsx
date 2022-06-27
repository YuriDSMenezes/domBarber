/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal } from 'hooks';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ChooseProfessionalCard from '../../../../components/ChooseProfessionalCard';

import * as S from '../styles';

const chooseprofessional: React.FC = () => {
  const { push, query, isReady } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const { kitId, index, serviceIndex } = query;
  const {
    states: { professionals },
  } = useGlobal();
  const [selectedItemCart, setSelectedItemCart] = useState();
  const [professionalsByService, setProfessionalsByService] = useState<
    Array<Professional>
  >([]);
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');
      if (cart) {
        const parsedCart = JSON.parse(cart);
        const getCart = parsedCart[Number(index)];
        setSelectedItemCart(getCart);

        const getProfessionalsByService = professionals.filter(professional =>
          getCart?.service.serviceIds.map(
            (item: any) => item === professional?.serviceIds,
          ),
        );
        setProfessionalsByService(getProfessionalsByService);
        return parsedCart;
      }
    }

    return [];
  });

  const handleClickCard = (professional: Professional) => {
    cart.splice(Number(index), 1);
    selectedItemCart.service.services[serviceIndex] = {
      ...selectedItemCart?.service?.services[serviceIndex],
      professional,
      professionalId: professional.id,
    };

    const newCart = [...cart, selectedItemCart];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
    if (isReady) {
      push({
        pathname: `/[companyName]/schedulekit/[kitId]/[index]`,
        query: {
          companyName: company?.app?.name,
          kitId,
          index,
          serviceIndex,
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
