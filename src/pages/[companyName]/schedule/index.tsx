import { useState, useCallback } from 'react';
import MainLayout from 'layouts/MainLayout';
import Calendar, { YearView } from 'react-calendar';
import { useRouter } from 'next/router';

import * as S from './styles';
import 'react-calendar/dist/Calendar.css';
import { hours } from '../../../../_mocks/hour';

const Schedule = () => {
  const { push } = useRouter();
  const [month, setMonth] = useState<Date>(new Date());
  const [day, setDay] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>();
  const [cart, setCart] = useState(() => {
    const cart = localStorage.getItem('@domBarber:cart');

    if (cart) {
      return JSON.parse(cart);
    }

    return [];
  });

  const handleClickMonth = (getMonth: Date) => setMonth(getMonth);
  const handleClickHour = (getHour: string) => setHour(getHour);

  const YearCalendarComponent = useCallback(
    () => (
      <YearView
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        valueType="day"
        value={month}
        activeStartDate={month}
        onClick={e => handleClickMonth(e)}
        locale="en-US"
      />
    ),
    [day],
  );

  const CalendarComponent = useCallback(
    () => <Calendar value={day} locale="en-US" onClickDay={e => setDay(e)} />,
    [month],
  );

  return (
    <MainLayout>
      <S.Title>Agendamento</S.Title>
      <S.Container>
        <S.Title mobile>Agendamento</S.Title>
        <S.Description>Escolha uma Data disponível</S.Description>
        <S.CalendarContainer>
          <YearCalendarComponent />
          <CalendarComponent />
        </S.CalendarContainer>
        <S.Description>Escolha um horário disponível</S.Description>
        <S.HoursContainer>
          {hours.map((getHour: string) => (
            <S.Hour onClick={() => handleClickHour(getHour)} key={getHour}>
              <p>{getHour}</p>
            </S.Hour>
          ))}
        </S.HoursContainer>
        <S.Row>
          <S.ServiceContainer>
            <S.Service>
              <S.Image>
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceTitle>Corte simples</S.ServiceTitle>
                <S.ServiceDescription>R$ 19,90</S.ServiceDescription>
                <S.ServiceText>20 Pontos Tempo: 30</S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
            <S.Service>
              <S.Image>
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceDescription hasTitle>
                  Profissional
                </S.ServiceDescription>
                <S.ServiceText>Paulo R.</S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
          </S.ServiceContainer>
          <S.NextContainer>
            <S.Date>Dia 2, sabado as 9:00</S.Date>
            <S.NextButton>Próximo</S.NextButton>
          </S.NextContainer>
        </S.Row>
      </S.Container>
    </MainLayout>
  );
};

export default Schedule;
