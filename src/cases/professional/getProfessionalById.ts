// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { firestoreDb } from 'services/FirestoreDatabase';

export const getProfessionalById = async (professionalId: string) => {
  try {
    const response = await firestoreDb.professional.get(professionalId);
    return response.data.doc;
  } catch (error) {
    console.error(
      `Erro ao buscar agendamentos do profisional: ${professionalId}`,
      error,
    );
    return null;
  }
};
