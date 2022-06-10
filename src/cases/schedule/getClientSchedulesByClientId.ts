import api from 'services/api';

export const getClientSchedulesByClientId = async (
  token: string,
  clientId: string,
  companyId: string,
) => {
  try {
    const params = new URLSearchParams([['clientId', clientId]]);
    const response = await api.get('schedule/client', {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: 'dombarber',
        companyId,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar agendamento por id do cliente');
  }
};
