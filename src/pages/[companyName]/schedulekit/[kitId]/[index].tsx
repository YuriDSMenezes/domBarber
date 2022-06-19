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
import { useSchedulesIndexKit } from './schedulekit.index.controller';
// import { getSchedulesByProfessionalId } from 'cases/schedule';

const Schedule = () => {
  const { push, query } = useRouter();
  const {
    states: { company, services },
  } = useGlobal();
  const {
    states: {
      cart,
      date,
      hour: selectedHour,
      confirmedSchedules,
      isSelectedFirstHour,
      cartProfessional,
      selectedKit,
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
  } = useSchedulesIndexKit();
  const { index, serviceIndex } = query;
  const handleNext = (date: Date) => {
    cart.splice(Number(index));
    selectedKit.service.services[serviceIndex] = {
      ...selectedKit?.service?.services[serviceIndex],
      start: date,
    };

    const newCart = [...cart, selectedKit];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
  };

  const imageService = services.find(
    service => selectedKit?.service?.id === service.id,
  );

  const hasProfessional = cartProfessional?.professional;

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
  const runTimeService = selectedKit?.service?.services?.find(
    (service: any) => service.id === query.kitId,
  );

  const HoursComponent = useCallback(
    (): any =>
      TimesOfDayBasedInTimeService(selectedKit?.service?.runtime).map(
        (hour: Date) =>
          verifyOpeningCompanyTime(hour) ? (
            <S.Hour
              onClick={() => {
                if (
                  !itsScheduled(hour) &&
                  verifyWorkTime(hour, selectedKit?.service?.runtime) &&
                  verifyIntervalTime(hour, selectedKit?.service?.runtime)
                ) {
                  handleSelectHour(hour.toISOString());
                  setIsSelectedFirstHour(true);
                }
              }}
              key={hour.getTime()}
              active={
                selectedHour === hour.toISOString() &&
                !itsScheduled(hour) &&
                verifyWorkTime(hour, selectedKit?.service?.runtime) &&
                verifyIntervalTime(hour, selectedKit?.service?.runtime)
              }
              disabled={
                itsScheduled(hour) ||
                !verifyOpeningCompanyTime(hour) ||
                !verifyWorkTime(hour, selectedKit?.service?.runtime) ||
                !verifyIntervalTime(hour, selectedKit?.service?.runtime)
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
                <img src={selectedKit?.service?.images?.[0]?.url} alt="logo" />
              </S.Image>
              <S.ServiceDescription>
                <S.ServiceTitle>{runTimeService?.name}</S.ServiceTitle>
                <S.ServiceDescription>
                  R$ {runTimeService?.customPrice}
                </S.ServiceDescription>
                <S.ServiceText>
                  Tempo: {runTimeService?.customRuntime}
                </S.ServiceText>
              </S.ServiceDescription>
            </S.Service>
            <S.Service>
              <S.Image>
                <img
                  src={
                    runTimeService?.professional?.image ||
                    imageService ||
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
                  {runTimeService?.professional?.name}
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
                push(
                  selectedKit?.service?.services?.length >= serviceIndex
                    ? {
                        pathname: `/[companyName]/choosekit/edit/[index]`,
                        query: { companyName: company?.app?.url, index },
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
