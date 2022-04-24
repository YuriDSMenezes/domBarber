import { firestoreDb } from 'services/FirestoreDatabase';

export const getProductsByCompanyId = async (companyId: string) => {
  try {
    const response = await firestoreDb.product.getWhere({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wheres: [['companyId', '==', companyId]],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar Produtos pelo CompanyId', error);
    return null;
  }
};
