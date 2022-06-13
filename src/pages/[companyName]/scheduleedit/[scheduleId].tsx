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
import { getUserIdFromLocalStorage } from 'cases/user/getUserIdFromLocalStorage';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import { updateScheduleByScheduleId } from 'cases/schedule/updateScheduleByScheduleId';
import * as S from './styles';
import { useScheduleEdit } from './scheduleedit.controller';
// import { getSchedulesByProfessionalId } from 'cases/schedule';

const Schedule = () => {
  const {
    push,
    query: { scheduleId },
  } = useRouter();
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
      professionalId,
      serviceId,
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
  } = useScheduleEdit();

  const handleNext = async (date: Date) => {
    await updateScheduleByScheduleId(
      scheduleId,
      date.toISOString(),
      company.id,
      getUserTokenFromLocalStorage(),
    );
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

  const isDisabledHour = useCallback(
    hour => {
      return (
        itsScheduled(hour) ||
        !verifyOpeningCompanyTime(hour) ||
        !verifyIntervalTime(hour, cart[cart.length - 1]?.service?.runtime) ||
        !verifyWorkTime(
          hour,
          cart[cart.length - 1]?.service?.runtime,
          cart[cart.length - 1]?.professional,
        )
      );
    },
    [cart, date],
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
                    cart[cart.length - 1]?.professional,
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
                verifyWorkTime(
                  hour,
                  cart[cart.length - 1]?.service?.runtime,
                  cart[cart.length - 1]?.professional,
                ) &&
                verifyIntervalTime(
                  hour,
                  cart[cart.length - 1]?.service?.runtime,
                )
              }
              disabled={isDisabledHour(hour)}
            >
              <p>{hour.toLocaleTimeString('pt-br', { timeStyle: 'short' })}</p>
            </S.Hour>
          ) : null,
      ),
    [selectedHour, date, confirmedSchedules, cart, professionalId, serviceId],
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
                  pathname: `/[companyName]/appointments`,
                  query: { companyName: company?.app?.url },
                });
              }}
            >
              Salvar
            </S.NextButton>
          </S.NextContainer>
        </S.Row>
      </S.Container>
    </MainLayout>
  );
};

export default Schedule;
