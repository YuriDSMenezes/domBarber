import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import Button from 'components/Button';
import MainLayout from 'layouts/MainLayout';
import { getSchedules } from 'cases/schedule';
import AppointmentCard from 'components/AppointmentCard';
import CardSlide from 'components/CardSlide';
import * as S from './styles';

import { appointments as mockAppointments } from '../../../../_mocks/appointments';

const appointments: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Minha Agenda</S.Title>
          <Button text="Novo Agendamento" />
          <S.AppointmentsContainer>
            {mockAppointments.map((appointment, index) => (
              <CardSlide
                key={index}
                swiped={selectedIndex === index}
                onClick={() => {
                  console.log('click');
                  if (selectedIndex === index) {
                    setSelectedIndex(undefined);
                  } else {
                    setSelectedIndex(index);
                  }
                }}
              >
                <AppointmentCard appointment={appointment} />
              </CardSlide>
            ))}
          </S.AppointmentsContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default appointments;
