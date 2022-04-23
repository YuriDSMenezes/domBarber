import { firestoreDb } from 'services/FirestoreDatabase';

export const getSchedules = async () => {
  try {
    const response = await firestoreDb.companySchedules.getWhere({});
    console.log(response);
  } catch (error) {
    console.error('Erro ao buscar agendamentos', error);
  }
};
