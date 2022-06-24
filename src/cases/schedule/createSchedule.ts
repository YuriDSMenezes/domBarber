// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { environment } from 'environments/environment.prod';
import api from 'services/api';
import { createCommandFromSchedule } from 'cases/command/createCommandFromSchedule';
import { useGlobal } from 'hooks/Global';
import { ScheduleCanceled } from '../../models/types/schedule/canceled.d';

interface scheduleCreateProps {
  companyId: string;
  token: string;
  from: string;
  clientId: string;
  schedules: string;
}

export const createSchedule = async ({
  companyId,
  token,
  from,
  clientId,
  schedules,
}: scheduleCreateProps) => {
  try {
    const ScheduledServices: any = [];
    const ScheduledKits: any = [];

    const verifySchedule = schedules?.filter(
      item => !item?.service?.services || !item?.product,
    );
    const schedulesFormatted = verifySchedule?.map(item => ({
      companyId,
      from,
      clientId,
      start: item?.start,
      serviceIds: [item.serviceId],
      professionalId: item?.professionalId,
    }));

    if (schedulesFormatted.length > 0) {
      schedulesFormatted.forEach(async schedule => {
        const r = await api.post('schedule', schedule, {
          headers: {
            ProjectId: environment.projectId,
            CompanyId: companyId,
            Authorization: `Bearer ${token}`,
          },
        });
        ScheduledServices.push(r.data);
      });
    }

    const verifyScheduleKit = schedules?.filter(
      item => item?.service?.services,
    );

    const schedulesKitFormatted = verifyScheduleKit.map(item => ({
      from,
      kitId: item.service.id,
      clientId,
      services: item?.service?.services?.map(subItem => ({
        serviceId: subItem.id,
        start: subItem.start,
        professionalId: subItem.professionalId,
      })),
    }));

    if (schedulesKitFormatted.length > 0) {
      schedulesKitFormatted.forEach(async schedule => {
        const r = await api.post('schedule/kit', schedule, {
          headers: {
            ProjectId: environment.projectId,
            CompanyId: companyId,
            Authorization: `Bearer ${token}`,
          },
        });
        ScheduledKits.push(r.data);
      });
    }

    const verifyScheduleProduct = schedules?.filter(item => item?.product);

    const waitSeconds =
      schedulesFormatted.length + schedulesKitFormatted.length;

    setTimeout(async () => {
      const response = await createCommandFromSchedule(
        companyId,
        token,
        clientId,
        [
          ...ScheduledServices.map((ss: any) => ({
            id: ss?.serviceIds && ss?.serviceIds[0],
            scheduleIds: [ss.id],
            quantity: 1,
            type: 'service',
            discount: 0,
            pointUsed: false,
          })),
          ...ScheduledKits.map(sk => ({
            id: sk?.serviceIds && sk?.serviceIds[0],
            scheduleIds: [sk.id],
            quantity: 1,
            type: 'kit',
            discount: 0,
            pointUsed: false,
          })),
          ...verifyScheduleProduct.map(item => ({
            id: item.productId,
            quantity: item.quantity,
            type: 'product',
            pointsUsed: false,
          })),
        ],
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('@domBarber:command', JSON.stringify(response));
      }
    }, Number(`${waitSeconds}000`));
    return response;
  } catch (error) {
    return console.error('erro', error);
  }
};
