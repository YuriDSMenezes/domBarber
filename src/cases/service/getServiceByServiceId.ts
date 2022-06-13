import api from 'services/api';

export const getServiceByServiceId = async (
  token: string,
  serviceId: string,
  companyId: string,
) => {
  try {
    const response = await api.get(`service/${serviceId}`, {
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
