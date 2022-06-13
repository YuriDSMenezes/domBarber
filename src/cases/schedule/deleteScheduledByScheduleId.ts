import api from 'services/api';

export const deleteScheduledByScheduleId = async (
  scheduleId: string,
  companyId: string,
  token: string,
) => {
  try {
    const response = await api.patch(
      `schedule/${scheduleId}/cancel`,
      {
        reasonForCancellation: 'Cancelamento',
        description: 'Cancelamento',
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
