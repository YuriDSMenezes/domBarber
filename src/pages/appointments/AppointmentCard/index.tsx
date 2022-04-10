import React from 'react';
import { getDay, getMonth, getDate, getHours, getMinutes } from 'date-fns';
import * as S from './styles';

interface AppointmentCardProps {
  appointment?: any;
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

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <S.Container>
      <S.ContainerDateTime>
        <S.DayText>{`${stringDays[getDay(appointment.date)]},`}</S.DayText>
        <S.MonthText>{stringMonths[getMonth(appointment.date)]}</S.MonthText>
        <S.DayNumber>{getDate(appointment.date)}</S.DayNumber>
        <S.Time>
          {`${getHours(appointment.date)}:${getMinutes(appointment.date)}`}
        </S.Time>
      </S.ContainerDateTime>
      <S.ContentAppointmentDescription>
        <S.ContentAppointmentDescriptionInformationContainer>
          <S.AppointmentDescription>
            {appointment.description}
          </S.AppointmentDescription>
          <S.AppointmentValue>
            {currencyFormat({ value: appointment.value, currencyPrefix: 'R$' })}
          </S.AppointmentValue>
          <S.AppointmentPoints>
            {`${appointment.points} Pontos`}
          </S.AppointmentPoints>
          <S.AppointmentPaymentStatus>
            {appointment.paymentStatus}
          </S.AppointmentPaymentStatus>
        </S.ContentAppointmentDescriptionInformationContainer>
        <S.ContentAppointmentDescriptionImageContainer>
          <S.DescriptionImageProfessional>
            Profissional
          </S.DescriptionImageProfessional>
          <S.ProfessionalImage>
            <img src={appointment.avatar} alt={appointment.professional} />
          </S.ProfessionalImage>
          <S.ProfessionalName>{appointment.professional}</S.ProfessionalName>
        </S.ContentAppointmentDescriptionImageContainer>
      </S.ContentAppointmentDescription>
    </S.Container>
  );
};

export default AppointmentCard;
