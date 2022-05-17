import { getSchedulesByProfessionalId } from 'cases/schedule';
import {
  addDays,
  addMinutes,
  eachDayOfInterval,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  isSameMinute,
  startOfDay,
  startOfMonth,
  subMinutes,
} from 'date-fns';
import { WorkDay } from 'models/types/company';
import { useCallback, useEffect, useState } from 'react';
import { Schedule } from 'models/schedule';
import { getSchedulesByProfessionalIdAndServiceId } from 'cases/schedule/getSchedulesByProfessionalIdAndServiceId';

export const useSchedules = () => {
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
  const [confirmedSchedules, setConfirmedSchedules] = useState<Date[]>([]);
  const handleSelectDate = (getMonth: Date) => {
    setDate(getMonth);
  };

  const handleSelectHour = (hour: string) => {
    setHour(hour);
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      new Date(hour).getHours(),
      new Date(hour).getMinutes(),
      0,
    );
    setDate(newDate);
  };

  const days = eachDayOfInterval({
    start: startOfMonth(new Date(date)),
    end: endOfMonth(new Date(date)),
  });

  const daysNotWork = useCallback(() => {
    const daysNW: Array<Date> = [];
    days.forEach(day => {
      if (new Date(day) < new Date()) daysNW.push(day);
      cart[cart.length - 1]?.professional?.days?.forEach((dw: WorkDay) => {
        if (dw.weekId === new Date(day).getDay()) daysNW.push(day);
      });
    });
    return [
      ...days.filter(day => new Date(day) < new Date()),
      ...days.filter(day => !daysNW?.includes(day)),
    ];
  }, [date]);

  const setInitalDateWork = () => {
    const daysNW: Array<Date> = [];
    days.forEach(day => {
      if (new Date(day) < new Date()) daysNW.push(day);
      cart[cart.length - 1]?.professional?.days?.forEach((dw: WorkDay) => {
        if (dw.weekId === new Date(day).getDay()) daysNW.push(day);
      });
    });
    setDate(daysNW.filter(d => new Date(d) > new Date())[0]);
    setHour(daysNW.filter(d => new Date(d) > new Date())[0].toISOString());
  };

  const formatExibitionDate = (date: Date, locale: Locale) =>
    format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale });

  const TimesOfDayBasedInTimeService = (serviceMinutes: number): Date[] => {
    const times: Date[] = [
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0),
    ];
    while (
      isBefore(times[times.length - 1], startOfDay(addDays(times[0], 1))) ===
      true
    ) {
      times.push(addMinutes(times[times.length - 1], serviceMinutes));
    }
    times.pop();
    if (
      isAfter(
        addMinutes(times[times.length - 1], serviceMinutes),
        startOfDay(addDays(times[0], 1)),
      )
    ) {
      times.pop();
    }
    return times;
  };

  const verifyWorkTime = useCallback(
    (date: Date, workTime: number) => {
      const rulesOfDay = cart[cart.length - 1]?.professional?.days?.filter(
        (d: WorkDay) => d.weekId === date.getDay(),
      )[0];
      const initWork = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        Number(rulesOfDay?.init.split(':')[0]),
        Number(rulesOfDay?.init.split(':')[1]),
      );
      const endWork = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        Number(rulesOfDay?.end.split(':')[0]),
        Number(rulesOfDay?.end.split(':')[1]),
      );
      if (
        isAfter(date, subMinutes(initWork, workTime)) &&
        isBefore(date, endWork)
      )
        return true;
      return false;
    },
    [hour],
  );

  const verifyIntervalTime = useCallback(
    (date: Date, workTime: number) => {
      let isIntervalTime = true;
      const rulesOfDay = cart[cart.length - 1]?.professional?.days?.filter(
        (d: WorkDay) => d.weekId === date.getDay(),
      )[0];
      const intervalsOfDay = rulesOfDay?.intervals?.map(
        (i: { init: string; end: string }) => ({
          init: new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            Number(i?.init.split(':')[0]),
            Number(i?.init.split(':')[1]),
          ),
          end: new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            Number(i?.end.split(':')[0]),
            Number(i?.end.split(':')[1]),
          ),
        }),
      );
      intervalsOfDay.forEach((iD: { init: Date; end: Date }) => {
        if (
          isAfter(date, subMinutes(iD.init, workTime)) &&
          isBefore(date, iD.end)
        ) {
          isIntervalTime = false;
        }
      });
      return isIntervalTime;
    },
    [hour],
  );

  const getScheduledTimes = async () => {
    const response = await getSchedulesByProfessionalIdAndServiceId(
      cart[cart.length - 1]?.professionalId,
      cart[cart.length - 1]?.serviceId,
    );
    const parsedSchedulesData = Object.entries(response as {}).map(
      // @ts-ignore
      ([id, data]) => Schedule({ ...data, id }),
    );
    const confirmedSchedules = parsedSchedulesData.map(
      // @ts-ignore
      schedule => new Date(schedule.start.seconds * 1000),
    );
    setConfirmedSchedules(confirmedSchedules);
    return confirmedSchedules;
  };

  const itsScheduled = (date: Date) => {
    let isScheduled = true;
    confirmedSchedules.forEach(schedule => {
      if (date.toISOString() === schedule.toISOString()) {
        isScheduled = false;
      }
    });
    return isScheduled;
  };

  useEffect(() => {
    return () => {
      getScheduledTimes();
      setInitalDateWork();
    };
  }, []);

  return {
    actions: {
      setDate,
      setHour,
      setCart,
      handleSelectDate,
      handleSelectHour,
      daysNotWork,
      setInitalDateWork,
      formatExibitionDate,
      TimesOfDayBasedInTimeService,
      verifyWorkTime,
      verifyIntervalTime,
      itsScheduled,
    },
    states: { date, hour, cart, confirmedSchedules },
  };
};
