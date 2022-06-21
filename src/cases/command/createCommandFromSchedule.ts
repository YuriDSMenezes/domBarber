import { environment } from 'environments/environment';
import api from 'services/api';

interface CommandItem {
  id: string;
  scheduleIds: string[];
  quantity: number;
  type: 'service' | 'kit' | 'product';
  discount: number;
  pointUsed: boolean;
}

export const createCommandFromSchedule = async (
  companyId: string,
  token: string,
  clientId: string,
  items: CommandItem[],
) => {
  try {
    const response = await api.post(
      `command`,
      {
        clientId,
        items,
      },
      {
        headers: {
          ProjectId: environment.projectId,
          CompanyId: companyId,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response?.data[0];
  } catch (error) {
    return console.error(error);
  }
};
