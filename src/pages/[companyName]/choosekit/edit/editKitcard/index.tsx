import { stringDays } from 'constants/stringDays';
import { stringMonths } from 'constants/stringMonths';
import { currencyFormat } from 'helpers';
import { useGlobal } from 'hooks/Global';
import { useRouter } from 'next/router';
import * as S from './styles';

export const EditKitCard = ({ service, index, serviceIndex }: any) => {
  const {
    states: { services, company },
  } = useGlobal();
  const { push } = useRouter();
  const formatedDate = new Date(service?.start);

  const handleChange = () => {
    push({
      pathname: `/[companyName]/chooseprofessionalKit/[kitId]/[index]`,
      query: {
        companyName: company?.app?.url,
        kitId: service?.id,
        index,
        serviceIndex,
      },
    });
  };

  const getService = services.find(
    serviceFilter => serviceFilter.id === service.id,
  );

  return (
    <S.CollapseContainer>
      <S.CollapseDate>
        <div>
          <S.SmallText>
            {stringDays[service.start && formatedDate.getDay()]}
            {
              stringMonths[
                service.start
                  ? formatedDate.getMonth()
                  : service.start
                  ? new Date().getMonth()
                  : -1
              ]
            }
          </S.SmallText>
          <S.CollapseDay>
            {service.start && formatedDate.getDate()}
          </S.CollapseDay>
          <S.LargeText>
            {service.start &&
              formatedDate.toLocaleTimeString('pt-br', { timeStyle: 'short' })}
          </S.LargeText>
        </div>
        <div
          style={{ width: '60px', display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              height: '89px',
              width: '1px',
              background: '#ccc',
            }}
          />
        </div>
      </S.CollapseDate>
      <S.CollapseDescription>
        <S.OrangeTitle>{getService?.name}</S.OrangeTitle>
        <S.MediumText>
          {currencyFormat({
            value: Number(getService?.price),
            currencyPrefix: 'R$',
          })}
        </S.MediumText>
        <S.MediumText>{getService?.pointsGenerated} Pontos</S.MediumText>
      </S.CollapseDescription>
      {service && (
        <S.CollapseService>
          <S.MediumText>Profissional</S.MediumText>
          <S.CollapseImage>
            <img src={service.professional?.image} />
          </S.CollapseImage>
          <S.SmallText>{service.professional?.name}</S.SmallText>
        </S.CollapseService>
      )}
      <S.Change onClick={handleChange}>Trocar</S.Change>
    </S.CollapseContainer>
  );
};
