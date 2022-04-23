import { firestoreDb } from 'services/FirestoreDatabase';

export const getCompanyByUrl = async (url: string) => {
  try {
    const response = await firestoreDb.company.getWhere({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wheres: [['app.url', '==', url]],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar CompanyId pela URL', error);
    return null;
  }
};
