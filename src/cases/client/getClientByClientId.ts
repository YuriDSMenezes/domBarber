import { environment } from 'environments/environment';
import api from 'services/api';

export const getClientByClientId = async (
  clientId: string,
  companyId: string,
  token: string,
) => {
  try {
    const response = await api.get(`client/${clientId}`, {
      headers: {
        ProjectId: environment.projectId,
        CompanyId: companyId,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
