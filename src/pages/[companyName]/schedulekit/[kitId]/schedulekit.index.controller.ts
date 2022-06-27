import { useGlobal } from 'hooks';
import {
  addDays,
  addMinutes,
  eachDayOfInterval,
  endOfMonth,
  format,
  isAfter,
  isBefore,
  startOfDay,
  startOfMonth,
  subMinutes,
} from 'date-fns';
import { WorkDay } from 'models/types/company';
import { useCallback, useEffect, useState } from 'react';
import { Schedule } from 'models/schedule';
import { firestoreDb } from 'services/FirestoreDatabase';
import { useRouter } from 'next/router';

const useSchedulesKitIndex = () => {
  const { query } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  const [isSelectedFirstHour, setIsSelectedFirstHour] = useState(false);
  const [selectedKit, setSelectedKit] = useState();
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>();
  const [cart, setCart] = useState<[]>(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');
      if (cart) {
        const parsedCart = JSON.parse(cart);
        const queryIndex = query.index;
        const getCart = parsedCart[Number(queryIndex)];
        setSelectedKit(getCart);
        return parsedCart;
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
      date?.getFullYear(),
      date?.getMonth(),
      date?.getDate(),
      new Date(hour).getHours(),
      new Date(hour).getMinutes(),
      0,
    );
    setDate(newDate);
  };

  const days =
    date &&
    eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });

  const daysNotWork = useCallback(() => {
    const daysNW: Array<Date> = [];
    days?.forEach(day => {
      if (new Date(day) < new Date()) daysNW.push(day);
      cart[cart.length - 1]?.professional?.days?.forEach((dw: WorkDay) => {
        if (dw.weekId === new Date(day).getDay()) daysNW.push(day);
      });
    });
    if (days) {
      return [
        ...days?.filter(day => new Date(day) < new Date()),
        ...days?.filter(day => !daysNW?.includes(day)),
      ];
    }
    return [];
  }, [date]);

  const setInitalDateWork = () => {
    const daysNW: Array<Date> = [];
    days?.forEach(day => {
      if (new Date(day) < new Date()) daysNW.push(day);
      cart[cart.length - 1]?.professional?.days?.forEach((dw: WorkDay) => {
        if (dw.weekId === new Date(day).getDay()) daysNW.push(day);
      });
    });
    setDate(daysNW.filter(d => new Date(d) > new Date())[0]);
    setHour(daysNW.filter(d => new Date(d) > new Date())[0]?.toISOString());
  };

  const formatExibitionDate = (date: Date, locale: Locale) =>
    format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale });

  const TimesOfDayBasedInTimeService = (serviceMinutes: number): Date[] => {
    const times: Date[] = [
      new Date(date?.getFullYear(), date?.getMonth(), date?.getDate(), 0, 0),
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

  const verifyOpeningCompanyTime = useCallback(
    (date: Date) => {
      const rulesOfDay = company?.openingHours?.filter(
        (d: WorkDay) => d.weekId === date?.getDay(),
      )[0];

      const initOpen = new Date(
        date?.getFullYear(),
        date?.getMonth(),
        date?.getDate(),
        Number(rulesOfDay?.init.split(':')[0]),
        Number(rulesOfDay?.init.split(':')[1]),
      );

      const endOpen = new Date(
        date?.getFullYear(),
        date?.getMonth(),
        date?.getDate(),
        Number(rulesOfDay?.end.split(':')[0]),
        Number(rulesOfDay?.end.split(':')[1]),
      );

      if (isAfter(date, initOpen) && isBefore(date, endOpen)) return true;
      return false;
    },
    [hour],
  );

  const verifyWorkTime = useCallback(
    (date: Date, workTime: number) => {
      const rulesOfDay = cart[cart.length - 1]?.professional?.days?.filter(
        (d: WorkDay) => d.weekId === date?.getDay(),
      )[0];
      const initWork = new Date(
        date?.getFullYear(),
        date?.getMonth(),
        date?.getDate(),
        Number(rulesOfDay?.init.split(':')[0]),
        Number(rulesOfDay?.init.split(':')[1]),
      );
      const endWork = new Date(
        date?.getFullYear(),
        date?.getMonth(),
        date?.getDate(),
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
        (d: WorkDay) => d.weekId === date?.getDay(),
      )[0];
      const intervalsOfDay = rulesOfDay?.intervals?.map(
        (i: { init: string; end: string }) => ({
          init: new Date(
            date?.getFullYear(),
            date?.getMonth(),
            date?.getDate(),
            Number(i?.init.split(':')[0]),
            Number(i?.init.split(':')[1]),
          ),
          end: new Date(
            date?.getFullYear(),
            date?.getMonth(),
            date?.getDate(),
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

  const itsScheduled = useCallback(
    (date: Date) => {
      let isScheduled = false;
      confirmedSchedules.forEach(schedule => {
        if (date?.toISOString() === schedule.toISOString()) {
          isScheduled = true;
        }
      });
      return isScheduled;
    },
    [confirmedSchedules],
  );

  useEffect(() => {
    // getScheduledTimes();
    firestoreDb.companySchedules.getSyncWhere({
      wheres: [
        // @ts-ignore
        ['professionalId', '==', cart[cart.length - 1]?.professionalId],
        // @ts-ignore
        ['serviceIds', 'array-contains', cart[cart.length - 1]?.serviceId],
      ],
      callback: response => {
        const parsedSchedulesData = Object.entries(
          response?.data?.docs as {},
        ).map(
          // @ts-ignore
          ([id, data]) => Schedule({ ...data, id }),
        );
        const confirmedSchedules = parsedSchedulesData.map(
          // @ts-ignore
          schedule => new Date(schedule.start?.seconds * 1000),
        );
        setConfirmedSchedules(confirmedSchedules);
      },
    });
  }, []);

  useEffect(() => {
    return () => setInitalDateWork();
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
      verifyOpeningCompanyTime,
      setIsSelectedFirstHour,
    },
    states: {
      date,
      hour,
      cart,
      confirmedSchedules,
      isSelectedFirstHour,
    },
  };
};

export default useSchedulesKitIndex;
