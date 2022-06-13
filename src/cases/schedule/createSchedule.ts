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
    const schedulesFormatted = schedules.map(
      item =>
        !item.service.services && {
          companyId,
          from,
          clientId,
          start: item?.start,
          serviceIds: [item.serviceId],
          professionalId: item?.professionalId,
        },
    );
    const schedulesKitFormatted = schedules.map(
      item =>
        item?.service?.services && {
          from,
          kitId: item.service.id,
          clientId,
          services: item?.service?.services?.map(subItem => ({
            serviceId: subItem.id,
            start: subItem.start,
            professionalId: subItem.professionalId,
          })),
        },
    );

    // console.log(schedulesFormatted);

    if (schedulesFormatted) {
      return schedulesFormatted.forEach(async schedule => {
        await api.post('schedule', schedule, {
          headers: {
            ProjectId: environment.projectId,
            CompanyId: companyId,
            Authorization: `Bearer ${token}`,
          },
        });
      });
    }

    if (schedulesKitFormatted) {
      return schedulesKitFormatted.forEach(async schedule => {
        await api.post('schedule/kit', schedule, {
          headers: {
            ProjectId: environment.projectId,
            CompanyId: companyId,
            Authorization: `Bearer ${token}`,
          },
        });
      });
    }
    return [];
  } catch (error) {
    return console.error('erro', error);
  }
};
