import { BaseTypes } from '../base/index.d';

export interface Product extends BaseTypes {
  categoryId?: string;

  name: string;
  price: number;
  description?: string;
  pointsToTrade: number;
  images: ProductImage[];
  pointsGenerated: number;
}
