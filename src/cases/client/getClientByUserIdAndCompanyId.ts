import { environment } from 'environments/environment';
import api from 'services/api';

export const getClientByUserIdAndCompanyId = async (
  userId: string,
  companyId: string,
  token: string,
) => {
  try {
    const response = await api.get(
      `client/auth;authId=${userId};companyId=${companyId};projectId=${environment.projectId}`,
      {
        headers: {
          ProjectId: environment.projectId,
          CompanyId: companyId,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
