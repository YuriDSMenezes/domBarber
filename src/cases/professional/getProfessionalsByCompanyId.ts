import { firestoreDb } from 'services/FirestoreDatabase';

export const getAllProfessionalsByCompanyId = async (companyId: string) => {
  try {
    const response = await firestoreDb.professional.getWhere({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wheres: [['companyId', '==', companyId]],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar professionals by CompanyId', error);
    return null;
  }
};
