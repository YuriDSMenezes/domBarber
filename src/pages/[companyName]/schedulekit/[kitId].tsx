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
import useSchedulesKit from './schedulekit.controller';

const Schedule = () => {
  const { push, query } = useRouter();
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
      getLastItemCart,
    },
    actions: {
      setDate,
      addScheduleKit,
      handleSelectDate,
      handleSelectHour,
      daysNotWork,
      formatExhibitionnDate,
      TimesOfDayBasedInTimeService,
      verifyOpeningCompanyTime,
      verifyWorkTime,
      verifyIntervalTime,
      itsScheduled,
      setIsSelectedFirstHour,
    },
  } = useSchedulesKit();

  const handleNext = (date: Date) => {
    if (typeof query.kitId === 'string') {
      addScheduleKit(date, query.kitId);
    }
  };

  const hasProfessional = cart.map(item => {
    // @ts-ignore
    if (item?.service?.services) {
      item?.service?.services?.find((sItem: any) => sItem?.professional);
    }
    return [];
  });

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

  // @ts-ignore
  const runTimeService = getLastItemCart?.service?.services
    ? getLastItemCart?.service?.services?.find(
        (service: any) => service.id === query.kitId,
      )
    : [];

  const HoursComponent = useCallback(
    (): any =>
      TimesOfDayBasedInTimeService(getLastItemCart?.service?.runtime || 0).map(
        (hour: Date) =>
          verifyOpeningCompanyTime(hour) ? (
            <S.Hour
              onClick={() => {
                if (
                  !itsScheduled(hour) &&
                  verifyWorkTime(
                    hour,
                    getLastItemCart?.service?.runtime || 0,
                  ) &&
                  verifyIntervalTime(
                    hour,
                    getLastItemCart?.service?.runtime || 0,
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
                verifyWorkTime(hour, getLastItemCart?.service?.runtime || 0) &&
                verifyIntervalTime(hour, getLastItemCart?.service?.runtime || 0)
              }
              disabled={
                itsScheduled(hour) ||
                !verifyOpeningCompanyTime(hour) ||
                !verifyWorkTime(hour, getLastItemCart?.service?.runtime || 0) ||
                !verifyIntervalTime(
                  hour,
                  getLastItemCart?.service?.runtime || 0,
                )
              }
            >
              <p>{hour.toLocaleTimeString('pt-br', { timeStyle: 'short' })}</p>
            </S.Hour>
          ) : null,
      ),
    [date],
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
                    'https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg'
                  }
                  alt="logo"
                />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceTitle>{runTimeService?.name}</S.ServiceTitle>
                <S.ServiceDescription>
                  R$ {runTimeService?.defaultPrice}
                </S.ServiceDescription>
                <S.ServiceText>
                  Tempo: {runTimeService?.defaultRuntime}
                </S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
            <S.Service>
              <S.Image>
                <img
                  src={
                    runTimeService?.professional?.image ||
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
                  {runTimeService?.professional?.name || ''}
                </S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
          </S.ServiceContainer>
          <S.NextContainer>
            <S.Date>
              {isSelectedFirstHour && formatExhibitionnDate(date, ptBR)}
            </S.Date>
            <S.NextButton
              onClick={() => {
                handleNext(date);
                push(
                  hasProfessional.length > 0
                    ? {
                        pathname: `/[companyName]/choosekit`,
                        query: { companyName: company?.app?.url },
                      }
                    : {
                        pathname: `/[companyName]/cart`,
                        query: { companyName: company?.app?.url },
                      },
                );
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
