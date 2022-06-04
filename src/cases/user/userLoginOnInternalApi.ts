import { environment } from 'environments/environment';
import api from 'services/api';

export const userLoginOnInternalApi = async (
  userId: string,
  authType: string,
  companyId: string,
  token: string,
) => {
  try {
    // const params = new URLSearchParams([
    //   ['authId', userId],
    //   ['authType', authType],
    //   ['companyId', companyId],
    // ]);
    const response = await api.post(
      `client/auth/login;authId=${userId};authType=${authType};companyId=${companyId}`,
      {
        authId: userId,
        authType,
        companyId,
      },
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
    console.log(error);
  }
};
