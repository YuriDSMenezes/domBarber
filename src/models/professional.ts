import { Professional as ProfessionalType } from './types/professional';

export const Professional = (
  professional: ProfessionalType,
): ProfessionalType => ({
  userId: professional?.userId || '',
  serviceIds: professional.serviceIds,
  collaboratorId: professional.collaboratorId,
  name: professional.name,
  nick: professional?.nick || '',
  image: professional?.image || '',
  days: professional.days,
  services: professional.services,
  id: professional.id,
  projectId: professional.projectId,
  companyId: professional.companyId,
  createdAt: professional.createdAt || new Date(),
  updatedAt: professional.updatedAt || undefined,
  deletedAt: professional.deletedAt || undefined,
});
