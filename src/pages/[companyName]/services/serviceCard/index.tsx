import React from 'react';
import { useRouter } from 'next/router';
import { Service } from 'models/types/service';
import { useGlobal } from 'hooks';
import * as S from './styles';

interface ServiceProps {
  list: Array<Service>;
}

const ServiceCard: React.FC<ServiceProps> = ({ list }) => {
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();

  const handleClickCard = (service: Service) => {
    push({
      query: { id: service.id, companyName: company?.app?.url },
      pathname: `/[companyName]/confirmservice`,
    });
  };

  return (
    <S.Container>
      {list?.map((service, index) => (
        <S.Content key={index} onClick={() => handleClickCard(service)}>
          <img src={service?.images[0]?.url} alt="Paulo R." />
          <S.ServiceInformationContainer>
            <S.ServiceDescription>
              <S.ServiceName>{service?.name}</S.ServiceName>
              <S.ServiceTime>Tempo: {service?.runtime} min</S.ServiceTime>
              <S.ServicePoints>
                Acumule {service?.pointsGenerated} pontos
              </S.ServicePoints>
            </S.ServiceDescription>
            <S.ServicePrice>
              <S.SignMoney>R$</S.SignMoney>
              <S.Price>{service?.price}</S.Price>
            </S.ServicePrice>
          </S.ServiceInformationContainer>
        </S.Content>
      ))}
    </S.Container>
  );
};

export default ServiceCard;
