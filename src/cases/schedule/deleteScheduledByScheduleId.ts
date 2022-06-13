import api from 'services/api';

export const deleteScheduledByScheduleId = async (
  scheduleId: string,
  companyId: string,
  token: string,
) => {
  try {
    const response = await api.delete(`schedule/${scheduleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: 'dombarber',
        companyId,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
