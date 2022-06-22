import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import { environment } from 'environments/environment';
import { Client } from 'models/types/client';
import api from 'services/api';

export const updateClientByClientId = async (
  clientId: string,
  client: Client,
  companyId: string,
) => {
  try {
    await api.put(`client/${clientId}`, client, {
      headers: {
        ProjectId: environment.projectId,
        CompanyId: companyId,
        Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
      },
    });
  } catch (error) {
    console.error('Erro ao Atualizar dados do cliente', error);
  }
};
