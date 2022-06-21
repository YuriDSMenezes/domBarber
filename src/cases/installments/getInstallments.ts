import { environment } from 'environments/environment';
import api from 'services/api';

export const getInstallments = async (
  companyId: string,
  clientId: string,
  token: string,
  creditCardBrand: 'creditCard',
  amount: string,
) => {
  try {
    const params = {
      amount,
      creditCardBrand,
    };
    const response = await api.get(`pagseguro/card/installment-condition`, {
      params,
      headers: {
        ProjectId: environment.projectId,
        CompanyId: companyId,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
};
