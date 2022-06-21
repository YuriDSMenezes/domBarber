import api from 'services/api';

export const getCommandsOpen = async (
  companyId: string,
  clientId: string,
  token: string,
) => {
  try {
    const params = new URLSearchParams([['clientId', clientId]]);
    const response = await api.get('command/client', {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: 'dombarber',
        companyId,
      },
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar as comandas abertas', error);
    return null;
  }
};
