import { Kit as KitType } from './types/kit';

export const Kits = (kit: KitType): KitType => ({
  id: kit.id,
  name: kit.name || '',
  color: kit.color || '',
  companyId: kit.companyId || '',
  createdAt: kit.createdAt || '',
  images: kit.images || [],
  price: kit.price || 0,
  projectId: kit.projectId || '',
  runtime: kit.runtime || 0,
  serviceIds: kit.serviceIds || [],
  services: kit.services || [],
  deletedAt: kit.deletedAt || new Date(),
  updatedAt: kit.updatedAt || new Date(),
});
