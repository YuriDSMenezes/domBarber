import { BaseTypes } from '../base/index.d';
import { ServiceImage } from './image';

export interface Service extends BaseTypes {
  categoryId?: string;
  resourceId?: string;

  name: string;
  price: number;
  color: string;
  runtime: number;
  commission: number;
  description?: string;
  pointsToTrade: number;
  images: ServiceImage[];
  pointsGenerated: number;
}
