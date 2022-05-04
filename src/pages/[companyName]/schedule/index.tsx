/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useEffect } from 'react';
import MainLayout from 'layouts/MainLayout';
import Calendar, { YearView } from 'react-calendar';
import { useRouter } from 'next/router';

import { format } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import { AddHours } from 'helpers/addHours';
import { useGlobal } from 'hooks/Global';
import { Professional } from 'models/types/professional';
import { Service } from 'models/types/service';
import { hours } from '../../../../_mocks/hour';
import * as S from './styles';

const Schedule = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>();
  const [service, setService] = useState<Service>();
  const [professional, setProfessional] = useState<Professional>();
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  useEffect(() => {
    const professionalIndex = cart.length - 2;
    const serviceIndex = cart.length - 1;
    setService(cart[serviceIndex]);
    setProfessional(cart[professionalIndex]);
  }, []);

  const handleClickDate = (getMonth: Date) => {
    setDate(getMonth);
  };

  const handleClickHour = (e: string) => {
    const stringToNumber = parseInt(e, 10);
    const sumHoursToDate = AddHours(date, stringToNumber);
    setHour(e);
    setDate(sumHoursToDate);
  };

  const handleNext = (item: Date) => {
    setCart((oldState: any) => [...oldState, item]);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify([...cart, item]));
    }
  };

  const YearCalendarComponent = useCallback(
    () => (
      <YearView
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        valueType="month"
        minDate={new Date()}
        value={date}
        activeStartDate={date}
        onClick={e => handleClickDate(e)}
        locale="en-US"
      />
    ),
    [date],
  );

  const CalendarComponent = useCallback(
    () => <Calendar value={date} locale="en-US" onClickDay={e => setDate(e)} />,
    [date],
  );

  const formattedDate = format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'");

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
            <S.Hour
              onClick={() => handleClickHour(getHour)}
              key={getHour}
              active={hour === getHour}
            >
              <p>{getHour}</p>
            </S.Hour>
          ))}
        </S.HoursContainer>
        <S.Row>
          <S.ServiceContainer>
            <S.Service>
              <S.Image>
                <img
                  src={
                    service?.image ||
                    'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
                  }
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceTitle>{service?.description}</S.ServiceTitle>
                <S.ServiceDescription>R$ {service?.price}</S.ServiceDescription>
                <S.ServiceText>
                  {service?.pointsGenerated} Pontos Tempo: {service?.runtime}
                </S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
            <S.Service>
              <S.Image>
                <img
                  src={
                    professional?.image ||
                    'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
                  }
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceDescription hasTitle>
                  Profissional
                </S.ServiceDescription>
                <S.ServiceText>{professional?.name}</S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
          </S.ServiceContainer>
          <S.NextContainer>
            <S.Date>{formattedDate}</S.Date>
            <S.NextButton
              onClick={() => {
                handleNext(date);
                push({
                  pathname: `/[companyName]/cart`,
                  query: { companyName: company?.app?.url },
                });
              }}
            >
              Próximo
            </S.NextButton>
          </S.NextContainer>
        </S.Row>
      </S.Container>
    </MainLayout>
  );
};

export default Schedule;
