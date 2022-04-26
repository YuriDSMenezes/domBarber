// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { firestoreDb } from 'services/FirestoreDatabase';

export const getAllProfessionalsByCompanyId = async (companyId: string) => {
  try {
    const response = await firestoreDb.professional.getWhere({
      wheres: [
        ['companyId', '==', companyId],
        ['projectId', '==', 'dombarber'],
      ],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar professionals by CompanyId', error);
    return null;
  }
};
