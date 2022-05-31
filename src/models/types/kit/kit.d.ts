import { BaseTypes } from '../base';
import { KitImage } from './image';
import { KitService } from './service';

export interface Kit extends BaseTypes {
  serviceIds: string[];

  name: string;
  color: string;
  price: number;
  runtime: number;

  images: KitImage[];
  services: KitService[];
}
