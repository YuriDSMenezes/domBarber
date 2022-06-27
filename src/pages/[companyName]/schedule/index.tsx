/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import { YearView } from 'react-calendar';
import { DayPicker } from 'react-day-picker';
import ptBR from 'date-fns/locale/pt-BR';
import 'react-calendar/dist/Calendar.css';
import 'react-day-picker/dist/style.css';

import { useCallback } from 'react';
import { useGlobal } from 'hooks';
import MainLayout from 'layouts/MainLayout';
import * as S from './styles';
import { useSchedules } from './schedules.controller';

const Schedule = () => {
  const { push } = useRouter();
  const {
    states: { company, services },
  } = useGlobal();
  const {
    states: {
      date,
      hour: selectedHour,
      confirmedSchedules,
      isSelectedFirstHour,
      getLastItemCart,
    },
    actions: {
      setDate,
      addSchedule,
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
  } = useSchedules();

  const handleNext = (date: Date) => {
    if (date) {
      addSchedule(date);
    }
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
      TimesOfDayBasedInTimeService(getLastItemCart?.service?.runtime || 1).map(
        (hour: Date) =>
          verifyOpeningCompanyTime(hour) ? (
            <S.Hour
              onClick={() => {
                if (
                  !itsScheduled(hour) &&
                  verifyWorkTime(
                    hour,
                    getLastItemCart?.service?.runtime || 1,
                  ) &&
                  verifyIntervalTime(
                    hour,
                    getLastItemCart?.service?.runtime || 1,
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
                verifyWorkTime(hour, getLastItemCart?.service?.runtime || 1) &&
                verifyIntervalTime(hour, getLastItemCart?.service?.runtime || 1)
              }
              disabled={
                itsScheduled(hour) ||
                !verifyOpeningCompanyTime(hour) ||
                !verifyWorkTime(hour, getLastItemCart?.service?.runtime || 1) ||
                !verifyIntervalTime(
                  hour,
                  getLastItemCart?.service?.runtime || 1,
                )
              }
            >
              <p>{hour.toLocaleTimeString('pt-br', { timeStyle: 'short' })}</p>
            </S.Hour>
          ) : null,
      ),
    [selectedHour, date, confirmedSchedules, getLastItemCart],
  );

  const imageService = services.find(
    service => getLastItemCart?.service?.id === service.id,
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
                    imageService?.images[0].url ||
                    'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
                  }
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceTitle>
                  {getLastItemCart?.service?.description}
                </S.ServiceTitle>
                <S.ServiceDescription>
                  R$ {getLastItemCart?.service?.price}
                </S.ServiceDescription>
                <S.ServiceText>
                  {getLastItemCart?.service?.pointsGenerated} Pontos Tempo:{' '}
                  {getLastItemCart?.service?.runtime}
                </S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
            <S.Service>
              <S.Image>
                <img
                  src={
                    getLastItemCart?.professional?.image ||
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
                  {getLastItemCart?.professional?.name}
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
