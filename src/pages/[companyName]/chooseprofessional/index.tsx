/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ChooseProfessionalCard from '../../../components/ChooseProfessionalCard';

import * as S from './styles';

const chooseprofessional: React.FC = () => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();
  const {
    states: { professionals },
  } = useGlobal();
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
    setCart(newCart);
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

export default chooseprofessional;
