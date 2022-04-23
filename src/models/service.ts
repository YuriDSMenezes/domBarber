import { Service as ServiceType } from './types/service';

export const Service = (service: ServiceType): ServiceType => ({
  categoryId: service.categoryId || '',
  resourceId: service.resourceId || '',
  name: service.name,
  price: service.price,
  color: service.color,
  runtime: service.runtime,
  commission: service.commission,
  description: service.description || '',
  pointsToTrade: service.pointsToTrade,
  images: service.images,
  pointsGenerated: service.pointsGenerated,
  id: service.id,
  projectId: service.projectId,
  companyId: service.companyId,
  createdAt: service.createdAt || new Date(),
  updatedAt: service.updatedAt || undefined,
  deletedAt: service.deletedAt || undefined,
});
