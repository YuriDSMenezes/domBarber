import Button from 'components/Button';
import TagButton from 'components/TagButton';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional, ProfessionalService } from 'models/types/professional';
import { Service } from 'models/types/service';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import * as S from './styles';

const confirmprofessional: React.FC = () => {
  const {
    states: { professionals, services, company },
  } = useGlobal();
  const {
    isReady,
    query: { id },
    push,
  } = useRouter();
  const [professional, setProfessional] = useState<Professional>();
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  useEffect(() => {
    if (isReady) {
      const getProfessional = professionals.find(
        (professional: Professional) => professional.id === id,
      );
      setProfessional(getProfessional);
    }
  }, [isReady]);

  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const handleGetService = (value: ProfessionalService) => {
    const getService = services.find(
      (service: Service) => service.id === value.serviceId,
    );
    setSelectedService(getService);
  };

  const handleClickCard = () => {
    const lastItemCart = cart[cart.length - 1];
    const newProfessional = {
      ...lastItemCart,
      professional,
      professionalId: professional?.id,
      service: selectedService,
      serviceId: selectedService?.id,
    };
    cart.pop();
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
      <BottomSheetFixedLayout
        theme="dark"
        imgSrc={
          professional?.image ||
          'https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000'
        }
      >
        <S.Content>
          <S.Title>{professional?.name}</S.Title>
          <StarRatingComponent
            name="ratingProfessional"
            value={Math.round(Math.random() * 5)}
          />
          <S.ViewMoreLink>Avaliações</S.ViewMoreLink>
          <S.ProfessionalDescriptionText>
            Somos uma Barbearia focada na melhor experência que podemos oferecer
          </S.ProfessionalDescriptionText>
          <S.ChooseOneEspecialityText>
            Escolha uma Especialidade:
          </S.ChooseOneEspecialityText>
          <S.EspecialityOptionsContainer>
            {professional?.services.map((service: ProfessionalService) => (
              <TagButton
                selected={selectedService?.id === service.serviceId}
                text={service.name}
                onClick={() => handleGetService(service)}
              />
            ))}
          </S.EspecialityOptionsContainer>
          <Button text="Agendar" onClick={handleClickCard} />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default confirmprofessional;
