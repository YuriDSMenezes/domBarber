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
import * as S from '../styles';
import { useEditSchedules } from './editschedule.controller';
// import { getSchedulesByProfessionalId } from 'cases/schedule';

const Schedule = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();
  const {
    states: {
      cart,
      cartSelected,
      date,
      hour: selectedHour,
      confirmedSchedules,
      isSelectedFirstHour,
      indexItem,
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
  } = useEditSchedules();

  const handleNext = (date: Date) => {
    cart.splice(indexItem, 1);
    const newCart = [...cart, { ...cartSelected, start: date }];
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
      TimesOfDayBasedInTimeService(cartSelected?.service?.runtime).map(
        (hour: Date) =>
          verifyOpeningCompanyTime(hour) ? (
            <S.Hour
              onClick={() => {
                if (
                  !itsScheduled(hour) &&
                  verifyWorkTime(hour, cartSelected?.service?.runtime) &&
                  verifyIntervalTime(hour, cartSelected?.service?.runtime)
                ) {
                  handleSelectHour(hour.toISOString());
                  setIsSelectedFirstHour(true);
                }
              }}
              key={hour.getTime()}
              active={
                selectedHour === hour.toISOString() &&
                !itsScheduled(hour) &&
                verifyWorkTime(hour, cartSelected?.service?.runtime) &&
                verifyIntervalTime(hour, cartSelected?.service?.runtime)
              }
              disabled={
                itsScheduled(hour) ||
                !verifyOpeningCompanyTime(hour) ||
                !verifyWorkTime(hour, cartSelected?.service?.runtime) ||
                !verifyIntervalTime(hour, cartSelected?.service?.runtime)
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
                    cartSelected?.service?.image ||
                    'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
                  }
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceTitle>
                  {cartSelected?.service?.description}
                </S.ServiceTitle>
                <S.ServiceDescription>
                  R$ {cartSelected?.service?.price}
                </S.ServiceDescription>
                <S.ServiceText>
                  {cartSelected?.service?.pointsGenerated} Pontos Tempo:{' '}
                  {cartSelected?.service?.runtime}
                </S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
            <S.Service>
              <S.Image>
                <img
                  src={
                    cartSelected?.professional?.image ||
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
                  {cartSelected?.professional?.name}
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
