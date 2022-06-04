import Button from 'components/Button';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks/Global';
import { KitService } from 'models/types/kit';
import { useRouter } from 'next/router';
import React from 'react';

import * as S from './styles';

interface KitCardProps {
  services: KitService[];
}

const KitCard: React.FC<KitCardProps> = ({ services }) => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  return (
    <>
      {services?.map(service => (
        <S.Container>
          <S.KitCardTitle>{service?.name || 'Nome do serviço'}</S.KitCardTitle>
          <S.Content>
            <S.PriceAndPointsContainer>
              <S.PriceText>
                {currencyFormat({
                  value:
                    Number(service?.customPrice) ||
                    Number(service?.customPrice),
                  currencyPrefix: 'R$',
                })}
              </S.PriceText>
              <S.PointsText>{service?.customRuntime} minutos</S.PointsText>
            </S.PriceAndPointsContainer>
            <S.DescriptionKit>
              Escolha a data e hora desse serviço
            </S.DescriptionKit>
            <S.ActionButtonContainer>
              <Button
                text="Agendar"
                smallSize
                onClick={() =>
                  push({
                    pathname: `/[companyName]/chooseprofessionalKit/[kitId]`,
                    query: {
                      companyName: company?.app?.url,
                      kitId: service.id,
                    },
                  })
                }
              />
            </S.ActionButtonContainer>
          </S.Content>
        </S.Container>
      ))}
    </>
  );
};

export default KitCard;
