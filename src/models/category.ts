import { BaseTypes } from './types/base';

export interface Category extends BaseTypes {
  name: string;
  description?: string;
}
