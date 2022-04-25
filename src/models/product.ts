import { Product as ProductType } from './types/product';

export const Product = (product: ProductType): ProductType => ({
  categoryId: product?.categoryId || '',
  name: product.name,
  price: product.price,
  description: product?.description || '',
  pointsToTrade: product.pointsToTrade,
  images: product.images,
  pointsGenerated: product.pointsGenerated,
  id: product.id,
  projectId: product.projectId,
  companyId: product.companyId,
  createdAt: product.createdAt || new Date(),
  updatedAt: product.updatedAt || undefined,
  deletedAt: product.deletedAt || undefined,
});
