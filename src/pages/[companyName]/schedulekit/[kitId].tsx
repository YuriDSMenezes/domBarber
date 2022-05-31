/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import MainLayout from 'layouts/MainLayout';
import { YearView } from 'react-calendar';
import { useRouter } from 'next/router';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-calendar/dist/Calendar.css';
import { useGlobal } from 'hooks/Global';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import * as S from './styles';
import { useSchedulesKit } from './schedulekit.controller';
// import { getSchedulesByProfessionalId } from 'cases/schedule';

const Schedule = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const {
    states: {
      cart,
      date,
      hour: selectedHour,
      confirmedSchedules,
      isSelectedFirstHour,
    },
    actions: {
      setCart,
      setDate,
      handleSelectDate,
      handleSelectHour,
      daysNotWork,
      formatExibitionDate,
      TimesOfDayBasedInTimeService,
      verifyOpeningCompanyTime,
      verifyWorkTime,
      verifyIntervalTime,
      itsScheduled,
      setIsSelectedFirstHour,
    },
  } = useSchedulesKit();

  const handleNext = (date: Date) => {
    const lastItem = cart[cart.length - 1];
    const newItem = { ...lastItem, start: date };
    cart.pop();
    const newCart = [...cart, newItem];
    setCart(newCart);
    localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
  };

  const YearCalendarComponent = () => (
    <YearView
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      valueType="month"
      minDate={new Date()}
      value={date}
      activeStartDate={new Date()}
      onClick={e => handleSelectDate(e)}
      locale="pt-BR"
    />
  );

  const CalendarComponent = useCallback(
    () => (
      <DayPicker
        disableNavigation
        mode="single"
        captionLayout="dropdown"
        month={date}
        selected={date}
        // @ts-ignore
        onSelect={setDate}
        locale={ptBR}
        disabled={daysNotWork()}
      />
    ),
    [date, confirmedSchedules],
  );

  const HoursComponent = useCallback(
    (): any =>
      TimesOfDayBasedInTimeService(cart[cart.length - 1]?.service?.runtime).map(
        (hour: Date) =>
          verifyOpeningCompanyTime(hour) ? (
            <S.Hour
              onClick={() => {
                if (
                  !itsScheduled(hour) &&
                  verifyWorkTime(
                    hour,
                    cart[cart.length - 1]?.service?.runtime,
                  ) &&
                  verifyIntervalTime(
                    hour,
                    cart[cart.length - 1]?.service?.runtime,
                  )
                ) {
                  handleSelectHour(hour.toISOString());
                  setIsSelectedFirstHour(true);
                }
              }}
              key={hour.getTime()}
              active={
                selectedHour === hour.toISOString() &&
                !itsScheduled(hour) &&
                verifyWorkTime(hour, cart[cart.length - 1]?.service?.runtime) &&
                verifyIntervalTime(
                  hour,
                  cart[cart.length - 1]?.service?.runtime,
                )
              }
              disabled={
                itsScheduled(hour) ||
                !verifyOpeningCompanyTime(hour) ||
                !verifyWorkTime(
                  hour,
                  cart[cart.length - 1]?.service?.runtime,
                ) ||
                !verifyIntervalTime(
                  hour,
                  cart[cart.length - 1]?.service?.runtime,
                )
              }
            >
              <p>{hour.toLocaleTimeString('pt-br', { timeStyle: 'short' })}</p>
            </S.Hour>
          ) : null,
      ),
    [selectedHour, date, confirmedSchedules],
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
          <HoursComponent />
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
            <S.Date>
              {isSelectedFirstHour && formatExibitionDate(date, ptBR)}
            </S.Date>
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
