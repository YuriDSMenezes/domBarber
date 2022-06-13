import api from 'services/api';

export const updateScheduleByScheduleId = async (
  scheduleId: string,
  start: string,
  companyId: string,
  token: string,
) => {
  try {
    const response = await api.put(
      `schedule/${scheduleId}`,
      {
        start,
        from: 'pro-app',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: 'dombarber',
          companyId,
        },
      },
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
