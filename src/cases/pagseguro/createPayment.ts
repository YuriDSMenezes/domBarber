import { environment } from 'environments/environment';
import api from 'services/api';

export const createPayment = async (
  clientId: string,
  cardToken: string,
  paymentType: 'creditCard',
  installmentValue: number,
  installmentQuantity: number,
  companyId: string,
  token: string,
  commandItemIds: string[],
) => {
  try {
    const response = await api.post(
      `pagseguro/transaction
`,
      {
        clientId,
        cardToken,
        paymentType,
        installmentValue,
        installmentQuantity,
        commandItemIds,
      },
      {
        headers: {
          ProjectId: environment.projectId,
          CompanyId: companyId,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
