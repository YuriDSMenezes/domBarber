// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { firestoreDb } from 'services/FirestoreDatabase';

export const getProductsByCompanyId = async (companyId: string) => {
  try {
    const response = await firestoreDb.product.getWhere({
      wheres: [
        ['companyId', '==', companyId],
        ['projectId', '==', 'dombarber'],
      ],
    });
    return response.data.docs;
  } catch (error) {
    console.error('Erro ao buscar Produtos pelo CompanyId', error);
    return null;
  }
};
