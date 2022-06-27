import Button from 'components/Button';
import TagButton from 'components/TagButton';
import { createHeaders } from 'helpers';
import { getCookies } from 'helpers/getCookies';
import { useGlobal } from 'hooks/Global';
import { useCart } from 'hooks';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { Professional, ProfessionalService } from 'models/types/professional';
import { Service } from 'models/types/service';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import api from 'services/api';

import * as S from './styles';

interface ConfirmProfessionalProps {
  professional: Professional;
  services: Array<Service>;
}

const confirmprofessional: React.FC<ConfirmProfessionalProps> = ({
  professional,
  services,
}) => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();
  const { addProfessionalWithService } = useCart();
  const [selectedService, setSelectedService] = useState<Service>();

  const handleGetService = (value: ProfessionalService) => {
    const getService = services.find(
      (service: Service) => service.id === value.serviceId,
    );
    setSelectedService(getService);
  };

  const handleClickCard = () => {
    if (selectedService) {
      addProfessionalWithService(professional, selectedService);
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

export const getServerSideProps: GetServerSideProps = async context => {
  const { tokenWithoutQuotes, parsedClient, paramsGetAuth } =
    getCookies(context);
  const headers = createHeaders(tokenWithoutQuotes, parsedClient);
  const professional = await api.get(`professional/${context.query.id}`, {
    headers,
    params: paramsGetAuth,
  });
  const services = await api.get(`service`, {
    headers,
    params: paramsGetAuth,
  });
  return {
    props: {
      professional: professional.data,
      services: services.data,
    },
  };
};

export default confirmprofessional;
