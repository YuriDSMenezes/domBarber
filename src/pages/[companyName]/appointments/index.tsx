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
import { deleteScheduledByScheduleId } from 'cases/schedule/deleteScheduledByScheduleId';
import { useRouter } from 'next/router';
import { getUserIdFromLocalStorage } from 'cases/user/getUserIdFromLocalStorage';
import * as S from './styles';

const appointments: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
  const [schedules, setSchedules] = useState([]);
  const {
    states: { company },
  } = useGlobal();
  const { push } = useRouter();

  const getSchedules = async () => {
    const response = await getClientSchedulesByClientId(
      getUserTokenFromLocalStorage(),
      // 'oVbVdUz0Y2COMwNjj5NJ',
      // 'T3IET5GcdVVAqUJkub6C',
      getUserIdFromLocalStorage(),
      company.id,
    );
    setSchedules(response);
  };

  const deleteSchedule = async (id: string) => {
    await deleteScheduledByScheduleId(
      id,
      company.id,
      getUserTokenFromLocalStorage(),
    );
    await getSchedules();
  };

  useEffect(() => {
    setTimeout(() => setSelectedIndex(0), 500);
    setTimeout(() => setSelectedIndex(undefined), 1000);
  }, []);

  useEffect(() => {
    getSchedules();
  }, [selectedIndex]);

  // oVbVdUz0Y2COMwNjj5NJ
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Minha Agenda</S.Title>
          <Button text="Novo Agendamento" />
          <S.AppointmentsContainer>
            {schedules.map((appointment, index) =>
              !appointment?.canceled ? (
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
                  firstAction={() => deleteSchedule(appointment.id)}
                  secondAction={() =>
                    push({
                      pathname: `/[companyName]/professionals/${appointment.id}`,
                      query: { companyName: company?.app?.url },
                    })
                  }
                >
                  <AppointmentCard appointment={appointment} />
                </CardSlide>
              ) : null,
            )}
          </S.AppointmentsContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default appointments;
