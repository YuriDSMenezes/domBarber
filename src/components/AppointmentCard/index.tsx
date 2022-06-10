/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProfessionalById } from 'cases/professional/getProfessionalById';
import { getServiceByServiceId } from 'cases/service/getServiceByServiceId';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import { useGlobal } from 'hooks/Global';
import React, { useEffect, useState } from 'react';
import * as S from './styles';

interface AppointmentCardProps {
  appointment?: any;
  theme?: 'light' | 'dark';
}

export interface iCurrencyFormat {
  value: number;
  currencyPrefix?: string;
}

const stringDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

const stringMonths = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const currencyFormat = ({ value, currencyPrefix = '$' }: iCurrencyFormat) => {
  return `${currencyPrefix} ${value
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
};

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  theme,
}) => {
  const {
    states: { company },
  } = useGlobal();
  const formatedDate = new Date(appointment.start);
  const [service, setService] = useState({});
  const [professional, setProfessional] = useState({});
  const getServiceAndProfessional = async () => {
    const service = await getServiceByServiceId(
      getUserTokenFromLocalStorage(),
      appointment?.serviceIds[0],
      company.id,
    );
    setService(service);
    const professional = await getProfessionalById(appointment?.professionalId);
    setProfessional(professional);
  };

  useEffect(() => {
    getServiceAndProfessional();
  }, []);
  return (
    <S.Container>
      <S.ContainerDateTime>
        <S.DayText theme={theme}>{stringDays[formatedDate.getDay()]}</S.DayText>
        <S.MonthText theme={theme}>
          {stringMonths[formatedDate.getMonth()]}
        </S.MonthText>
        <S.DayNumber theme={theme}>{formatedDate.getDate()}</S.DayNumber>
        <S.Time theme={theme}>
          {`${formatedDate.getHours()}:${formatedDate.getMinutes()}`}
        </S.Time>
      </S.ContainerDateTime>
      <S.ContentAppointmentDescription>
        <S.ContentAppointmentDescriptionInformationContainer>
          <S.AppointmentDescription theme={theme}>
            {service.description}
          </S.AppointmentDescription>
          <S.AppointmentValue theme={theme}>
            {currencyFormat({
              value: Number(service.price),
              currencyPrefix: 'R$',
            })}
          </S.AppointmentValue>
          <S.AppointmentPoints theme={theme}>
            {`${service.pointsGenerated} Pontos`}
          </S.AppointmentPoints>
          <S.AppointmentPaymentStatus theme={theme}>
            {appointment.paymentStatus}
          </S.AppointmentPaymentStatus>
        </S.ContentAppointmentDescriptionInformationContainer>
        <S.ContentAppointmentDescriptionImageContainer>
          <S.DescriptionImageProfessional theme={theme}>
            Profissional
          </S.DescriptionImageProfessional>
          <S.ProfessionalImage>
            <img src={professional?.image} alt={professional?.name} />
          </S.ProfessionalImage>
          <S.ProfessionalName theme={theme}>
            {professional?.name}
          </S.ProfessionalName>
        </S.ContentAppointmentDescriptionImageContainer>
      </S.ContentAppointmentDescription>
    </S.Container>
  );
};

export default AppointmentCard;
