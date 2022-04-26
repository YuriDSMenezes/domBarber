// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { firestoreDb } from 'services/FirestoreDatabase';

export const getCompanyByUrl = async (url: string) => {
  try {
    const response = await firestoreDb.company.getWhere({
      wheres: [
        ['app.url', '==', url],
        ['projectId', '==', 'dombarber'],
      ],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar CompanyId pela URL', error);
    return null;
  }
};
