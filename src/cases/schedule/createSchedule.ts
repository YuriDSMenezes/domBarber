// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { environment } from 'environments/environment.prod';
import api from 'services/api';

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
    const verifySchedule = schedules?.filter(item => !item?.service?.services);
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
        await api.post('schedule', schedule, {
          headers: {
            ProjectId: environment.projectId,
            CompanyId: companyId,
            Authorization: `Bearer ${token}`,
          },
        });
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
        await api.post('schedule/kit', schedule, {
          headers: {
            ProjectId: environment.projectId,
            CompanyId: companyId,
            Authorization: `Bearer ${token}`,
          },
        });
      });
    }

    return null;
  } catch (error) {
    return console.error('erro', error);
  }
};
