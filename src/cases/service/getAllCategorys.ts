import api from 'services/api';

export const getAllServiceCategories = async (
  token: string,
  companyId: string,
) => {
  try {
    const response = await api.get(`service/category?companyId=${companyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: 'dombarber',
        companyId,
      },
    });

    return response.data;
  } catch (error) {
    return console.error('Erro ao buscar agendamento por id do cliente');
  }
};
