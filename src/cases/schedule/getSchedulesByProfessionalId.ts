// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { firestoreDb } from 'services/FirestoreDatabase';

export const getSchedulesByProfessionalId = async (professionalId: string) => {
  try {
    const response = await firestoreDb.companySchedules.getWhere({
      wheres: [['professionalId', '==', professionalId]],
    });
    return response.data.docs;
  } catch (error) {
    console.error(
      `Erro ao buscar agendamentos do profisional: ${professionalId}`,
      error,
    );
  }
};
