import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import Button from 'components/Button';
import MainLayout from 'layouts/MainLayout';
import AppointmentCard from 'components/AppointmentCard';
import CardSlide from 'components/CardSlide';
import { getClientSchedulesByClientId } from 'cases/schedule/getClientSchedulesByClientId';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import { useGlobal } from 'hooks/Global';
import * as S from './styles';

import { appointments as mockAppointments } from '../../../../_mocks/appointments';

const appointments: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const [schedules, setSchedules] = useState([]);
  const {
    states: { company },
  } = useGlobal();

  const getSchedules = async () => {
    const response = await getClientSchedulesByClientId(
      getUserTokenFromLocalStorage(),
      'oVbVdUz0Y2COMwNjj5NJ',
      'T3IET5GcdVVAqUJkub6C',
    );
    setSchedules(response);
  };

  useEffect(() => {
    setTimeout(() => setSelectedIndex(0), 1000);
    setTimeout(() => setSelectedIndex(undefined), 2000);
    getSchedules();
  }, []);

  // oVbVdUz0Y2COMwNjj5NJ

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Minha Agenda</S.Title>
          <Button text="Novo Agendamento" />
          <S.AppointmentsContainer>
            {schedules.map((appointment, index) => (
              <CardSlide
                key={index}
                swiped={selectedIndex === index}
                onClick={() => {
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
