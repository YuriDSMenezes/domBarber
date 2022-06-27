/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGlobal, useCart } from 'hooks';
import { Service } from 'models/types/service';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { ComponentType } from 'react';

import * as S from './styles';

interface ServiceCardProps {
  list: Array<Service>;
  isKit?: boolean;
}

const ServiceCard: ComponentType<ServiceCardProps> = ({ list, isKit }) => {
  const {
    states: { company },
  } = useGlobal();
  const { addService } = useCart();
  const { push, query } = useRouter();
  const { professionalId = {} } = query;

  const handleClickCard = (service: Service) => {
    addService(service);
    if (isKit) {
      push({
        pathname: `/[companyName]/choosekit`,
        query: { companyName: company?.app?.url },
      });
    } else {
      push(
        professionalId
          ? {
              pathname: `/[companyName]/schedule`,
              query: { companyName: company?.app?.url },
            }
          : {
              pathname: `/[companyName]/chooseprofessional`,
              query: { companyName: company?.app?.url },
            },
      );
    }
  };

  return (
    <>
      {list?.map((item, index) => (
        <S.Container key={index} onClick={() => handleClickCard(item)}>
          <S.ImgContainer>
            <Image
              src={(item.images && item?.images[0]?.url) || ''}
              alt="Imagem do Serviço"
              width={170}
              height={130}
              placeholder="blur"
              blurDataURL={(item.images && item?.images[0]?.url) || ''}
            />
          </S.ImgContainer>
          <S.InformationContainer>
            <S.TitleAndPriceText>
              <S.ServiceTitle>{item?.description}</S.ServiceTitle>
              <S.ServicePrice>{item?.price}</S.ServicePrice>
            </S.TitleAndPriceText>
            <S.AddressText>São Miguel, São Paulo Rua 22</S.AddressText>
            <S.TimeAndPointsText>{`Tempo: ${item?.runtime} min  | Acumule ${item?.pointsGenerated} pontos`}</S.TimeAndPointsText>
          </S.InformationContainer>
        </S.Container>
      ))}
    </>
  );
};

export default ServiceCard;
