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
    const schedulesFormatted = schedules.map(item => ({
      start: item.start,
      serviceId: item.serviceId,
      professionalId: item.professionalId,
    }));

    const schedulesKitFormatted = schedules.map(item => ({
      kitId: item.id,
      services: item.services.map(subItem => ({
        serviceId: subItem.id,
        start: subItem.start,
        professionalId: subItem.professionalId,
      })),
    }));

    const body = {
      companyId,
      from,
      clientId,
      schedules: schedulesFormatted,
    };
    let response;
    schedules.map(async item => {
      if (item.service.services) {
        response = await api.post(
          'schedule/kit',
          { ...body, schedules: schedulesKitFormatted },
          {
            headers: {
              ProjectId: environment.projectId,
              CompanyId: companyId,
              Authorization: `Bearer ${token}`,
            },
          },
        );
      }
    });
    return response.data.docs;
  } catch (error) {
    return console.error('erro', error);
  }
};
