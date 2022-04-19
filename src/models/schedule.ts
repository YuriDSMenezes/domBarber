import { ScheduleCanceled } from './types/scheduleCanceled';

export interface Schedule {
  kitId?: string;
  clientId: string;
  commandId?: string;
  serviceIds: string[];
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
  // Default Properties
  id: string;
  projectId: string;
  companyId: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export const scheduleModel = (schedule: Schedule): Schedule => ({
  kitId: schedule?.kitId || '',
  clientId: schedule.clientId,
  commandId: schedule?.commandId || '',
  serviceIds: schedule.serviceIds,
  professionalId: schedule.professionalId,
  end: schedule.end,
  start: schedule.start,
  title: schedule.title,
  color: schedule.color,
  block: schedule.block,
  from: schedule.from,
  done: schedule?.done,
  payed: schedule?.payed,
  canceled: {
    date: schedule?.canceled?.date || undefined,
    description: schedule?.canceled?.description || '',
  },
  id: schedule.id,
  projectId: schedule.projectId,
  companyId: schedule.companyId,
  createdAt: schedule.createdAt || new Date(),
  updatedAt: schedule.updatedAt || undefined,
  deletedAt: schedule.deletedAt || undefined,
});
