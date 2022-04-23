import { BaseTypes } from '../base/index.d';
import { ScheduleCanceled } from './canceled';

export interface Schedule extends BaseTypes {
  kitId?: string;
  clientId: string;
  commandId?: string;
  serviceIds: Array<string>;
  professionalId: string;
  end: Date;
  start: Date;
  title: string;
  color: string;
  block: boolean;
  from: 'whatsapp' | 'cli-app' | 'pro-app' | 'panel';
  done?: Date;
  payed?: Date;
  canceled?: ScheduleCanceled;
}
