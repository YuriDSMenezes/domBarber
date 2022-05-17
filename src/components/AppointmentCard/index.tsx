/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
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
  const formatedDate = new Date(appointment.date);
  return (
    <S.Container>
      <S.ContainerDateTime>
        <S.DayText theme={theme}>{stringDays[formatedDate.getDay()]}</S.DayText>
        <S.MonthText theme={theme}>
          {stringDays[formatedDate.getMonth()]}
        </S.MonthText>
        <S.DayNumber theme={theme}>{formatedDate.getDate()}</S.DayNumber>
        <S.Time theme={theme}>
          {`${formatedDate.getHours()}:${formatedDate.getMinutes()}`}
        </S.Time>
      </S.ContainerDateTime>
      <S.ContentAppointmentDescription>
        <S.ContentAppointmentDescriptionInformationContainer>
          <S.AppointmentDescription theme={theme}>
            {appointment.description}
          </S.AppointmentDescription>
          <S.AppointmentValue theme={theme}>
            {currencyFormat({
              value: Number(appointment.value),
              currencyPrefix: 'R$',
            })}
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
