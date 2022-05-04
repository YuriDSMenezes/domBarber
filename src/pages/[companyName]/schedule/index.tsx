/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';
import MainLayout from 'layouts/MainLayout';
import Calendar, { YearView } from 'react-calendar';
import { useRouter } from 'next/router';
import { format, endOfMonth, eachDayOfInterval } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import { AddHours } from 'helpers/addHours';
import { useGlobal } from 'hooks/Global';
import { hours } from '../../../../_mocks/hour';
import * as S from './styles';

const Schedule = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>();
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        return JSON.parse(cart);
      }
    }

    return [];
  });

  const handleClickDate = (getMonth: Date) => {
    setDate(getMonth);
  };

  const handleClickHour = (e: string) => {
    const stringToNumber = parseInt(e, 10);
    const sumHoursToDate = AddHours(date, stringToNumber);
    setHour(e);
    setDate(sumHoursToDate);
  };

  const handleNext = (date: Date) => {
    const lastItem = cart[cart.length - 1];
    const newItem = { ...lastItem, start: date };
    cart.pop();
    const newCart = [...cart, newItem];
    setCart(newCart);
    localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    // setCart((oldState: any) => [...oldState, item]);
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('@domBarber:cart', JSON.stringify([...cart, item]));
    // }
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
        locale="pt-BR"
      />
    ),
    [date],
  );

  const days = eachDayOfInterval({
    start: new Date(),
    end: endOfMonth(new Date()),
  });

  const daysNotWork = () => {
    const daysNW = [];
    days.forEach(day => {
      cart[cart.length - 1]?.professional?.days.forEach(dw => {
        if (dw.weekId === new Date(day).getDay()) daysNW.push(day);
      });
    });
    return days.filter(day => !daysNW.includes(day));
  };

  const initWorkDay = () => {
    const daysNW = [];
    days.forEach(day => {
      cart[cart.length - 1]?.professional?.days.forEach(dw => {
        if (dw.weekId === new Date(day).getDay()) daysNW.push(day);
      });
    });
    return new Date(daysNW[0]);
  };
  // REFATORAR, AJUSTAR O DISPLAY NONE E RESOLVER O DIA DE HOJE QUE FICA MARCADO COMO HABILITADO
  const CalendarComponent = useCallback(
    () => (
      <Calendar
        value={date}
        locale="pt-BR"
        onClickDay={e => setDate(e)}
        minDate={initWorkDay()}
        tileDisabled={({ date, view }) =>
          view === 'month' && // Block day tiles only
          daysNotWork().some(
            disabledDate =>
              date.getFullYear() === disabledDate.getFullYear() &&
              date.getMonth() === disabledDate.getMonth() &&
              date.getDate() === disabledDate.getDate(),
          )
        }
      />
    ),
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
                    cart[cart.length - 1]?.service?.image ||
                    'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
                  }
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceTitle>
                  {cart[cart.length - 1]?.service?.description}
                </S.ServiceTitle>
                <S.ServiceDescription>
                  R$ {cart[cart.length - 1]?.service?.price}
                </S.ServiceDescription>
                <S.ServiceText>
                  {cart[cart.length - 1]?.service?.pointsGenerated} Pontos
                  Tempo: {cart[cart.length - 1]?.service?.runtime}
                </S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
            <S.Service>
              <S.Image>
                <img
                  src={
                    cart[cart.length - 1]?.professional?.image ||
                    'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
                  }
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceDescription hasTitle>
                  Profissional
                </S.ServiceDescription>
                <S.ServiceText>
                  {cart[cart.length - 1]?.professional?.name}
                </S.ServiceText>
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
