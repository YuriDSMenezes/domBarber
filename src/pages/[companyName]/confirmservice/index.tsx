import Button from 'components/Button';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional } from 'models/types/professional';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import * as S from './styles';

const confirmservice: React.FC = () => {
  const {
    states: { professionals, services, company },
  } = useGlobal();
  const {
    isReady,
    query: { id },
    push,
  } = useRouter();
  const [service, setService] = useState<Service>();
  const [selectedProfessional, setSelectedProfessional] =
    useState<Professional>(professionals[0]);
  const [professionalsByService, setProfessionalByService] =
    useState<Array<Professional>>();

  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  useEffect(() => {
    if (isReady) {
      const getService = services.find((service: Service) => service.id === id);
      setService(getService);
      const getProfessionalsByService = professionals.filter(
        (professional: Professional) =>
          professional.serviceIds.includes(getService?.id),
      );
      setProfessionalByService(getProfessionalsByService);
    }
  }, [isReady]);

  const handleGetService = (value: Professional) => {
    const getProfessional = professionals.find(
      (professional: Professional) => professional.id === value.id,
    );
    setSelectedProfessional(getProfessional);
  };

  const handleClickCard = () => {
    const newProfessional = {
      professional: selectedProfessional,
      professionalId: selectedProfessional?.id,
      service,
      serviceId: service?.id,
    };
    cart.push(newProfessional);
    setCart(cart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(cart));
    }

    push({
      pathname: `/[companyName]/schedule`,
      query: { companyName: company?.app?.url },
    });
  };

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark" mediumSize>
        <S.Content>
          <S.Title>{service?.name}</S.Title>
          <S.ServiceTimeText>Tempo: {service?.runtime} min</S.ServiceTimeText>
          <S.ServicePointsText>
            Acumule {service?.pointsGenerated} pontos
          </S.ServicePointsText>
          <S.ServicePriceText>
            {currencyFormat({
              value: Number(service?.price),
              currencyPrefix: 'R$',
            })}
          </S.ServicePriceText>
          <S.ServiceDescriptionText>
            {service?.description}
          </S.ServiceDescriptionText>
          <S.ChooseOneProfessionalText>
            Escolha um Profissional:
          </S.ChooseOneProfessionalText>
          <S.ProfessionalOptions>
            {professionalsByService?.map(professional => (
              <S.ProfessionalOption
                selected
                onClick={() => handleGetService(professional)}
              >
                <img
                  src={
                    professional.image ||
                    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  }
                  alt={professional.name}
                />
              </S.ProfessionalOption>
            ))}
          </S.ProfessionalOptions>
          <Button text="Agendar" onClick={handleClickCard} />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default confirmservice;
