// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { firestoreDb } from 'services/FirestoreDatabase';

export const getAllKitsByCompanyId = async (companyId: string) => {
  try {
    const response = await firestoreDb.kits.getWhere({
      wheres: [['companyId', '==', companyId]],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar professionals by CompanyId', error);
    return null;
  }
};
