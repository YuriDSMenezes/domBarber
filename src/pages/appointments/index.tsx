import React from 'react';
import type { NextPage } from 'next';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import Button from 'components/Button';
import * as S from './styles';
import AppointmentCard from './AppointmentCard';

import { appointments as mockAppointments } from '../../../_mocks/appointments';

const appointments: NextPage = () => {
  return (
    <BottomSheetFixedLayout theme="dark">
      <S.Content>
        <S.Title>Minha Agenda</S.Title>
        <Button text="Novo Agendamento" />
        <S.AppointmentsContainer>
          {mockAppointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </S.AppointmentsContainer>
      </S.Content>
    </BottomSheetFixedLayout>
  );
};

export default appointments;
