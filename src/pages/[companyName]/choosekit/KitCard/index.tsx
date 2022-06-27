import Button from 'components/Button';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './styles';

const KitCard = ({ service, edit, index, serviceIndex }: any) => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  return (
    <S.Container>
      <S.KitCardTitle>{service?.name || 'Nome do serviço'}</S.KitCardTitle>
      <S.Content>
        <S.PriceAndPointsContainer>
          <S.PriceText>
            {currencyFormat({
              value:
                Number(service?.customPrice) || Number(service?.customPrice),
              currencyPrefix: 'R$',
            })}
          </S.PriceText>
          <S.PointsText>{service?.customRuntime} minutos</S.PointsText>
        </S.PriceAndPointsContainer>
        <S.DescriptionKit>
          {service?.start
            ? new Date(service?.start).toLocaleString()
            : ' Escolha a data e hora desse serviço'}
        </S.DescriptionKit>
        <S.ActionButtonContainer>
          {edit ? (
            <Button
              text="Editar"
              smallSize
              onClick={() =>
                push({
                  pathname: `/[companyName]/chooseprofessionalKit/[kitId]/[index]`,
                  query: {
                    companyName: company?.app?.url,
                    kitId: service?.id,
                    index,
                    serviceIndex,
                  },
                })
              }
            />
          ) : (
            <Button
              text={service?.start ? 'Agendado' : 'Agendar'}
              smallSize
              onClick={() =>
                push({
                  pathname: `/[companyName]/chooseprofessionalKit/[kitId]`,
                  query: {
                    companyName: company?.app?.url,
                    kitId: service?.id,
                  },
                })
              }
            />
          )}
        </S.ActionButtonContainer>
      </S.Content>
    </S.Container>
  );
};

export default KitCard;
