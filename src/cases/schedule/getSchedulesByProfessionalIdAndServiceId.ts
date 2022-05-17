// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { firestoreDb } from 'services/FirestoreDatabase';

export const getSchedulesByProfessionalIdAndServiceId = async (
  professionalId: string,
  serviceId: string,
) => {
  try {
    const response = await firestoreDb.companySchedules.getWhere({
      wheres: [
        ['professionalId', '==', professionalId],
        ['serviceIds', 'array-contains', serviceId],
      ],
    });
    return response.data.docs;
  } catch (error) {
    console.error(
      `Erro ao buscar agendamentos do profisional: ${professionalId} e serviço {serviceId}`,
      error,
    );
  }
};
