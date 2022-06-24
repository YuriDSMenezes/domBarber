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
// import { getSchedulesByProfessionalId } from 'cases/schedule';

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
    const lastItem = cart.pop();
    const serviceIndex = lastItem?.service.services.findIndex(
      (service: any) => service.id === query.kitId && !service.start,
    );

    lastItem.service.services[serviceIndex] = {
      ...lastItem?.service.services[serviceIndex],
      start: date,
    };

    const newCart = [...cart, lastItem];
    setCart(newCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
  };

  const hasProfessional = cart.map(item =>
    item?.service?.services?.find(sItem => sItem?.professional),
  );

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
  const runTimeService =
    cart.length > 0
      ? cart[cart.length - 1]?.service?.services?.find(
          (service: any) => service.id === query.kitId,
        )
      : 0;

  const HoursComponent = useCallback(
    (): any =>
      TimesOfDayBasedInTimeService(
        cart.length > 0 && cart[cart.length - 1]?.service?.runtime,
      ).map((hour: Date) =>
        verifyOpeningCompanyTime(hour) ? (
          <S.Hour
            onClick={() => {
              if (
                !itsScheduled(hour) &&
                verifyWorkTime(hour, runTimeService?.customRuntime) &&
                verifyIntervalTime(hour, runTimeService?.customRuntime)
              ) {
                handleSelectHour(hour.toISOString());
                setIsSelectedFirstHour(true);
              }
            }}
            key={hour.getTime()}
            active={
              selectedHour === hour.toISOString() &&
              !itsScheduled(hour) &&
              verifyWorkTime(hour, runTimeService?.customRuntime) &&
              verifyIntervalTime(hour, runTimeService?.customRuntime)
            }
            disabled={
              itsScheduled(hour) ||
              !verifyOpeningCompanyTime(hour) ||
              !verifyWorkTime(hour, runTimeService?.customRuntime) ||
              !verifyIntervalTime(hour, runTimeService?.customRuntime)
            }
          >
            <p>{hour.toLocaleTimeString('pt-br', { timeStyle: 'short' })}</p>
          </S.Hour>
        ) : null,
      ),
    [selectedHour, date, confirmedSchedules],
  );
  console.log(runTimeService);
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
