import { firestoreDb } from 'services/FirestoreDatabase';

export const getAllServicesByCompanyId = async (companyId: string) => {
  try {
    const response = await firestoreDb.service.getWhere({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wheres: [['companyId', '==', companyId]],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar services by CompanyId', error);
    return null;
  }
};
