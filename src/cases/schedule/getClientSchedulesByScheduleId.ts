import api from 'services/api';

export const getClientScheduleByScheduleId = async (
  scheduleId: string,
  token: string,
  companyId: string,
) => {
  try {
    const response = await api.get(`schedule/${scheduleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: 'dombarber',
        companyId,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar agendamento por id');
  }
};
