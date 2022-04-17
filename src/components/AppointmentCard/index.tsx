import React from 'react';
import { getDay, getMonth, getDate, getHours, getMinutes } from 'date-fns';
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
  return (
    <S.Container>
      <S.ContainerDateTime>
        <S.DayText theme={theme}>{`${
          stringDays[getDay(appointment.date)]
        },`}</S.DayText>
        <S.MonthText theme={theme}>
          {stringMonths[getMonth(appointment.date)]}
        </S.MonthText>
        <S.DayNumber theme={theme}>{getDate(appointment.date)}</S.DayNumber>
        <S.Time theme={theme}>
          {`${getHours(appointment.date)}:${getMinutes(appointment.date)}`}
        </S.Time>
      </S.ContainerDateTime>
      <S.ContentAppointmentDescription>
        <S.ContentAppointmentDescriptionInformationContainer>
          <S.AppointmentDescription theme={theme}>
            {appointment.description}
          </S.AppointmentDescription>
          <S.AppointmentValue theme={theme}>
            {currencyFormat({ value: appointment.value, currencyPrefix: 'R$' })}
          </S.AppointmentValue>
          <S.AppointmentPoints theme={theme}>
            {`${appointment.points} Pontos`}
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
            <img src={appointment.avatar} alt={appointment.professional} />
          </S.ProfessionalImage>
          <S.ProfessionalName theme={theme}>
            {appointment.professional}
          </S.ProfessionalName>
        </S.ContentAppointmentDescriptionImageContainer>
      </S.ContentAppointmentDescription>
    </S.Container>
  );
};

export default AppointmentCard;
